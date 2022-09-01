import "./Footer.css";
import { GrHome } from "react-icons/gr";
import { MdPersonOutline } from "react-icons/md";
import { MdListAlt } from "react-icons/md";

export function Footer() {
  return (
    <>
      <div className="wrap-footer">
        {/* <hr /> */}
        <div className="footerBox">
          <div className="wrap-footer-Icons">
            <MdListAlt className="footerIcon1" />
            <GrHome className="footerIcon2" />
            <MdPersonOutline className="footerIcon3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
