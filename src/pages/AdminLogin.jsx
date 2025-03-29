import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { useAppDispatch } from "../redux/store";
import { login } from "../redux/slice/auth";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ user: { name: "Hog" }, token: "some-token" }));
    navigate("/admin/dashboard");
  };

  return (
    <div className="grid place-items-center min-h-screen grid-place-items-center">
      <div className="min-w-[520px] border border-gray-300 rounded-lg shadow-md px-8 py-8">
        <div className="flex flex-col gap-y-2 mb-9 items-center">
          <h3 className="font-inter font-semibold md:text-3xl text-xl">
            Sign In
          </h3>
          <p className="font-inter md:text-base text-sm text-gray-400">
            Instant access to your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block font-inter text-gray-700 text-sm font-semibold mb-2"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              onChange={({ target }) => handleFormChange("email", target.value)}
              className="shadow appearance-none border border-gray-300 rounded-md w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-inter text-gray-700 text-sm font-semibold mb-2"
            >
              Password:
            </label>
            <PasswordInput
              value={form.password}
              onChange={({ target }) =>
                handleFormChange("password", target.value)
              }
            />
          </div>
          <div className="flex items-center mb-2">
            <button
              className="bg-purple-500 font-inter hover:bg-purple-700 text-white font-semibold py-2.5 w-full rounded-md focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
