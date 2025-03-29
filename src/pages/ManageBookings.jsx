import { useState } from "react";
import EmptyData from "../components/EmptyData";
import NoBookings from "../assets/images/no-bookings.png";
import BookingsCard from "../components/BookingsCard";
import { bookings } from "../data/booking";
import useFetch from "../utils/fetch";
import Spinner from "../components/Spinner";

const ManageBookings = () => {
  const { data, error, isLoading } = useFetch("/bookings/history/");
  // const [hasBooking, setHasBooking] = useState(false);

  if (isLoading)
    return (
      <div className="grid place-items-center min-h-screen">
        <Spinner />
      </div>
    );
  if (error)
    return (
      <p className="text-red-500 text-center font-inter font-semibold">
        Error: {error.message}
      </p>
    );

  return (
    <div className="relative">
      {!data?.length ? (
        <EmptyData
          baseRoute="Home"
          childRoute="Manage Bookings"
          img={NoBookings}
          label="No Bookings at the moment"
        />
      ) : (
        <div className="py-10 xl:px-32 sm:px-10 px-5">
          <p className="font-inter flex items-center gap-x-1 sm:text-sm text-xs font-light">
            <span className="text-black">Home</span>
            <span>/</span>
            <span className="text-gray-500">Manage Bookings</span>
          </p>
          <h4 className="font-semibold font-inter sm:text-2xl text-lg my-2">
            Manage Bookings
          </h4>
          <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 mt-2 gap-5">
            {bookings.map(
              (
                { date_range, guest_count, hall_name, status, sub_total, img },
                index
              ) => (
                <BookingsCard
                  key={index}
                  date_range={date_range}
                  guest_count={guest_count}
                  hall_name={hall_name}
                  img={img}
                  status={status}
                  sub_total={sub_total}
                />
              )
            )}
          </div>
        </div>
      )}
      <button
        onClick={() => setHasBooking(!hasBooking)}
        title="For UAT, will be removed upon api integration"
        className="absolute top-full right-5 font-inter bg-purple-600 rounded-full text-white hover:scale-105 py-2.5 px-5"
      >
        Toggle Bookings
      </button>
    </div>
  );
};

export default ManageBookings;
