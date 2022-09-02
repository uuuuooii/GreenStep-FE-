import React from "react";
import "./Header.css";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";
import PullToRefresh from "pulltorefreshjs";

const Header = () => {
  const PullToRefresh = require("pulltorefreshjs");

  const ptr = PullToRefresh.init({
    mainElement: "body",
    onRefresh() {
      window.location.reload();
    },
  });

  const onClickToastPopup = () => {
    ToastsStore.success("This is ToastPopup");
  };

  return (
    <div className="wrap-header">
      <div className="header-relative">
        <div className="header-title">Green Step</div>
        {/* <button type="button" id="popup" onClick={onClickToastPopup}>
        toast
      </button>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_BOTTOM}
        store={ToastsStore}
        lightBackground
      /> */}
        <div className="header-icon-left" />
        <div className="header-icon-right" />
      </div>
    </div>
  );
};

export default Header;
