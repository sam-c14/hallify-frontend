import React, { useState } from "react";
import Eye from "../assets/icons/eye";
import EyeSlash from "../assets/icons/eye-slash";

const PasswordInput = ({
  value,
  onChange,
  placeholder = "Enter password",
  disabled = false,
  required = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 transition">
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        className="w-full p-2 pr-10 bg-transparent outline-none focus:ring-0 focus:outline-none"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-3 flex items-center"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {!showPassword ? <Eye /> : <EyeSlash />}
      </button>
    </div>
  );
};

export default PasswordInput;
