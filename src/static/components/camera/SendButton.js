import React from 'react';
const SendButton = () => {
  return (
    <svg
      width="75"
      height="74"
      viewBox="0 0 75 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_940_2990)">
        <path
          d="M72.5 35C72.5 54.33 56.83 70 37.5 70C18.17 70 2.5 54.33 2.5 35C2.5 15.67 18.17 0 37.5 0C56.83 0 72.5 15.67 72.5 35Z"
          fill="#FCFCFA"
        />
        <path
          d="M22 50L58.5 35L22 20V31.5L45.8333 35L22 38.5V50Z"
          fill="#50674C"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_940_2990"
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
            result="effect1_dropShadow_940_2990"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_940_2990"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default SendButton;
