import styled from 'styled-components';

export const CardBody = styled.div`
  width: 313px;
  height: 312px;
  border-radius: 10px;
  background-color: #d9d9d9;
  display: flex;
  align-items: end;
  justify-content: end;
  flex-direction: column;
  margin: 40px 0;
`;
export const ProfileBody = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 0 0 10px 10px;
  background-color: rgba(148, 148, 148, 0.8);
  display: flex;
`;
export const ProfilePhoto = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 7px;
  background-color: #e9e9e9;
  margin: 10px;
`;

export const RankingBody = styled.div`
  width: 293px;
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  border-radius: 10px;
  margin: 20px 0;
`;

export const MedalBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
`;
export const UserProfile = styled.div`
  width: 70px;
  height: 70px;
  background: #d9d9d9;
  border-radius: 10px;
  object-fit: cover;
`;

export const RankTitle = styled.div`
  text-align: center;
  width: 50%;
  height: 30px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: #e9e9e9;
`;
export const TitleArea = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const ChallengeBox = styled.div`
  display: flex;
  padding: 14px;
  justify-content: end;
  background: #f3f3f3;
  border-radius: 10px;
  margin: 0 16px;
`;

export const ChallengeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 100px;
  height: 133px;
  border-radius: 5px;
  background: #d9d9d9;
  margin: 10px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
export const ChallengePhoto = styled.div`
  width: 100px;
  height: 107px;
  background: rgba(255, 255, 255, 0.5);
`;

export const DailyBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 145px;
  height: 170px;
  border-radius: 5px;
  background-color: #d9d9d9;
  margin: 10px;
`;
export const MissionPhoto = styled.div`
  width: 145px;
  height: 144px;
  background-color: rgba(255, 255, 255, 0.5);
`;
export const MissionText = styled.div`
  width: 80%;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: gray;
`;
export const MypageSkeleton = styled.div`
  min-width: 145px;
  height: 145px;
  background-color:gray;
  margin-right: 5px;
`