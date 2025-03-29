const Checkbox = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1544_685)">
        <rect x="2.5" y="0.5" width="13" height="13" rx="2.6" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_d_1544_685"
          x="0.5"
          y="0.5"
          width="17"
          height="17"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1544_685"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Checkbox;
