import { useState } from "react";
import DatePickerTool from "./DatePickerTool";
import Calendar from "../assets/icons/calendar";

const CustomDatePickers = ({ label, date, onDateChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleDateSelect = (selectedDate) => {
    onDateChange(selectedDate);
    setIsModalOpen(false);
  };

  const formatDate = (date) => {
    if (!date || isNaN(new Date(date).getTime())) return ""; // Ensure it's a valid date
    return new Date(date).toLocaleDateString("en-GB"); // Format: DD/MM/YYYY
  };

  return (
    <div className="flex flex-col">
      <label className="sm:text-base text-sm mb-1 font-inter">{label}</label>
      <div
        className="flex items-center gap-2 border border-[#E2E4E9] rounded-lg px-3 py-2 cursor-pointer"
        onClick={toggleModal}
      >
        <Calendar />
        <input
          type="text"
          placeholder="DD/MM/YYYY"
          value={formatDate(date)}
          readOnly
          className="bg-transparent outline-none"
        />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <DatePickerTool selectedDate={date} onChange={handleDateSelect} />
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-300 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDatePickers;
