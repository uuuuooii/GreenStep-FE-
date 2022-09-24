//react impoty
import { useNavigate } from "react-router-dom";
//component import
import { IoIosArrowBack } from "react-icons/io";
import "./Secession.css";
import Secessionimg from "../../static/components/Secessionimg";
import instance from "../../Redux/modules/instance";

const Secession = () => {
  const navigate = useNavigate();
  return (
    <div className="secessionall">
      <div className="secession-back-arrow-area">
        <div onClick={() => navigate("/mypage")}>
          <IoIosArrowBack className="secession-back-arrow-icon" />

          <p className="secessiontext">탈퇴하기</p>
        </div>
      </div>
      <div className="secessionwrap">
        <div className="secessiontitle">
          그린스텝과 지구를 지키는 일을 중단하실 건가요?
        </div>
        <Secessionimg />
        <button
          className="secessionbutton"
          onClick={() => {
            instance.post("/kakao/unregister").then((res) => {
              if (res.data.data) {
                window.localStorage.clear();
                window.sessionStorage.clear();
              }
              navigate("/");
            });
          }}
        >
          네, 저 혼자 지구를 지키겠습니다
        </button>
      </div>
    </div>
  );
};

export default Secession;
