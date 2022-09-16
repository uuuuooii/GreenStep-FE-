import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import { BiBell } from "react-icons/bi";
import HeaderLogo from "../../static/components/HeaderLogo";

const Header = () => {
  const navigate = useNavigate();
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [hide, setHide] = useState(false);
  const [path, setPath] = useState("");
  const { pathname } = useLocation();
  const hideArr = [
    "/",
    "/users/kakao/callback",
    "/alert",
    "/modal",
    "/missioncamera",
    "/updatemypage",
    "/archive/certification",
    "/archive/post",
  ];
  const handleNavigation = useCallback(
    (e) => {
      if (y > window.scrollY) {
        setHide(false);
      } else if (window.scrollY > 0) {
        setHide(true);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
  useEffect(() => {
    setPath(pathname);
  }, [pathname]);

  return (
    <>
      {!path === "/" ? <div className="header-dummy-div" /> : null}
      {!hide && !hideArr.includes(path) ? (
        <>
          <div className="header-dummy-div"></div>
          <div className="wrap-header">
            <div className="header-relative">
              <div
                className="header-title"
                onClick={() => navigate("/mission")}
              >
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
      ) : null}
    </>
  );
};

export default Header;
