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
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const MissionPhoto = styled.div`
  width: 145px;
  height: 144px;
  background: rgba(255, 255, 255, 0.5);
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
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

export const CompletedBody = styled.div`
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
`;
export const DummyDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const TextArea = styled.div``;
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
  background: #d9d9d9;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  bottom: 27px;
`;
