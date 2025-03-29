import { useState, useEffect, useRef } from "react";
import Avatar from "./Avatar";
import Exit from "../assets/icons/exit";

const ProfileDropdown = ({ user, logoutUser }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        <Avatar name={user.name} size="w-8 h-8" textSize="sm:text-sm text-xs" />
      </button>

      {showDropdown && (
        <div className="absolute min-w-40 top-5 bg-white shadow-md rounded-lg">
          <button
            onClick={logoutUser}
            className="hover:bg-[#F6F8FA] hover:font-semibold transition-all p-3 rounded-md text-left flex items-center gap-x-2"
          >
            <Exit />
            <span className="sm:text-base text-black text-sm font-inter">
              Log Out
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
