import { useNavigate } from "react-router-dom";
import "./Footer.css";
import { MdListAlt } from "react-icons/md";
import { BiHome } from "react-icons/bi";
import { MdPersonOutline } from "react-icons/md";

export function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <div className="footer-dummy-div"></div>

      <div className="footer-box">
        <div className="wrap-footer-icons">
          <div className="footer-icon-1" onClick={() => navigate("/Feed")}>
            <MdListAlt />
          </div>
          <div className="footer-icon-2" onClick={() => navigate("/Mission")}>
            <BiHome />
          </div>
          <div className="footer-icon-3" onClick={() => navigate("/MyPage")}>
            <MdPersonOutline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
