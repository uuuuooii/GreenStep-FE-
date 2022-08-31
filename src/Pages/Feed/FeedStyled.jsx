import styled from 'styled-components';

export const RankingBox = styled.div`
  width: 313px;
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  border-radius: 10px;
`;
export const RankTitle = styled.div`
  text-align: center;
  width: 100%;
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
export const UserCard = styled.div`
  /* width: ; */
`;
export const UserProfile = styled.img`
  width: 70px;
  height: 70px;
  background: #d9d9d9;
  border-radius: 10px;
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
