import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArrowUpIcon from "../assets/icons/arrow-up";
import { useAppSelector } from "../redux/store";

const Base = () => {
  const [showScroll, setShowScroll] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { token, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (token && user.role === "admin") navigate("/admin/dashboard");
  }, []);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200); // Show when scrolled past 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen sm:py-20 py-10">
        <Outlet />
      </div>
      <Footer />

      {showScroll && (
        <button
          className="fixed bottom-5 right-5 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-900 transition"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUpIcon />
        </button>
      )}
    </div>
  );
};

export default Base;
