import React from "react";
import "./Toast.css";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

const Toast = () => {
  const onClickToastPopup = () => {
    ToastsStore.success("토스트 굽는 중!");
  };

  return (
    <>
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
    </>
  );
};

export default Toast;
