import React from "react";

const StepLogo = () => {
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_0_1)">
        <circle cx="20" cy="20" r="20" fill="#DAF2D5" />
      </g>
      <path
        d="M27.5645 20.4701C32.787 11.234 22.8316 3.0241 12.6313 7.05011C9.93839 13.5233 16.2218 22.8384 24.6268 22.1279M21.9339 13.6812C22.1905 14.0365 22.4352 14.3924 22.6683 14.7483M16.2218 31.1272C24.2387 39.2426 30.0882 28.7631 24.0556 17.1175M17.8538 15.26C19.5849 14.4569 20.6377 14.3394 22.6683 14.7483M22.6683 14.7483C23.1869 15.5397 23.6483 16.3313 24.0556 17.1175M20.7915 17.944C21.9301 17.1901 22.6863 17.1402 24.0556 17.1175"
        stroke="#84CA79"
        stroke-width="2"
      />
      <defs>
        <filter
          id="filter0_d_0_1"
          x="0"
          y="0"
          width="41"
          height="41"
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
          <feOffset dx="1" dy="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.525 0 0 0 0 0.525 0 0 0 0 0.525 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default StepLogo;
