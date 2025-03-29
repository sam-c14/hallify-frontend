import axios from "axios";

// Base API URL (change as needed)
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

const logoutUser = () => {
  console.log("Session expired. Logging out...");
  localStorage.clear();
  const isAdminRoute = window.location.pathname.includes("admin");
  window.location.href = isAdminRoute ? "/admin/login" : "/";
};
// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Include cookies if needed
});

// **Interceptor for handling 403 errors**
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      logoutUser(); // Call logout function
    }
    return Promise.reject(error);
  }
);

// **Reusable API functions**
export const apiGet = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET Error:", error);
    throw error;
  }
};

export const apiPost = async (url, data) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST Error:", error);
    throw error;
  }
};

export const apiPut = async (url, data) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    console.error("PUT Error:", error);
    throw error;
  }
};

export const apiPatch = async (url, data) => {
  try {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  } catch (error) {
    console.error("PATCH Error:", error);
    throw error;
  }
};

// Export axios instance if needed for custom requests
export default axiosInstance;
