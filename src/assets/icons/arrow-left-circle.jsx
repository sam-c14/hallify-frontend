import React from "react";

const ArrowLeftCircle = () => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1544_2216)">
        <path
          d="M2 17C2 8.16344 9.16344 1 18 1C26.8366 1 34 8.16344 34 17C34 25.8366 26.8366 33 18 33C9.16344 33 2 25.8366 2 17Z"
          fill="white"
          shapeRendering="crispEdges"
        />
        <path
          d="M2.5 17C2.5 8.43959 9.43959 1.5 18 1.5C26.5604 1.5 33.5 8.43959 33.5 17C33.5 25.5604 26.5604 32.5 18 32.5C9.43959 32.5 2.5 25.5604 2.5 17Z"
          stroke="#E2E4E9"
          shapeRendering="crispEdges"
        />
        <path
          d="M17.2045 16.9996L20.917 20.7121L19.8565 21.7726L15.0835 16.9996L19.8565 12.2266L20.917 13.2871L17.2045 16.9996Z"
          fill="#0A0D14"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1544_2216"
          x="0"
          y="0"
          width="36"
          height="36"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.321569 0 0 0 0 0.345098 0 0 0 0 0.4 0 0 0 0.06 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1544_2216"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1544_2216"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowLeftCircle;
