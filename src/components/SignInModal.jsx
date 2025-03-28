import React, { useState } from "react";
import DividerWithText from "./DividerWithText";
import Google from "../assets/icons/google";
import PasswordInput from "./PasswordInput";

const SignInModalContent = ({ onClose, isSignUp = true }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleFormChange = (key, value) => {
    setForm((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    <div className="bg-white p-8 w-full">
      <h2 className="text-2xl font-bold mb-4">Sign {isSignUp ? "Up" : "In"}</h2>
      <div className="flex items-center p-2">
        <button
          className="shadow appearance-none border rounded-md w-full px-3 mx-2 py-2 grid place-items-center border-gray-200 hover:bg-purple-500 transition-colors"
          type="button"
        >
          <Google />
        </button>
      </div>
      <div>
        <DividerWithText text={"or"} />
      </div>

      <div className="mb-4">
        <label
          htmlFor="text"
          className="block font-inter text-gray-700 text-sm font-bold mb-2"
        >
          Username:
        </label>
        <input
          type="text"
          id="user_name"
          value={form.username}
          onChange={({ target }) => handleFormChange("username", target.value)}
          className="shadow appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      {isSignUp && (
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-inter text-gray-700 text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={({ target }) => handleFormChange("email", target.value)}
            className="shadow appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      )}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block font-inter text-gray-700 text-sm font-bold mb-2"
        >
          Password:
        </label>
        <PasswordInput
          value={form.password}
          onChange={({ target }) => handleFormChange("password", target.value)}
        />
      </div>
      <button
        type="button" // Use type="button" to prevent form submission
        className="inline-block align-baseline font-normal text-sm text-purple-500 hover:text-purple-800 focus:outline-none mb-4 underline" // Tailwind classes for text button style
        onClick={() => {
          alert("Forgot password clicked! (Functionality to be implemented)"); // Placeholder action
          // In a real app, you'd trigger password reset logic here
        }}
      >
        Forgot password?
      </button>
      <div className="flex items-center mb-2">
        <button
          className="bg-purple-500 font-inter hover:bg-purple-700 text-white font-semibold py-2.5 w-full rounded-md focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
      </div>
      <div className="flex gap-x-1 mt-4">
        <span className="font-inter">Don't have an account yet?</span>{" "}
        <div>
          <button
            type="button" // Use type="button" to prevent form submission
            className="inline-block font-inter align-baseline font-semibold text-sm text-purple-500 hover:text-purple-800 focus:outline-none mb-4 underline" // Tailwind classes for text button style
            onClick={() => {
              alert(
                "Forgot password clicked! (Functionality to be implemented)"
              ); // Placeholder action
              // In a real app, you'd trigger password reset logic here
            }}
          >
            Create Account.
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInModalContent;

//{/* <button className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800" onClick={onClose}> {/* ADDED: closeSignInModal on click */ }
// Cancel
// </button> */}
