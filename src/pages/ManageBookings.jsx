import { useState } from "react";
import EmptyData from "../components/EmptyData";
import NoBookings from "../assets/images/no-bookings.png";
import BookingsCard from "../components/BookingsCard";
import { Link } from "react-router";
import useFetch from "../utils/fetch";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import { hallImgs } from "../data/venues";

const ManageBookings = () => {
  const {
    data: bookings,
    error,
    isLoading,
    mutate,
  } = useFetch("/bookings/history/");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const totalPages = Math.ceil(bookings?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBookings = bookings?.slice(startIndex, endIndex) || [];

  if (isLoading || error) {
    return (
      <div className="grid place-items-center min-h-screen">
        {isLoading ? (
          <Spinner />
        ) : (
          <p className="text-red-500">Error: {error.message}</p>
        )}
      </div>
    );
  }

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
            {paginatedBookings.map((booking, index) => (
              <BookingsCard
                key={index}
                date={booking?.date}
                id={booking?.id}
                session={booking?.session}
                hasPaid={booking?.paid}
                hall={booking?.hall}
                mutate={mutate}
                event_name={booking?.event_name}
                img={hallImgs[booking.hall - 1]}
                status={booking?.status}
                sub_total={booking?.transaction_ref}
              />
            ))}
          </div>

          {/* Pagination Component */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            setCurrentPage={setCurrentPage}
            setItemsPerPage={setItemsPerPage}
          />
        </div>
      )}
      <Link
        to={`/hall/${Math.floor(Math.random() * 3) + 1}`}
        className="absolute top-[95%] right-5 font-inter bg-purple-600 rounded-full text-white hover:scale-105 py-2.5 px-5"
      >
        Add a booking
      </Link>
    </div>
  );
};

export default ManageBookings;
