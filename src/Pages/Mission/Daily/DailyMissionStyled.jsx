import styled from 'styled-components';

export const DailyBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 145px;
  height: 170px;
  border-radius: 5px;
  background: #f9fdf9;
  margin: 10px;
  box-shadow: 1px 1px 0px rgba(134, 134, 134, 0.1);
  &:hover {
    cursor: pointer;
  }
`;

export const MissionPhoto = styled.img`
  width: 145px;
  height: 144px;
  background: rgba(255, 255, 255, 0.5);
`;
export const MissionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #b2e2ab;
  flex-wrap: wrap;
  color: #50674c;
`;

export const ChallengeBox = styled.div`
  display: flex;
  padding: 12px 10px 14px 16px;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(134, 134, 134, 0.3);
  border-radius: 7px;
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
  width: 100px;
  height: 133px;
  border-radius: 5px;
  background: #daf2d5;
  box-shadow: 1px 1px 0px rgba(134, 134, 134, 0.1);
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
export const ChallengePhoto = styled.img`
  width: 100px;
  height: 107px;
  background: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
`;
export const ChallengeTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #84ca79;
`;
export const ChallengeTimer = styled.div`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  padding: 10px 13px;
  margin-top:19px;
  width: 158px;
  height: 36px;
  color: white;
  background: #b8dde2;
  border-radius: 5px;
`;

export const ChallengeWaiting = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  text-align: center;
`;
export const FeedButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 17px;
  gap: 10px;
  text-align: center;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  position: absolute;
  width: 71px;
  height: 17px;
  background: #b8dde2;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  bottom: 27px;
`;
