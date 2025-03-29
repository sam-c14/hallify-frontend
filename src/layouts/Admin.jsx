import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import AdminNavbar from "../components/AdminNavbar";
import Sidebar from "../components/Sidebar";
import { useAppSelector } from "../redux/store";

const Admin = () => {
  const { token, user } = useAppSelector((state) => state.auth);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  console.log(user);

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
    </div>
  );
};

export default Admin;
