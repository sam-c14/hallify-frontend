import React, { useState } from "react";
import PasswordInput from "../components/PasswordInput";
import { useAppDispatch } from "../redux/store";
import { login } from "../redux/slice/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { post, parseError } from "../utils/axios";

const AdminLogin = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await post("auth/login/", form);
      toast.success("Successfully logged in");
      navigate("/admin/dashboard");
      dispatch(
        login({
          user: { name: form.username, role: "admin" },
          token: response.access,
        })
      );
      console.log(response);
    } catch (error) {
      const errMsg = parseError(error);
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid place-items-center min-h-screen grid-place-items-center">
      <div className="sm:min-w-[520px] border border-gray-300 rounded-lg shadow-md px-8 py-8">
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
              Username:
            </label>
            <input
              type="text"
              id="text"
              value={form.email}
              disabled={loading}
              onChange={({ target }) =>
                handleFormChange("username", target.value)
              }
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
              disabled={loading}
              onChange={({ target }) =>
                handleFormChange("password", target.value)
              }
            />
          </div>
          <div className="flex items-center mb-2">
            <button
              disabled={loading}
              className="flex justify-center bg-purple-500 font-inter hover:bg-purple-700 text-white font-semibold py-2.5 w-full rounded-md focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {loading ? <Spinner size={25} /> : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
