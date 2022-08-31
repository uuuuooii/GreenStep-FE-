import React from "react";
import "./Waiting.css";

const Waiting = () => {
  return (
    <>
      <div>
        {/* <div className="WaitingWrap"> */}
        <div className="WaitingMissionBox">
          <div className="WaitingMission">
            <div>
              <div className="WaitingMiniBox">
                <p className="Waitingtext">인증 대기중</p>
              </div>
              <p className="WaitingMissionName">Misson Name</p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Waiting;
