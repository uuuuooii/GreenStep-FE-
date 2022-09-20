//react impoty
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//modules import
import { getUserInfoThunk } from "../../Redux/modules/userInfoSlice";
//component import
import { IoIosArrowBack } from "react-icons/io";
import "./Alarm.css";
import ToggleSwitch from "../../Components/ToggleSwitch/ToggleSwitch";

const Alarm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => {
    return state.userInfo.userInfo;
  });
  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, []);

  return (
    <div className="alarmall">
      <div className="alarm-back-arrow-area">
        <div onClick={() => navigate("/mission")}>
          <IoIosArrowBack className="alarm-back-arrow-icon" />
          <p className="alarmtext">알림 설정</p>
        </div>
      </div>
      <div className="alarmallwrap">
        <div>
          <p className="alarmtitle">알림 수신 정보</p>
          <p className="alarmtitle1">연동된 이메일</p>
          <div className="alarmwrap">
            <div>
              <p className="alarelement1">{userInfo.email}</p>
              <a href="#" className="alaema">
                변경
              </a>
              <p className="alarelement">
                이메일 알림 수신 동의
                <label class="switch1">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </p>
            </div>
            <div>
              <p className="alarmtitle2">카카오톡</p>
              <p className="alarelement">
                카카오톡 알림 수신 동의
                <label class="switch2">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </p>
            </div>
            <div>
              <p className="alarmtitle2">앱 푸시 알림</p>
              <p className="alarelement">앱 푸시 알림 수신 동의</p>
              <p className="alarmtitle3">
                앱 푸시 알림 설정은 기기 설정에서 변경할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="alarmmaintitle">기능 알림</p>
          <div className="alarmwrap">
            <p className="alarmtitle1">
              미션 알림
              <label class="switch3">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </p>

            <p className="alarmtitle3">
              챌린지 미션 알림과 인증 완료 여부 알림을 받을 수 있습니다.{" "}
            </p>
            <div className="alarmbox">
              <p className="alarmboxtext">
                카카오톡
                <label class="switch4">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </p>

              <p className="alarmboxtext">
                앱 푸시
                <label class="switch5">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </p>
            </div>

            <div>
              <p className="alarmtitle2">
                피드 알림
                <label class="switch6">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </p>

              <p className="alarmtitle3">
                피드 박수 알림, 랭킹 관련 알림을 받을 수 있습니다.
              </p>
              <div className="alarmbox">
                <p className="alarmboxtext">
                  카카오톡
                  <label class="switch4">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </p>

                <p className="alarmboxtext">
                  앱 푸시
                  <label class="switch5">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alarm;
