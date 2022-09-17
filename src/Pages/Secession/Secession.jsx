import "./Secession.css";
import Secessionimg from "../../static/components/Secessionimg";

const Secession = () => {
  return (
    <>
      <div className="secession-settings-button-area"></div>
      <div className="secessiontitle">
        그린스텝과 지구를 지키는 일을 중단하실 건가요?
      </div>
      <Secessionimg />
      <button className="secessionbutton">
        네, 저 혼자 지구를 지키겠습니다
      </button>
    </>
  );
};

export default Secession;
