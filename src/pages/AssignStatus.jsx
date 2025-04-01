import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { post, parseError } from "../utils/axios";
import { useParams } from "react-router-dom";

export default function AssignStatus() {
  const [action, setAction] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async () => {
    if (!action) {
      toast.error("Please select an action.");
      return;
    }

    setLoading(true);
    try {
      const payload = { action };
      const response = await post(
        `bookings/${params.hall_id}/approve-reject/`,
        payload
      );
      toast.success(`Successfully ${action}ed!`);
      navigate("/admin/dashboard");
      console.log(response);
    } catch (error) {
      const errMsg = parseError(error);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md sm:mt-10 mt-20">
      <h2 className="text-xl text-center font-semibold text-gray-700 mb-4">
        Approve or Reject
      </h2>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mb-5">
        <button
          className={`px-4 py-2 rounded-lg text-white font-instrument-sans transition-all ${
            action === "approve" ? "bg-green-600" : "bg-gray-300"
          }`}
          onClick={() => setAction("approve")}
          disabled={loading}
        >
          Approve
        </button>
        <button
          className={`px-4 py-2 rounded-lg text-white font-instrument-sans transition-all ${
            action === "reject" ? "bg-red-600" : "bg-gray-300"
          }`}
          onClick={() => setAction("reject")}
          disabled={loading}
        >
          Reject
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className={`w-full bg-blue-600 font-inter text-white py-3 rounded-lg ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        } transition-all`}
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit"}
      </button>
    </div>
  );
}
