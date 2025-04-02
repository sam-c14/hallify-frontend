import React, { useState } from "react";
import DividerWithText from "./DividerWithText";
import Google from "../assets/icons/google";
import PasswordInput from "./PasswordInput";
import { post, parseError } from "../utils/axios";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
import Spinner from "./Spinner";
import { login } from "../redux/slice/auth";
import { useAppDispatch } from "../redux/store";

const SignInModalContent = ({ onClose, isSignUp = true }) => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [authState, setAuthState] = useState(isSignUp ? "sign-up" : "sign-in");

  const handleFormChange = (key, value) => {
    setForm((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  // const validateFields = () => {
  //   const {email, password, username} = form
  //   if(authState === "sign-up")
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const baseUrl = authState === "sign-up" ? "/auth/signup/" : "/auth/login/";

    try {
      const response = await post(baseUrl, form);
      if (response.role === "event_manager")
        return toast.error(
          "You do not have an customer account, Please sign up as a customer"
        );
      toast.success(
        `Successfully ${authState === "sign-in" ? "logged in" : "registered"}`
      );
      if (authState === "sign-up") setAuthState("sign-in");
      else {
        window.location.assign("/manage-bookings");
        onClose();
        dispatch(
          login({
            user: { name: form.username, role: "customer" },
            token: response.access,
          })
        );
      }
      console.log(response);
    } catch (error) {
      const errMsg = parseError(error);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  const switchAuthState = () => {
    setAuthState(authState === "sign-up" ? "sign-in" : "sign-up");
    setForm({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="bg-white sm:py-8 py-2 sm:px-5 px-0 w-full sm:min-w-[450px]">
      <h2 className="text-2xl font-bold mb-4">
        Sign {authState === "sign-up" ? "Up" : "In"}
      </h2>
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

      <form onSubmit={handleSubmit}>
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
            required
            disabled={loading}
            onChange={({ target }) =>
              handleFormChange("username", target.value)
            }
            className="shadow appearance-none border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {authState === "sign-up" && (
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
              required
              disabled={loading}
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
            disabled={loading}
            required
            value={form.password}
            onChange={({ target }) =>
              handleFormChange("password", target.value)
            }
          />
        </div>
        <button
          className="bg-purple-500 grid place-items-center font-inter hover:bg-purple-700 text-white font-semibold py-2.5 w-full rounded-md focus:outline-none focus:shadow-outline"
          type="submit"
        >
          {loading ? (
            <Spinner size={25} />
          ) : authState === "sign-in" ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </button>
      </form>
      {/* <button
        type="button" // Use type="button" to prevent form submission
        className="inline-block align-baseline font-normal text-sm text-purple-500 hover:text-purple-800 focus:outline-none mb-4 underline" // Tailwind classes for text button style
        onClick={() => {
          alert("Forgot password clicked! (Functionality to be implemented)"); // Placeholder action
          // In a real app, you'd trigger password reset logic here
        }}
      >
        Forgot password?
      </button> */}
      <div className="flex gap-x-1 sm:flex-row flex-col gap-y-3 items-center mt-5 justify-center">
        <span className="font-inter sm:text-base text-sm text-[#868C98] mt-0.5">
          {authState === "sign-up"
            ? "Already have an account?"
            : "Don't have an account yet?"}
        </span>{" "}
        <button
          type="button" // Use type="button" to prevent form submission
          className="inline-block font-inter align-baseline font-semibold sm:text-sm text-xs text-purple-500 hover:scale-105 focus:outline-none underline" // Tailwind classes for text button style
          onClick={switchAuthState}
        >
          {authState === "sign-up" ? "Sign in" : "Create Account"}
        </button>
      </div>
    </div>
  );
};

export default SignInModalContent;

//{/* <button className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800" onClick={onClose}> {/* ADDED: closeSignInModal on click */ }
// Cancel
// </button> */}
