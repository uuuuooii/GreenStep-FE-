import React from "react";
import "./Header.css";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import PullToRefresh from "pulltorefreshjs";
import { BiBell } from "react-icons/bi";

const Header = () => {
  const PullToRefresh = require("pulltorefreshjs");

  const ptr = PullToRefresh.init({
    mainElement: "body",
    onRefresh() {
      window.location.reload();
    },
  });

  const onClickToastPopup = () => {
    ToastsStore.success("토스트 굽는 중!");
  };

  return (
    <div className="wrap-header">
      <div className="header-relative">
        <div className="header-title">Green Step</div>

        {/* 토스트 알람창의 CSS */}
        <style jsx="true">{`
          .toast {
            font-size: 16px !important;
            color: #fff !important;
            background-color: #87dac5d5 !important;
            border-radius: 20px !important;
            min-height: 30px !important;
            width: 100px !important;
            margin: 2px auto !important;
            display: inline-block !important;
            line-height: 30px !important;
          }
        `}</style>

        {/* <button
          type="button"
          id="popup"
          onClick={onClickToastPopup}
          className="toast-button"
        >
          toast
        </button> */}

        <ToastsContainer
          className="custom-alert-position"
          position={ToastsContainerPosition.BOTTOM_CENTER}
          store={ToastsStore}
          lightBackground
        />
        <div className="header-icon-left" />
        <div className="header-icon-right">
          <BiBell />
        </div>
      </div>
    </div>
  );
};

export default Header;
