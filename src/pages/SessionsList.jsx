import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useState } from "react";
import useFetch from "../utils/fetch";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import { Link } from "react-router";
import NoData from "../assets/images/no-bookings.png";

export default function SessionsList() {
  const params = useParams();
  const navigate = useNavigate();

  const {
    data: sessions,
    error,
    isLoading,
  } = useFetch(`bookings/halls/${params.hall_id}/sessions/`);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [filter, setFilter] = useState("all");

  const filteredSessions = sessions?.filter((session) => {
    if (filter === "all") return true;
    return filter === "booked" ? session.is_booked : !session.is_booked;
  });

  const totalPages = Math.ceil(filteredSessions?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedSessions = filteredSessions?.slice(startIndex, endIndex) || [];

  if (error)
    return (
      <p className="text-red-500 text-center font-inter font-semibold">
        Error: {error.message}
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-700 sm:mt-0 mt-10 mb-4">
        Session Schedule
      </h2>

      <div className="my-5 text-white border-[#7a5af8] py-2 px-5 max-w-44 rounded-md font-inter sm:text-sm text-xs hover:text-[#7a5af8] border hover:bg-transparent bg-[#7a5af8]">
        <Link to={`/admin/add-session/${params.hall_id}`}>
          Add a new session
        </Link>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          className={`px-4 py-2 rounded-full sm:text-base text-xs border font-medium transition-all ${
            filter === "all"
              ? "bg-[#7a5af8] text-white"
              : "bg-transparent text-black border-black"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full sm:text-base text-xs border font-medium transition-all ${
            filter === "booked"
              ? "bg-[#DF1C41] text-white"
              : "bg-transparent text-[#DF1C41] border-[#DF1C41]"
          }`}
          onClick={() => setFilter("booked")}
        >
          Booked
        </button>
        <button
          className={`px-4 py-2 rounded-full sm:text-base text-xs border font-medium transition-all ${
            filter === "available"
              ? "bg-[#38C793] text-white"
              : "bg-transparent text-[#38C793] border-[#38C793]"
          }`}
          onClick={() => setFilter("available")}
        >
          Available
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center pt-40 min-h-screen">
          <Spinner />
        </div>
      ) : paginatedSessions.length ? (
        <>
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {paginatedSessions.map((session) => (
              <div key={session.id}>
                <div
                  className={`p-4 rounded-lg shadow-md transition-all border-l-4 ${
                    session.is_booked
                      ? "border-red-500 bg-red-50"
                      : "border-green-500 bg-green-50"
                  }`}
                >
                  <h3 className="text-lg font-medium">
                    Hall {session.hall} - {session.date}
                  </h3>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Session:</span>{" "}
                    {session.session_type.replace(/[\[\]']/g, "")}
                  </p>
                  <p
                    className={`mt-2 text-sm font-medium ${
                      session.is_booked ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {session.is_booked ? "Booked" : "Available"}
                  </p>
                </div>
              </div>
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
        </>
      ) : (
        <div className="flex justify-center w-full">
          <div className="pt-32 min-h-[50dvh]">
            <div className="flex flex-col gap-y-3">
              <div className="flex justify-center">
                <img src={NoData} alt="empty-page-img" className="w-64 h-64" />
              </div>
              <p className="font-inter text-center sm:text-base text-sm text-neutral-500">
                There currently are no added sessions for this hall. Click the
                add session button above to add a new session.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
