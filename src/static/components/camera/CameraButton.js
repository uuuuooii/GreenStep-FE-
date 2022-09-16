import React from 'react';
const CameraButton = () => {
  return (
    <svg
      width="75"
      height="74"
      viewBox="0 0 75 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1510_4844)">
        <path
          d="M72.5 35C72.5 54.33 56.83 70 37.5 70C18.17 70 2.5 54.33 2.5 35C2.5 15.67 18.17 0 37.5 0C56.83 0 72.5 15.67 72.5 35Z"
          fill="#FCFCFA"
        />
        <path
          d="M54.1667 18.3333H47.5625L43.75 14.1667H31.25L27.4375 18.3333H20.8333C18.5417 18.3333 16.6667 20.2083 16.6667 22.5V47.5C16.6667 49.7917 18.5417 51.6667 20.8333 51.6667H54.1667C56.4583 51.6667 58.3333 49.7917 58.3333 47.5V22.5C58.3333 20.2083 56.4583 18.3333 54.1667 18.3333ZM54.1667 47.5H20.8333V22.5H29.2708L33.0833 18.3333H41.9167L45.7292 22.5H54.1667V47.5ZM37.5 24.5833C31.75 24.5833 27.0833 29.25 27.0833 35C27.0833 40.75 31.75 45.4167 37.5 45.4167C43.25 45.4167 47.9167 40.75 47.9167 35C47.9167 29.25 43.25 24.5833 37.5 24.5833ZM37.5 41.25C34.0625 41.25 31.25 38.4375 31.25 35C31.25 31.5625 34.0625 28.75 37.5 28.75C40.9375 28.75 43.75 31.5625 43.75 35C43.75 38.4375 40.9375 41.25 37.5 41.25Z"
          fill="#50674C"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1510_4844"
          x="0.5"
          y="0"
          width="74"
          height="74"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1510_4844"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1510_4844"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CameraButton;
