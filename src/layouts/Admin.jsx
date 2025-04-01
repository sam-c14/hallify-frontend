import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../redux/store";
import { useNavigate } from "react-router";
import ArrowUpIcon from "../assets/icons/arrow-up";

const Admin = () => {
  const { token, user } = useAppSelector((state) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (token && user.role !== "admin") navigate("/");
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      {token && <Sidebar isOpen={sidebarOpen} />}

      {/* Main Content Area */}
      <div
        className={`flex-1 min-h-screen w-full transition-all duration-300 ${
          sidebarOpen ? "lg:ml-60" : "lg:ml-0"
        }`}
      >
        {token ? (
          <AdminNavbar
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            isOpen={sidebarOpen}
          />
        ) : (
          <Navbar />
        )}

        {/* Page Content */}
        <div
          className={`sm:py-20 py-10 px-4 pl-4 w-full ${token && "lg:pl-64"}`}
        >
          <Outlet />
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-md hover:bg-blue-600 transition-all"
        >
          <ArrowUpIcon />
        </button>
      )}
    </div>
  );
};

export default Admin;
