import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../assets/icons/brand-logo";
import Crown from "../assets/icons/crown";
import Exit from "../assets/icons/exit";
import { useLocation } from "react-router-dom";
import SessionIcon from "../assets/icons/session";

const Sidebar = ({ isOpen }) => {
  const { pathname } = useLocation();

  const logoutUser = () => {
    localStorage.clear();
    const isAdminRoute = window.location.pathname.includes("admin");
    window.location.href = isAdminRoute ? "/admin/login" : "/";
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white z-20 text-white transition-transform duration-300 lg:w-60 w-64 p-5 border-r 
        lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <nav className="flex flex-col gap-6">
        <Link to="/admin/dashboard" className="inline-block mb-5 mt-3">
          <BrandLogo />
        </Link>
        <Link
          to="/admin/dashboard"
          className={`hover:bg-[#F6F8FA] hover:font-semibold transition-all p-3 rounded-md flex items-center gap-x-2 ${
            (pathname === "/admin/dashboard" ||
              pathname.includes("bookings")) &&
            "bg-[#F6F8FA] font-semibold"
          }`}
        >
          <Crown />
          <span className="sm:text-base text-black text-sm font-inter">
            Dashboard
          </span>
        </Link>
        <Link
          to="/admin/sessions"
          className={`hover:bg-[#F6F8FA] hover:font-semibold transition-all p-3 rounded-md flex items-center gap-x-2 ${
            pathname.includes("session") && "bg-[#F6F8FA] font-semibold"
          }`}
        >
          <SessionIcon />
          <span className="sm:text-base text-black text-sm font-inter">
            Session
          </span>
        </Link>
        <button
          onClick={logoutUser}
          className="hover:bg-[#F6F8FA] hover:font-semibold transition-all p-3 rounded-md p-3 text-left flex items-center gap-x-2"
        >
          <Exit />
          <span className="sm:text-base text-black text-sm font-inter">
            Log Out
          </span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
