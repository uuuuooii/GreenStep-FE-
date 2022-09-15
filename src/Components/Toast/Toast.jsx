import React from 'react';
import './Toast.css';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from 'react-toasts';

const Toast = () => {
  return (
    <>
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

export const ToastStyle = (
  <style jsx="true">{`
.toast {
  font-size: 13px !important; !important;
  color: #fff !important; !important;
  justify-content: center; !important;
  align-items: center; !important;
  background-color: rgba(178, 226, 171, 0.75) !important;
  box-shadow: 0px 2px 2px #dadada; !important;
  border-radius: 20px !important;
  min-height: 20px !important;
  max-width: 200px !important;
  margin: 4px auto !important;
  padding: 8px 35px; !important;
  display: inline-block !important;
  line-height: 22px !important;
}
`}</style>
);

