import React, { useState, useEffect } from 'react';
import instance from '../../Redux/modules/instance';
import { useInView } from 'react-intersection-observer';
//components import
import Medal from './Medal';
import ClapIcon from '../../static/components/ClapIcon';
import DoneClap from '../../static/components/DoneClap';
import FeedSkeleton from '../../Components/Skeleton/FeedSkeleton';
import RankingSkeleton from '../../Components/Skeleton/RankingSkeleton';
//redux
import { __GetLanks } from "../../Redux/modules/ranks";
import { useDispatch, useSelector } from "react-redux";

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
} from './FeedStyled';
import FeedArrow from '../../static/components/FeedArrow';


const Feed = () => {
  const ranks = useSelector((state) => state.ranks.ranks);
  const [category, setCategory] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [FeedList, setFeedList] = useState([]);
  const [last, setLast] = useState("");
  const [ref, inView] = useInView();
  const dispatch = useDispatch();

  const categoryList = [
    '전체보기',
    '# NO일회용품',
    '# 분리수거',
    '# 환경운동',
    '# 환경용품사용',
    '#에너지절약',
    '#기타',

  ];
  const categoryApi = [
    "all",
    "disposable",
    "separate",
    "environmental",
    "goods",
    "energy",
    "etc",
  ];

  useEffect(() => {
    dispatch(__GetLanks());
  }, [dispatch]);
  //clap
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

  const URL = process.env.REACT_APP_URL;
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
          });
    setLoading(false);
  };

  useEffect(() => {
    setPage(page + 1);
  }, [inView]);

  useEffect(() => {
    setFeedList([]);
    setPage(0);
    setLast(0);
  }, [category]);

  useEffect(() => {
    page === 0 || page % 2 ? TagClick() : console.log();
  }, [page]);

  return (
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
        {!loading && FeedList ? (
          FeedList.map((item, index) => (
            <TotalFeed key={item + index}>
              <FeedCard>
                <CardTopArea>
                  {/* 박수 */}

                  <ClapArea onClick={() => changeClap(item.id)} type="button">
                    <ClapPoint>{item.clapCount}</ClapPoint>
                    <ClapBox>
                      {item.clapByMe ? (
                        <DoneClap />
                      ) : (
                        <ClapIcon color={'white'} />
                      )}
                    </ClapBox>
                  </ClapArea>
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
                  <TagArea onClick={()=>setCategory(categoryList.indexOf(item.tag))} >{item.tag}</TagArea>
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
  );
};

export default Feed;
