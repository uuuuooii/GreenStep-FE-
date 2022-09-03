import styled from "styled-components";

export const DailyBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 145px;
  height: 170px;
  border-radius: 5px;
  background: #d9d9d9;
  margin: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const MissionPhoto = styled.div`
  width: 145px;
  height: 144px;
  background: rgba(255, 255, 255, 0.5);
`;
export const MissionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px; ;
`;

export const ChallengeBox = styled.div`
  display: flex;
  padding: 14px;
  justify-content: space-between;
  background: #f3f3f3;
  border-radius: 10px;
  margin: 0 16px;
`;

export const ChallengeTextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 0;
  margin: 0 10px;
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
  &:hover {
    cursor: pointer;
  }
`;
export const ChallengePhoto = styled.img`
  width: 100px;
  height: 107px;
  background: rgba(255, 255, 255, 0.5);
`;
export const ChallengeTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
`;
export const ChallengeTimer = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
`;
