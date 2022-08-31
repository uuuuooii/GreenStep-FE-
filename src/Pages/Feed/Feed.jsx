import React, { useState } from 'react';
import Medal from './Medal';
import {
  MedalBox,
  RankingBox,
  RankTitle,
  UserProfile,
  UserName,
  UserArea,
  MedalArea,
  InfoArea,
  MedalHead,
  MedalCenter,
  MedalBottomArea,
  MedalLeftBottom,
  MedalRightBottom,
  MedalSetArea,
} from './FeedStyled';

const Feed = () => {
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };
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

  return (
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
  );
};

export default Feed;

{
  /* <button
className={`like-button ${isClicked && "liked"}`}
onClick={handleClick}
>
<span className="likes-counter">{`Like | ${likes}`}</span>
</button> */
}
