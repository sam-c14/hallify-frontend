import React, { useState, useRef, useEffect } from "react";
import AngleDown from "../assets/icons/angle-down";

const SortDropdown = ({ value, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const options = ["Event Name", "Paid", "Date", "Status"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="border bg-white border-gray-300 rounded-lg px-2 py-2.5 shadow-sm flex items-center gap-x-2"
      >
        <span className="font-inter capitalize sm:text-sm text-xs">
          Sort By: {value ?? "All"}
        </span>
        <AngleDown />
      </button>

      {isOpen && (
        <div className="absolute sm:right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              className={`w-full font-instrument-sans text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                option === value && "font-semibold bg-gray-100"
              }`}
              onClick={() => {
                setValue(option);
                setIsOpen(false);
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
