import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { post, parseError } from "../utils/axios";
import { useParams } from "react-router-dom";
// import HallIdInput from "../components/HallIdInput";

const sessionOptions = ["morning", "afternoon"];

export default function CreateSession() {
  const [hallId, setHallId] = useState("");
  const [sessionType, setSessionType] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSessionChange = (value) => {
    setSessionType((prev) =>
      prev.includes(value)
        ? prev.filter((session) => session !== value)
        : [...prev, value]
    );
  };

  const generateDateRange = (start, end) => {
    const dates = [];
    let currentDate = new Date(start);
    const finalDate = new Date(end);
    while (currentDate <= finalDate) {
      dates.push(currentDate.toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      toast.error("Start date cannot be after end date.");
      return;
    }

    setLoading(true);
    try {
      const dates = generateDateRange(startDate, endDate);
      const payload = {
        hall_id: Number(params.hall_id),
        // session_type: sessionType.join(", "),
        dates,
      };
      await post("bookings/add-sessions-list/", payload);
      toast.success("Session successfully added!");
      navigate("/admin/sessions");
    } catch (error) {
      const errMsg = parseError(error);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Add Hall Sessions
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Hall ID: 1 = A, 2 = B, 3 = C
          </label>
          Hall{" "}
          {Number(params.hall_id) === 1
            ? "A"
            : Number(params.hall_id) === 2
            ? "B"
            : "C"}
        </div>
        {/* <HallIdInput value={hallId} onChange={setHallId} /> */}

        {/* Commented out for future purposes */}
        <div className="hidden">
          <label className="block text-gray-600 text-sm mb-1">
            Session Type
          </label>
          <div className="flex gap-2 flex-wrap mb-5">
            {sessionOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSessionChange(option)}
                className={`px-3 py-1 rounded-full text-sm ${
                  sessionType.includes(option)
                    ? "bg-[#7a5af8] text-white"
                    : "bg-gray-200 text-gray-700"
                } transition-all`}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-[#7a5af8]"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 text-sm mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-[#7a5af8]"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-[#7a5af8] text-white py-3 rounded-lg ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
          } transition-all`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Sessions"}
        </button>
      </form>
    </div>
  );
}
