import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { BiBell } from "react-icons/bi";
import HeaderLogo from "../../static/components/HeaderLogo";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header-dummy-div"></div>

      <div className="wrap-header">
        <div className="header-relative">
          <div className="header-title" onClick={() => navigate("/Mission")}>
            Green Step
          </div>
          <div className="header-icon-left">
            <HeaderLogo />
          </div>
          {/* <div className="header-icon-right">
          <BiBell />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
