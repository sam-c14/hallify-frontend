import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import BrandLogo from "../assets/icons/brand-logo";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { post, parseError } from "../utils/axios";

const VerificationPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const booking_id = searchParams.get("booking_id");
    const trxref = searchParams.get("trxref");
    const reference = searchParams.get("reference");

    if (!booking_id || !trxref || !reference) {
      setError("Invalid request. Missing parameters.");
      setLoading(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        const payload = {
          booking_id: Number(booking_id),
          trxref,
          reference,
        };

        await post("payments/verify/", payload);

        toast.success("Payment verified successfully!");
        navigate("/manage-bookings");
      } catch (error) {
        const errMsg = parseError(error);
        toast.error(errMsg);
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [searchParams, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
        <div className="flex justify-center">
          <BrandLogo />
        </div>
        <h1 className="text-xl font-semibold my-4 text-gray-800">
          Verifying Payment...
        </h1>

        {loading ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <p className="text-green-600 font-inter font-semibold">
            Payment verified successfully! Redirecting...
          </p>
        )}
      </div>
    </div>
  );
};

export default VerificationPage;
