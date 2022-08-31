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
    <div className="header">
      <div>
        <div className="title">Green Step</div>
        {/* <button type="button" id="popup" onClick={onClickToastPopup}>
        toast
      </button>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_BOTTOM}
        store={ToastsStore}
        lightBackground
      /> */}
        <div className="icon1" />
        <div className="icon2" />
      </div>
    </div>
  );
};

export default Header;
