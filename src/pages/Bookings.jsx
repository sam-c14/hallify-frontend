import React from "react";
import { useParams } from "react-router";
import { halls } from "../data/booking";
import useFetch from "../utils/fetch";
import Table from "../components/Table";
import Spinner from "../components/Spinner";
import NoData from "../assets/images/no-bookings.png";

const Bookings = () => {
  const params = useParams();
  const hallId = Number(params.hall_id);
  const selectedHall = halls.find((hall) => hall.id === hallId);

  const headers = ["Event Name", "Paid", "Date", "Status"];

  const { data, error, isLoading } = useFetch(
    `bookings/halls/${hallId}/bookings/`
  );

  if (error)
    return (
      <p className="text-red-500 text-center font-inter font-semibold">
        Error: {error.message}
      </p>
    );

  return (
    <div className="pl-5">
      <h5 className="font-inter sm:text-sm text-xs text-[#868C98] mt-4">
        <span className="font-inherit text-black">Bookings / </span>
        <span>{selectedHall.name}</span>
      </h5>
      <h2 className="font-semibold font-inter my-4 sm:text-2xl text-lg">
        {selectedHall.name}
      </h2>
      {/* Table */}
      {isLoading ? (
        <div className="grid place-items-center min-h-screen">
          <Spinner />
        </div>
      ) : data?.length === 0 ? (
        <div className="pt-32 grid place-items-center min-h-[50dvh]">
          <div className="flex flex-col gap-y-3">
            <div className="flex justify-center">
              <img src={NoData} alt="empty-page-img" />
            </div>
            <p className="font-inter sm:text-base text-sm text-neutral-500">
              There currently are no added bookings for this hall, Click the add
              bookings button above to add a new session
            </p>
          </div>
        </div>
      ) : (
        <Table headers={headers} data={data} route={null} checkStatus />
      )}
    </div>
  );
};

export default Bookings;
