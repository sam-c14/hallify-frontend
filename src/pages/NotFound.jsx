import { useNavigate } from "react-router-dom";
import BrandLogo from "../assets/icons/brand-logo";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => navigate("/");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#7a5af8] text-white px-6">
      <div className="w-full flex justify-center mb-5">
        <div className="bg-white px-7 py-4 rounded-md">
          <BrandLogo />
        </div>
      </div>
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
      <p className="text-lg mt-4 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved. Please
        check the URL or return to the homepage.
      </p>
      <button
        onClick={handleGoHome}
        className="mt-6 bg-white text-[#7a5af8] font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-opacity-90 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
