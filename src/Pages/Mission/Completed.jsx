import React from "react";
import { useNavigate } from "react-router-dom";
import "./Completed.css";

const Completed = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="CompleteWrap">
          <div className="CompleteMissionBox">
            <div className="CompleteMission">
              <div>
                <div className="CompleteMiniBox">
                  <p className="Completetext">인증 완료!</p>
                  <button onClick={() => navigate("/feed")}>
                    피드에 올리기
                  </button>
                </div>
                <p className="CompleteMissionName">Misson Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Completed;
