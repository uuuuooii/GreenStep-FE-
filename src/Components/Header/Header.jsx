import React from "react";
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
    <>
      <div>Header 입니다.</div>
      <button type="button" id="popup" onClick={onClickToastPopup}>
        toast
      </button>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_BOTTOM}
        store={ToastsStore}
        lightBackground
      />
    </>
  );
};

export default Header;
