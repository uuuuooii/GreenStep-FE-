//react import
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
//styled import
import Medal from './Medal';
import ClapIcon from '../../static/clap';
import FeedSkeleton from '../../Components/Skeleton/FeedSkeleton';
import RankingSkeleton from '../../Components/Skeleton/RankingSkeleton';
import {
  FeedPage,
  MedalBox,
  RankingBox,
  RankTitle,
  UserProfile,
  UserName,
  UserArea,
  InfoArea,
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
  FeedArrow,
  FeedText,
  TotalFeed,
  LargePhoto,
  ClapBox,
  ScrollDiv,
} from './FeedStyled';

const Feed = () => {
  const [categori, setCategori] = useState(0);
  const [page, setPage] = useState(0);
  const [loding, setLoding] = useState(false);
  const [FeedList, setFeedList] = useState([]);
  const [ref, inView] = useInView();
  // const categoriList = ["전체보기","#공병에 라벨떼기","#분리수거하기"]
  // categoriList[categori]
  const URL = process.env.REACT_APP_URL;

  const TagClick = () => {
    setLoding(true);
    categori == 0
      ? setFeedList([
          ...FeedList,
          axios.get(`${URL}/feed`).then((res) => res.data.data),
        ])
      : setFeedList([
          ...FeedList,
          axios
            .get(`${URL}/feed/categories/${categori}`)
            .then((res) => res.data.data),
        ]);
    setLoding(false);
  };
  useEffect(() => {
    setPage(page + 1);
  }, [inView]);

  useEffect(() => {
    setFeedList([]);
    setPage(1);
  }, [categori]);

  useEffect(() => {
    page == 0 ? console.log() : TagClick()
  }, [page]);

  console.log(page);
  const userList = [
    {
      userId: '우수진',
      profilePhoto:
        'https://cdn.pixabay.com/photo/2020/09/04/20/09/cartoon-5544856__340.jpg',
      nickname: '강이노',
    },
    {
      userId: '김은혜',
      profilePhoto:
        'https://cdn.allets.com/500/2018/11/06/500_364293_1541494746.jpeg',
      nickname: '강이노',
    },
    {
      userId: '강인호',
      profilePhoto:
        'https://cdn.pixabay.com/photo/2018/03/21/05/55/pig-3245668__340.png',
      nickname: '강이노',
    },
  ];
  const feedList = [
    {
      postId: '오늘의 라벨',
      imgUrl:
        'https://cdn.pixabay.com/photo/2022/04/07/14/31/bottle-7117637__340.jpg',
      profilePhoto:
        'https://cdn.pixabay.com/photo/2018/03/21/05/55/pig-3245668__340.png',
      content:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, proin a neque vel facilisi vel tempor etiam. Lorem vitae ut ac auctor.',
      clapCount: '5',
      categori: '#공병에 라벨떼기',
      nickname: '강인호',
    },
    {
      postId: '오늘의 라벨',
      imgUrl:
        'https://cdn.pixabay.com/photo/2022/04/07/14/31/bottle-7117637__340.jpg',
      profilePhoto:
        'https://cdn.pixabay.com/photo/2018/03/21/05/55/pig-3245668__340.png',
      content:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, proin a neque vel facilisi vel tempor etiam. Lorem vitae ut ac auctor.',
      clapCount: '5',
      categori: '#공병에 라벨떼기',
      nickname: '강인호',
    },
    {
      postId: '오늘의 라벨',
      imgUrl:
        'https://cdn.pixabay.com/photo/2022/04/07/14/31/bottle-7117637__340.jpg',
      profilePhoto:
        'https://cdn.pixabay.com/photo/2018/03/21/05/55/pig-3245668__340.png',
      content:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, proin a neque vel facilisi vel tempor etiam. Lorem vitae ut ac auctor.',
      clapCount: '5',
      categori: '#공병에 라벨떼기',
      nickname: '강인호',
    },
    {
      postId: '오늘의 라벨',
      imgUrl:
        'https://cdn.pixabay.com/photo/2022/04/07/14/31/bottle-7117637__340.jpg',
      profilePhoto:
        'https://cdn.pixabay.com/photo/2018/03/21/05/55/pig-3245668__340.png',
      content:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, proin a neque vel facilisi vel tempor etiam. Lorem vitae ut ac auctor.',
      clapCount: '5',
      categori: '#공병에 라벨떼기',
      nickname: '강인호',
    },
  ];

  return (
    <FeedPage>
      {loding ? (
        <RankingSkeleton />
      ) : (
        <RankingBox>
          <RankTitle>데일리 랭킹</RankTitle>

          <MedalBox>
            {userList.map((item, index) => (
              <InfoArea>
                <Medal num={index} />
                <UserArea>
                  <UserProfile src={item.profilePhoto} />
                  <UserName>{item.userId}</UserName>
                </UserArea>
              </InfoArea>
            ))}
          </MedalBox>
        </RankingBox>
      )}

      <FeedArea>
        {feedList.map((item) => (
          <TotalFeed>
            <FeedCard>
              <CardTopArea>
                <TagArea>{item.categori}</TagArea>

                <ClapArea>
                  <ClapPoint>{item.clapCount}</ClapPoint>
                  <ClapBox>
                    <ClapIcon color={'black'} />
                  </ClapBox>
                </ClapArea>
              </CardTopArea>
              <LargePhoto src={item.imgUrl} />

              <CardBottomArea>
                <FeedProfile src={item.profilePhoto} />
                <FeedNickname>{item.nickname}</FeedNickname>
              </CardBottomArea>
            </FeedCard>
            <FeedContent>
              <FeedArrow />
              <FeedText>{item.content}</FeedText>
            </FeedContent>
          </TotalFeed>
        ))}
        {loding ? (
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
