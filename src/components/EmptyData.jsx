import React from "react";

const EmptyData = ({ baseRoute, childRoute, label, img }) => {
  return (
    <div className="xl:px-32 md:px-10 px-5 py-10">
      <p className="font-inter flex items-center gap-x-1 sm:text-sm text-xs font-light">
        <span className="text-black">{baseRoute}</span>
        <span>/</span>
        <span className="text-gray-500">{childRoute}</span>
      </p>
      <h4 className="font-semibold font-inter sm:text-2xl text-lg mt-2">
        {childRoute}
      </h4>
      <div className="pt-32 grid place-items-center min-h-[50dvh]">
        <div className="flex flex-col gap-y-3">
          <img src={img} alt="empty-page-img" />
          <p className="font-inter sm:text-base text-sm text-neutral-500">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyData;
