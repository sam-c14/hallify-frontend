import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { post, parseError } from "../utils/axios";
import XMark from "../assets/icons/x-mark";
import HallIdInput from "../components/HallIdInput";

const sessionOptions = ["morning", "afternoon", "evening"];

export default function CreateSession() {
  const [hallId, setHallId] = useState("");
  const [sessionType, setSessionType] = useState([]);
  const [dates, setDates] = useState([""]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSessionChange = (value) => {
    setSessionType((prev) =>
      prev.includes(value)
        ? prev.filter((session) => session !== value)
        : [...prev, value]
    );
  };

  const handleDateChange = (index, value) => {
    const newDates = [...dates];
    newDates[index] = value;
    setDates(newDates);
  };

  const addDateField = () => setDates([...dates, ""]);

  const removeDateField = (index) => {
    if (dates.length > 1) {
      setDates(dates.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hallId || sessionType.length === 0 || dates.some((d) => !d)) {
      toast.error("Please fill all fields correctly.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        hall_id: Number(hallId),
        session_type: sessionType,
        dates,
      };
      const response = await post("bookings/add-sessions-list/", payload);
      toast.success("Session successfully added!");
      navigate("/admin/sessions");
      console.log(response);
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
        {/* Hall ID Input */}
        <HallIdInput value={hallId} onChange={setHallId} />

        {/* Session Type Selection */}
        <div>
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

        {/* Date Selection */}
        <div>
          <label className="block text-gray-600 text-sm mb-1">
            Select Dates
          </label>
          <div className="flex flex-col gap-y-4 mb-5">
            {dates.map((date, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => handleDateChange(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-[#7a5af8]"
                />
                {dates.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeDateField(index)}
                    className="text-red-400 hover:scale-105 transition-all"
                  >
                    <XMark />
                  </button>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addDateField}
            className="mt-2 text-[#7a5af8] hover:underline"
          >
            + Add Another Date
          </button>
        </div>

        {/* Submit Button */}
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
