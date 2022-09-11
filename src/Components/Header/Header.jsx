import React from "react";
import "./Header.css";
import { BiBell } from "react-icons/bi";
import HeaderLogo from "../../static/components/HeaderLogo";

const Header = () => {
  return (
    <div className="wrap-header">
      <div className="header-relative">
        <div className="header-title">Green Step</div>
        <div className="header-icon-left">
          <HeaderLogo />
        </div>
        {/* <div className="header-icon-right">
          <BiBell />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
