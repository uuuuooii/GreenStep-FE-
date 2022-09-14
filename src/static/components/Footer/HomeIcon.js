import React from 'react';
const HomeIcon = ({ color }) => {
  return (
    <svg
      width="27"
      height="18"
      viewBox="0 0 27 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 5.48682H0V7.98682H15V5.48682ZM15 0.486816H0V2.98682H15V0.486816ZM0 12.9868H10V10.4868H0V12.9868ZM24.375 7.36182L26.25 9.23682L17.5125 17.9868L11.875 12.3618L13.75 10.4868L17.5125 14.2368L24.375 7.36182Z"
        fill={color}
      />
    </svg>
  );
};

export default HomeIcon;
