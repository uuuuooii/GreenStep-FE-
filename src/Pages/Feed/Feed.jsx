//react import
import React, { useState } from 'react';
//styled import
import Medal from './Medal';
import ClapIcon from '../../static/clap';
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
} from './FeedStyled';

const Feed = () => {
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

      <FeedArea>
        {feedList.map((item) => (
          <TotalFeed>
            <FeedCard>
              <CardTopArea>
                <TagArea>{item.categori}</TagArea>

                <ClapArea>
                  <ClapPoint>{item.clapCount}</ClapPoint>
                  <ClapBox>
                    <ClapIcon color={"black"} />
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
      </FeedArea>
    </FeedPage>
  );
};

export default Feed;
