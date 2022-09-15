import React, { useState, useEffect } from 'react';
import instance from '../../Redux/modules/instance';
import { useInView } from 'react-intersection-observer';
import ClapButton from 'react-clap-button';
//components import
import Medal from './Medal';
import ClapIcon from '../../static/components/ClapIcon';
import DoneClap from '../../static/components/DoneClap';
import FeedSkeleton from '../../Components/Skeleton/FeedSkeleton';
import RankingSkeleton from '../../Components/Skeleton/RankingSkeleton';
import Footer from '../../Components/Footer/Footer';
import { Shake } from './FeedStyled';
//redux
import { __GetLanks } from '../../Redux/modules/ranks';
import { useDispatch, useSelector } from 'react-redux';

//styled import
import {
  FeedPage,
  MedalBox,
  RankingBox,
  RankTitle,
  UserProfile,
  UserName,
  UserArea,
  InfoArea,
  CategoryArea,
  CategoryButton,
  CategoryButtonText,
  FeedArea,
  FeedCard,
  CardBottomArea,
  CardTopArea,
  TagArea,
  ClapPoint,
  ClapArea,
  FeedProfile,
  FeedNickname,
  FeedContent,
  FeedText,
  TotalFeed,
  LargePhoto,
  ClapBox,
  ScrollDiv,
  BottomProfileArea,
  ArrowArea,
  ContentArea,
  CustomIcon,
} from './FeedStyled';
import FeedArrow from '../../static/components/FeedArrow';

