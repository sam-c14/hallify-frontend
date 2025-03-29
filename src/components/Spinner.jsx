import React from "react";

const Spinner = ({ size = 40 }) => {
  return (
    <div
      className="animate-spin rounded-full border-[2.5px] border-t-transparent"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: "#FCAF45",
        borderRightColor: "#E1306C",
        borderBottomColor: "#C13584",
      }}
    />
  );
};

export default Spinner;
