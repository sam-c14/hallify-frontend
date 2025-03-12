import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerTool = ({ firstDate, secondDate, onChange }) => {
  const [range, setRange] = useState([firstDate, secondDate]);

  const handleChange = (dates) => {
    const [start, end] = dates;

    // Automatically confirm the start date without requiring an end date
    setRange([start, end]);
    if (start && !end) {
      onChange([start, null]);
    } else if (start && end) {
      onChange([start, end]);
    }
  };

  return (
    <div className="w-full">
      <DatePicker
        selected={range[0]}
        onChange={handleChange}
        startDate={range[0]}
        endDate={range[1]}
        dateFormat="yyyy-MM-dd"
        selectsRange
        selectsDisabledDaysInRange
        inline
      />
    </div>
  );
};

export default DatePickerTool;
