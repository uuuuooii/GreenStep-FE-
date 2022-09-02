import "./Footer.css";
import { MdListAlt } from "react-icons/md";
import { GrHome } from "react-icons/gr";
import { MdPersonOutline } from "react-icons/md";

export function Footer() {
  return (
    <>
      <div className="footer-box">
        <div className="wrap-footer-icons">
          <div className="footer-icon-1">
            <MdListAlt />
          </div>
          <div className="footer-icon-2">
            <GrHome />
          </div>
          <div className="footer-icon-3">
            <MdPersonOutline />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