const Feed = ({ Header }) => {
  const ranks = useSelector((state) => state.ranks.ranks);
  const [clapArr, setClapArr] = useState([]);
  const [clapCheck, setClapCheck] = useState([]);
  const [category, setCategory] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [FeedList, setFeedList] = useState([]);
  const [last, setLast] = useState('');
  const [ref, inView] = useInView();
  const dispatch = useDispatch();

  const categoryList = [
    '전체보기',
    '#NO일회용품',
    '#분리수거',
    '#환경운동',
    '#환경용품사용',
    '#에너지절약',
    '#기타',
  ];
  const categoryApi = [
    'all',
    'disposable',
    'separate',
    'environmental',
    'goods',
    'energy',
    'etc',
  ];

  useEffect(() => {
    dispatch(__GetLanks());
  }, [dispatch]);
  //clap
  const CheckClap = (item) => {
    if (clapCheck.includes(item) && clapArr.includes(item)) {
      setClapArr([...clapArr.filter((i) => i !== item)]);
      setClapCheck([...clapCheck.filter((i) => i !== item)]);
    } else if (!clapCheck.includes(item) && !clapArr.includes(item)) {
      setClapArr([...clapArr, item]);
      setClapCheck([...clapCheck, item]);
    } else if (!clapCheck.includes(item) && clapArr.includes(item)) {
      setClapArr([...clapArr.filter((i) => i !== item)]);
    }
  };
  const changeClap = async (id) => {
    await instance
      .post(`/feed/claps/${id}`)
      .then((res) => {
        setFeedList(
          FeedList.map((feed) => {
            if (res.data.data && feed.id === id) {
              feed.clapCount++;
              feed.clapByMe = !feed.clapByMe;
            } else if (!res.data.data && feed.id === id) {
              feed.clapCount--;
              feed.clapByMe = !feed.clapByMe;
            }
            return feed;
          })
        );
      })
      .catch((error) => error);
  };
  //categri
  const TagClick = () => {
    setLoading(true);
    category == 0
      ? instance
          .get(
            `/feed/?lastFeedId=${last == 0 ? Number.MAX_SAFE_INTEGER : last}`
          )
          .then((res) => {
            setFeedList([...FeedList, ...res.data.data]);
            setLast(res.data.data[res.data.data.length - 1].id);
            setClapArr(res.data.data.map((item) => item.id));
          })
      : instance
          .get(
            `/feed/tags/${categoryApi[category]}/?lastFeedId=${
              last == 0 ? Number.MAX_SAFE_INTEGER : last
            }`
          )
          .then((res) => {
            setFeedList([...FeedList, ...res.data.data]);
            setLast(res.data.data[res.data.data.length - 1].id);
            setClapArr(
              res.data.data.map((item) => (item.ClapByMe ? item.id : null))
            );
          });
    setLoading(false);
  };
  console.log(clapArr);
  console.log(clapCheck);
  console.log(FeedList)
  useEffect(() => {
    setPage(page + 1);
  }, [inView]);

  useEffect(() => {
    setFeedList([]);
    setClapArr([]);
    setClapCheck([]);
    setPage(0);
    setLast(0);
  }, [category]);

  useEffect(() => {
    page === 0 || page % 2 ? TagClick() : console.log();
  }, [page]);

  return (
    <>
      {Header}

      <FeedPage>
        {!loading && ranks ? (
          <RankingBox>
            <RankTitle>Today's Ranking</RankTitle>
            <MedalBox>
              {ranks.map((item, index) => (
                <InfoArea key={index + item}>
                  <Medal num={index} />
                  <UserArea>
                    <UserProfile src={item.profilePhoto} />
                    <UserName>{item.nickName}</UserName>
                  </UserArea>
                </InfoArea>
              ))}
            </MedalBox>
          </RankingBox>
        ) : (
          <RankingSkeleton />
        )}
        <CategoryArea>
          {categoryList.map((item, index) => (
            <CategoryButton
              key={item + index}
              onClick={() => setCategory(index)}
              check={index}
              num={category}
            >
              <CategoryButtonText>{item}</CategoryButtonText>
            </CategoryButton>
          ))}
        </CategoryArea>
        <FeedArea>
          {/* <ClapBox clap={Shake}>
            <DoneClap />
          </ClapBox> */}
          {!loading && FeedList ? (
            FeedList.map((item, index) => (
              <TotalFeed key={item + index}>
                <FeedCard>
                  <CardTopArea>
                    <TagArea
                      onClick={() =>
                        setCategory(categoryList.indexOf(item.tag))
                      }
                    >
                      {item.tag}
                    </TagArea>
                  </CardTopArea>
                  <LargePhoto src={item.missionImgUrl} />
                </FeedCard>
                <FeedContent>
                  <CardBottomArea>
                    <BottomProfileArea>
                      {' '}
                      <FeedProfile src={item.profilePhoto} />
                      <FeedNickname>{item.authorName}</FeedNickname>
                    </BottomProfileArea>
                    {/* 박수 */}

                    <ClapArea
                      onClick={() => {
                        changeClap(item.id);
                        CheckClap(item.id);
                      }}
                      type="button"
                    >
                      <ClapPoint>{item.clapCount}</ClapPoint>
                      <ClapBox
                        clapCheck={clapCheck}
                        clapArr={clapArr}
                        check={item.id}
                      >
                        {item.clapByMe ? (
                          <DoneClap />
                        ) : (
                          <ClapIcon color={'#84CA79'} />
                        )}
                      </ClapBox>
                    </ClapArea>
                  </CardBottomArea>
                  <ContentArea>
                    <ArrowArea>
                      {' '}
                      <FeedArrow />
                    </ArrowArea>
                    <FeedText>{item.content}</FeedText>
                  </ContentArea>
                </FeedContent>
              </TotalFeed>
            ))
          ) : (
            <>
              <FeedSkeleton />
              <FeedSkeleton />
              <FeedSkeleton />
            </>
          )}
          {loading ? (
            <>
              <FeedSkeleton />
              <FeedSkeleton />
              <FeedSkeleton />
            </>
          ) : null}
        </FeedArea>
        <ScrollDiv ref={ref} />
      </FeedPage>

      <Footer />
    </>
  );
};

export default Feed;
