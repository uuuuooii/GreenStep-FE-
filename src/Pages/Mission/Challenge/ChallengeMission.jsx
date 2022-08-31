import { useEffect, useState } from "react";
import "./ChallengeMission.css";

function Mission() {
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());

  useEffect(() => {
    const id = setInterval(() => {
      setHour(23 - new Date().getHours());
      setMinute(59 - new Date().getMinutes());
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <div>
        <div>
          <div className="challengeBox">
            <div className="challengeMission">
              <p className="missionName">Misson Name</p>
              <div className="miniBox" />
            </div>
            <div className="challengTitle">오늘의 챌린지 미션</div>
            <div className="challengTime">
              <div className="missionTextBox">
                미션 완료 까지&nbsp;
                {hour < 10 ? "0" + hour : hour}:
                {minute < 10 ? "0" + minute : minute}:
                {second < 10 ? "0" + second : second}
              </div>
            </div>
          </div>
        </div>
        <div className="dailyMissionWrap">{/* <div> 데일리 미션</div> */}</div>
      </div>
    </>
  );
}

export default Mission;
