//react import
import React, { useState, useEffect } from "react";
import instance from "../../Redux/modules/instance";
import { useInView } from "react-intersection-observer";
//components import
import Medal from "./Medal";
import ClapIcon from "../../static/components/ClapIcon";
import DoneClap from "../../static/components/DoneClap";
import FeedSkeleton from "../../Components/Skeleton/FeedSkeleton";
import RankingSkeleton from "../../Components/Skeleton/RankingSkeleton";
import Footer from "../../Components/Footer/Footer";
import { Shake } from "./FeedStyled";
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
  CategoryDummyDiv,
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
} from "./FeedStyled";
import FeedArrow from "../../static/components/FeedArrow";

const Feed = () => {
  // 랭킹 정보 가져오기
  const ranks = useSelector((state) => state.ranks.ranks);
  // 애니메이션 분기 처리를 위한 배열 2개
  const [clapArr, setClapArr] = useState([]);
  const [clapCheck, setClapCheck] = useState([]);
  // 현재 보고있는 카테고리 값
  const [category, setCategory] = useState(0);
  // 페이지 값
  const [page, setPage] = useState(0);
  // 로딩 상태값
  const [loading, setLoading] = useState(false);
  // 피드를 받는 배열
  const [FeedList, setFeedList] = useState([]);
  // 서버에 보내는 마지막 피드의 id값
  const [last, setLast] = useState("");
  // 화면에 보일시 inView의 값이 true로 변함
  const [ref, inView] = useInView();
  const dispatch = useDispatch();

  const categoryList = [
    "전체보기",
    "#NO일회용품",
    "#분리수거",
    "#환경운동",
    "#환경용품사용",
    "#에너지절약",
    "#기타",
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
  // clap
  const CheckClap = (item) => {
    // 두개의 배열에 모두 들어가있을 경우 둘 다 삭제
    if (clapCheck.includes(item) && clapArr.includes(item)) {
      setClapArr([...clapArr.filter((i) => i !== item)]);
      setClapCheck([...clapCheck.filter((i) => i !== item)]);
    }
    // 두개의 배열에 모두 포함하지 않을경우 둘 다 넣어줌
    else if (!clapCheck.includes(item) && !clapArr.includes(item)) {
      setClapArr([...clapArr, item]);
      setClapCheck([...clapCheck, item]);
    }
    // 하나의 배열에만 들어있을 경우 들어있는 배열의 값을 삭제
    else if (!clapCheck.includes(item) && clapArr.includes(item)) {
      setClapArr([...clapArr.filter((i) => i !== item)]);
    }
  };
  // 박수 쳤을때
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
  // categri
  const TagClick = () => {
    setLoading(true);
    category == 0
      ? instance
          .get(
            `/feed/?lastFeedId=${last == 0 ? Number.MAX_SAFE_INTEGER : last}`
          )
          .then((res) => {
            setFeedList([...FeedList, ...res.data.data]);
            // 받은 피드의 맨 마지막 아이디를 저장
            setLast(res.data.data[res.data.data.length - 1].id);
            // 받아온 값들중 내가 이전에 박수를 친 피드의 아이디를 하나의 배열에 담아놓음
            setClapArr([
              ...clapArr,
              ...res.data.data.map((item) => (item.clapByMe ? item.id : null)),
            ]);
          })
      : instance
          .get(
            `/feed/tags/${categoryApi[category]}/?lastFeedId=${
              last == 0 ? Number.MAX_SAFE_INTEGER : last
            }`
          )
          .then((res) => {
            setFeedList([...FeedList, ...res.data.data]);
            // 받은 피드의 맨 마지막 아이디를 저장
            setLast(res.data.data[res.data.data.length - 1].id);
            // 받아온 값들중 내가 이전에 박수를 친 피드의 아이디를 하나의 배열에 담아놓음
            setClapArr([
              ...clapArr,
              ...res.data.data.map((item) => (item.clapByMe ? item.id : null)),
            ]);
          });
    setLoading(false);
    // 피드가 없을경우 페이지값 변경(0으로 유지될 경우 갱신이 안됨)
    if (FeedList.length === 0) {
      setPage(1);
    }
  };
  // 최하단에 도달 시 페이지 +1
  useEffect(() => {
    setPage(page + 1);
  }, [inView]);
  // 카테고리 변경시 페이지를 비움
  useEffect(() => {
    setFeedList([]);
    setClapArr([]);
    setClapCheck([]);
    setPage(0);
    setLast(0);
  }, [category]);
  useEffect(() => {
    TagClick();
  }, [page]);
  // 페이지 랜더링시에 랭크정보 가져오기
  useEffect(() => {
    dispatch(__GetLanks());
  }, [dispatch]);

  return (
    <>
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
          <CategoryDummyDiv />
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
                    <TagArea
                      onClick={() => {
                        setCategory(categoryList.indexOf(item.tag));
                        window.scrollTo(0, 0);
                      }}
                    >
                      {item.tag}
                    </TagArea>
                  </CardTopArea>
                  <LargePhoto src={item.missionImgUrl} />
                </FeedCard>
                <FeedContent>
                  <CardBottomArea>
                    <BottomProfileArea>
                      {" "}
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
                        animation={
                          clapArr.includes(item.id) &&
                          clapCheck.includes(item.id)
                            ? Shake
                            : null
                        }
                      >
                        {item.clapByMe ? (
                          <DoneClap />
                        ) : (
                          <ClapIcon color={"#84CA79"} />
                        )}
                      </ClapBox>
                    </ClapArea>
                  </CardBottomArea>
                  <ContentArea>
                    <ArrowArea>
                      {" "}
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
