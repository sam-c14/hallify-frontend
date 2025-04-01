import React, { useState } from "react";
import { useParams } from "react-router";
import { halls } from "../data/booking";
import useFetch from "../utils/fetch";
import Table from "../components/Table";
import Spinner from "../components/Spinner";
import NoData from "../assets/images/no-bookings.png";
import MagnifyingGlass from "../assets/icons/magnifying-glass";
import { debounce } from "../utils/axios";
import SortDropdown from "../components/SortDropdown";

const Bookings = () => {
  const params = useParams();
  const hallId = Number(params.hall_id);
  const selectedHall = halls.find((hall) => hall.id === hallId);
  const [filterParam, setFilterParam] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const headers = ["Event Name", "Paid", "Date", "Status"];

  const toSnakeCase = (str) => str.toLowerCase().replace(/\s+/g, "_");

  const { data, error, isLoading } = useFetch(
    `bookings/halls/${hallId}/bookings/`
  );

  if (error)
    return (
      <p className="text-red-500 text-center font-inter font-semibold">
        Error: {error.message}
      </p>
    );

  const filterTable = debounce((value) => {
    const val = ["Status", "Paid"].includes(filterParam)
      ? value.toLowerCase()
      : value;
    const items = data?.filter((item) => {
      return item[toSnakeCase(filterParam)] === val;
    });
    setFilteredItems(items);
  }, 2000);

  return (
    <div className="pl-5 sm:pt-0 pt-12">
      <h5 className="font-inter sm:text-sm text-xs text-[#868C98] mt-4">
        <span className="font-inherit text-black">Bookings / </span>
        <span>{selectedHall.name}</span>
      </h5>
      <h2 className="font-semibold font-inter my-4 sm:text-2xl text-lg">
        {selectedHall.name}
      </h2>
      {/* Table */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-x-3">
          <div className="bg-white border border-[#F6F8FA] rounded-md px-3.5 sm:flex hidden items-center gap-x-3">
            <MagnifyingGlass />
            <input
              type="text"
              onChange={({ target }) => filterTable(target.value)}
              className="font-inter sm:text-base text-sm focus:outline-none focus:ring-none py-2.5 w-11/12 border-0 bg-white"
              name="search"
              placeholder="Search..."
            />
          </div>
          {!!filteredItems.length && (
            <button
              onClick={() => setFilteredItems([])}
              className="bg-[#DF1C41] hover:bg-transparent hover:text-[#DF1C41] border border-[#DF1C41] rounded-lg font-semibold shadow-md text-white font-inter sm:text-base text-sm py-2.5 w-32"
            >
              Clear
            </button>
          )}
        </div>
        <SortDropdown
          value={filterParam}
          setValue={(option) => setFilterParam(option)}
        />
      </div>
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
        <Table
          headers={headers}
          data={filteredItems.length ? filteredItems : data}
          route={null}
          checkStatus
        />
      )}
    </div>
  );
};

export default Bookings;
