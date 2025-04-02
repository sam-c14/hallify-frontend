import React from "react";
import RedFlag from "../assets/icons/red-flag";
import useFetch from "../utils/fetch";
import Spinner from "./Spinner";

const CancelBooking = ({
  onClose,
  handleCancel,
  loading,
  booking_date,
  hall_id,
  session_id,
}) => {
  const {
    data: sessions,
    error,
    isLoading,
  } = useFetch(`bookings/halls/${hall_id}/sessions/`);

  if (error)
    return (
      <p className="text-red-500 text-center font-inter font-semibold">
        Error: {error.message}
      </p>
    );

  const sessionDate = sessions?.find(
    (session) => session.id === session_id
  )?.date;

  const isMoreThanAWeekApart = (session_date, booking_date) => {
    const sessionDate = new Date(session_date);
    const bookingDate = new Date(booking_date);

    const differenceInDays =
      (sessionDate - bookingDate) / (1000 * 60 * 60 * 24);

    return differenceInDays > 7;
  };

  return (
    <div className="bg-white sm:min-w-[450px] w-full px-5 sm:py-8 py-2">
      <div className="flex justify-center">
        <RedFlag />
      </div>
      <div className="text-center pt-5">
        <h2 className="font-inter sm:text-2xl text-xl font-semibold">
          Cancel Booking
        </h2>
        <div className="flex items-center flex-col gap-y-2 pt-5">
          <p className="font-inter sm:text-base text-sm text-[#525866]">
            Are your sure you want to proceed with this action?
          </p>
          <p className="font-inter sm:text-base text-sm text-[#525866]">
            {isMoreThanAWeekApart(sessionDate, booking_date)
              ? "You are cancelling this booking more than a week to the session booked and as such will be refunded 50% of the total cash paid for the booking. "
              : "You will not be refunded for the booking because you are cancelling your booking less than a week to the booking date. "}
            <span className="ml-1 font-instrument-sans sm:text-base italic text-sm">
              If you have any enquires, Please contact support.
            </span>
          </p>
        </div>
        {!isLoading ? (
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
        ) : (
          <div className="flex justify-center pt-5">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};

export default CancelBooking;
