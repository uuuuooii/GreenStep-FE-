import React from "react";
import { useNavigate } from "react-router-dom";
import { DailyBody,MissionPhoto,MissionText,CompletedBody,TextArea,FeedButton,DummyDiv } from "./CompletedStyled";

const Completed = ({item}) => {
  const navigate = useNavigate()
  return (<DailyBody>
    <CompletedBody><TextArea>인증 완료!</TextArea> <FeedButton onClick={()=>navigate(`/upload/${item.missionId}`)}>피드올리기</FeedButton></CompletedBody>
<MissionPhoto/>
<MissionText>{item.missionName}</MissionText>
  </DailyBody>
  );
};

export default Completed;

