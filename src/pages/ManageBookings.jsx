// import { useState } from "react";
import EmptyData from "../components/EmptyData";
import NoBookings from "../assets/images/no-bookings.png";
import BookingsCard from "../components/BookingsCard";
import { Link } from "react-router";
import useFetch from "../utils/fetch";
import Spinner from "../components/Spinner";
import { hallImgs } from "../data/venues";

const ManageBookings = () => {
  const {
    data: bookings,
    error,
    isLoading,
    mutate,
  } = useFetch("/bookings/history/");
  // const [hasBooking, setHasBooking] = useState(false);

  // console.log(data);
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
      {!bookings?.length ? (
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
            {bookings.map((booking, index) => (
              <BookingsCard
                key={index}
                date={booking?.date}
                id={booking?.id}
                session={booking?.session}
                mutate={mutate}
                event_name={booking?.event_name}
                img={hallImgs[booking.hall - 1]}
                status={booking?.status}
                sub_total={booking?.transaction_ref}
              />
            ))}
          </div>
        </div>
      )}
      <Link
        to="/hall/2"
        className="absolute top-full right-5 font-inter bg-purple-600 rounded-full text-white hover:scale-105 py-2.5 px-5"
      >
        Add a booking
      </Link>
    </div>
  );
};

export default ManageBookings;
