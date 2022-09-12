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
  background: #f9fdf9;
  margin: 10px;
  position: relative;
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
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  color: #50674c;
`;

export const WatingBody = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
