import { useState } from "react";

export default function HallIdInput({ value, onChange }) {
  const [error, setError] = useState("");

  const validateValue = (newValue) => {
    const numValue = Number(newValue);
    if (!newValue || numValue < 1 || numValue > 3) {
      setError("Only halls 1, 2, and 3 are available.");
      return false;
    }
    setError("");
    return true;
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (validateValue(newValue)) {
      onChange(newValue);
    }
  };

  const handleStepChange = (step) => {
    const newValue = String(Number(value) + step);
    if (validateValue(newValue)) {
      onChange(newValue);
    }
  };

  return (
    <div>
      <label className="block text-gray-600 text-sm mb-1">Hall ID</label>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => handleStepChange(-1)}
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          disabled={Number(value) <= 1}
        >
          -
        </button>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min="1"
          max="3"
          className={`w-10/12 text-center px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-purple-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        <button
          type="button"
          onClick={() => handleStepChange(1)}
          className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          disabled={Number(value) >= 3}
        >
          +
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
