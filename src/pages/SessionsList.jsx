import { useNavigate } from "react-router";
import { useParams } from "react-router";
import useFetch from "../utils/fetch";
import Spinner from "../components/Spinner";
import { Link } from "react-router";

export default function SessionsList() {
  const params = useParams();
  const navigate = useNavigate();

  const {
    data: sessions,
    error,
    isLoading,
  } = useFetch(`bookings/halls/${params.hall_id}/sessions/`);

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
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-700 sm:mt-0 mt-10 mb-4">
        Session Schedule
      </h2>

      <div className="my-5 text-white border-[#7a5af8] py-2 px-5 max-w-44 rounded-md font-inter sm:text-sm text-xs hover:text-[#7a5af8] border hover:bg-transparent bg-[#7a5af8]">
        <Link to={`/admin/add-session/${params.hall_id}`}>
          Add a new session
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sessions.map((session) => (
          <div
            key={session.id}
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
        ))}
      </div>
    </div>
  );
}
