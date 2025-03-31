import React from "react";
import RedFlag from "../assets/icons/red-flag";

const CancelBooking = ({ onClose, handleCancel, loading }) => {
  return (
    <div className="bg-white sm:min-w-[450px] w-full px-5 py-8">
      <div className="flex justify-center">
        <RedFlag />
      </div>
      <div className="text-center pt-5">
        <h2 className="font-inter sm:text-2xl text-xl font-semibold">
          Cancel Booking
        </h2>
        <div className="flex justify-center pt-5">
          <p className="font-inter sm:w-1/2 sm:text-base text-sm text-[#525866]">
            Are your sure you want to proceed with this action
          </p>
        </div>
        <div className="flex items-center sm:flex-row flex-col gap-4 mt-12">
          <button
            onClick={onClose}
            className="py-3 border rounded-lg shadow-md border-[#E2E4E9] sm:w-1/2 w-full bg-transparent hover:bg-[#DF1C41] text-[#525866] hover:text-white"
          >
            Close
          </button>
          <button
            onClick={handleCancel}
            className="py-3 border rounded-lg border-[#DF1C41] sm:w-1/2 w-full bg-[#DF1C41] hover:bg-transparent hover:text-[#525866] text-white"
          >
            {loading ? "Cancelling..." : "Cancel"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelBooking;
