import React from "react";
import MagnifyingGlass from "../assets/icons/magnifying-glass";
import Bell from "../assets/icons/bell";
import AngleDown from "../assets/icons/angle-down";
import Menu from "../assets/icons/menu";
import XMark from "../assets/icons/x-mark";
import Avatar from "./Avatar";
import { useAppSelector } from "../redux/store";

const AdminNavbar = ({ toggleSidebar, isOpen }) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="fixed top-0 left-0 lg:left-64 w-full lg:w-[calc(100%-250px)] h-20 shadow-md bg-white flex items-center justify-between px-5 z-50">
      <div className="flex items-center gap-x-3">
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? <XMark /> : <Menu />}
        </button>
        <div className="bg-[#F6F8FA] rounded-md px-3.5 flex items-center gap-x-3">
          <MagnifyingGlass />
          <input
            type="text"
            className="font-inter sm:tesxt-base text-sm focus:outline-none focus:ring-none py-2.5 w-11/12 border-0 bg-transparent"
            name="search"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <button>
          <Bell />
        </button>
        <button className="border border-gray-300 rounded-md px-2 py-1.5 shadow-sm flex items-center gap-x-2">
          <Avatar
            name={user.name}
            size="w-8 h-8"
            textSize="sm:text-sm text-xs"
          />
          <span className="font-inter capitalize sm:text-sm text-xs">
            John Doe
          </span>
          <AngleDown />
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
