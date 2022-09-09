import styled from 'styled-components';
import { BsArrowReturnRight } from 'react-icons/bs';

export const FeedPage = styled.div`
  max-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RankingBox = styled.div`
  width: 293px;
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 3px 3px rgba(134, 134, 134, 0.3);
  border-radius: 10px;
  margin: 20px 0;
`;
export const RankTitle = styled.div`
  text-align: center;
  color: #84ca79;
  width: 100%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin: 10px 0;
`;
export const MedalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
`;
export const UserCard = styled.div``;
export const UserProfile = styled.img`
  width: 70px;
  height: 70px;
  background: #d9d9d9;
  border-radius: 10px;
  object-fit: cover;
`;
export const UserArea = styled.div`
  width: 70px;
  position: relative;
`;
export const UserName = styled.div`
  text-align: center;
  font-size: 12px;
`;
export const InfoArea = styled.div`
  position: relative;
`;
export const MedalSetArea = styled.div`
  width: 25px;
  position: absolute;
  display: flex;
  /* align-items: flex-end; */
  left: 55px;
`;
export const MedalArea = styled.div`
  position: relative;
  width: 100%;
  z-index: 5;
`;
export const MedalHeadArea = styled.div`
  z-index: 2;
  display: flex;
`;

export const MedalHead = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  background-color: ${(props) => (props.color ? props.color : '#ffc72d')};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 12px;
`;

export const MedalCenter = styled.div`
  width: 9.75px;
  height: 9.75px;
  border-radius: 4.875px;
  background-color: ${(props) => (props.color ? props.color : '#FFE49C')};
  /* margin: auto; */
`;

export const MedalBottomArea = styled.div`
  display: flex;
  /* position: absolute;
  top: 16px; */
  z-index: 2;
  justify-content: center;
`;

export const MedalLeftBottom = styled.div`
  width: 11px;
  height: 20px;
  border-radius: 5px 0 11px 2px;
  background-color: #80d0e1;
`;
export const MedalRightBottom = styled.div`
  width: 11px;
  height: 20px;
  border-radius: 0 5px 2px 11px;
  background-color: #48aee2;
`;
export const CategoryBox = styled.div`
  max-width: 100%;
`;
export const CategoryArea = styled.div`
  /* max-width: 100%; */
  width: 90%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  margin: 10px 0;
  padding: 15px 0;
`;
export const CategoryButton = styled.div`
  min-width: 92px;
  min-height: 26px;
  border-radius: 3px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: #b8dde2;
  background-color: ${(props) =>
    props.check === props.num ? '#AFE5EC' : 'none'};
  align-items: center;
  padding: 4px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #b8dde2;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const CategoryButtonText = styled.div`
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
`;
export const FeedCard = styled.div`
  width: 100%;
  height: 312px;
  background: #d9d9d9;
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const FeedArea = styled.div`
  width: 313px;
`;
export const BottomProfileArea = styled.div`
  display: flex;
`;
export const CardBottomArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 7px 9px;
  gap: 9px;
  width: 295px;
  height: 45px;
  background: rgba(148, 148, 148, 0.8);
  box-shadow: 0px -2px 1px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  position: absolute;
  bottom: 0;
`;

export const CardTopArea = styled.div`
  width: 100%;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

export const TagArea = styled.div`
  margin: 0 10px;
`;

export const ClapArea = styled.div`
  display: flex;
  margin: 0 10px;
`;
export const ClapPoint = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;
export const FeedProfile = styled.img`
  border-radius: 10px;
  width: 44px;
  height: 44px;
  margin: 0 5px;
`;
export const FeedNickname = styled.div`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FeedContent = styled.div`
  display: flex;
  background-color: white;
`;
export const FeedArrow = styled(BsArrowReturnRight)`
  width: 15px;
  height: 17px;
  margin: 0 5px;
`;
export const FeedText = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
`;
export const PhotoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TotalFeed = styled.div`
  margin: 30px 0;
  box-shadow: 0px 3px 3px rgba(80, 103, 76, 0.2);
`;

export const LargePhoto = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const ClapBox = styled.div`
  color: black;
  &:hover {
    cursor: pointer;
  }
`;

export const ScrollDiv = styled.div`
  height: 20px;
`;
