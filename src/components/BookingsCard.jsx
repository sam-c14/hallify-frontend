import React from "react";
import Calendar from "../assets/icons/calendar";
import Guests from "../assets/icons/guests";

const BookingsCard = ({
  img,
  hall_name,
  status,
  date_range,
  guest_count,
  sub_total,
}) => {
  const getStatusColor = (status) => {
    if (status === "pending") return ["#FFDAC2", "#6E330C"];
    else if (status === "approved") return ["#CBF5E5", "#176448"];
    else return ["#F8C9D2", "#710E21"];
  };

  return (
    <div className="border border-gray-300 rounded-xl p-5">
      <div className="flex items-center gap-x-4">
        <img src={img} alt="booking-img" />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-4">
            <h6 className="sm:text-xl font-inter text-lg">{hall_name}</h6>
            <p
              style={{
                color: getStatusColor(status.toLowerCase())[1],
                background: getStatusColor(status.toLowerCase())[0],
              }}
              className="font-inter text-center rounded-full sm:text-sm text-xs py-1 px-2"
            >
              {status}
            </p>
          </div>
          <div className="flex sm:items-center items-start gap-y-3 sm:flex-row flex-col gap-x-3">
            <div className="flex items-center gap-x-2">
              <Calendar />
              <span className="font-inter text-gray-500 sm:text-sm text-xs">
                {date_range}
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <Guests />
              <span className="font-inter text-gray-500 sm:text-sm text-xs">
                {guest_count} Guests
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-3 sm:text-base text-sm font-inter">
            <p>Sub-total:</p>
            <h6 className="font-semibold">₦{sub_total}</h6>
          </div>
        </div>
      </div>
      <button className="inline-block mt-4 bg-[#FDEDF0] hover:scale-105 transition-all text-[#DF1C41] rounded-xl text-center sm:text-base text-sm py-2.5 w-full font-inter">
        Cancel Booking
      </button>
    </div>
  );
};

export default BookingsCard;
