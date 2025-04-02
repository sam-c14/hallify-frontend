import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Base from "./layouts/Base";
import Admin from "./layouts/Admin";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import HallInfo from "./pages/HallInfo";
import ManageBookings from "./pages/ManageBookings";
import VerificationPage from "./pages/Verification";
import ManageFavorites from "./pages/ManageFavorites";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignUp";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Sessions from "./pages/Sessions";
import CreateSession from "./pages/CreateSession";
import SessionsList from "./pages/SessionsList";
import AssignStatus from "./pages/AssignStatus";

const routes = [
  {
    path: "/",
    element: <Base />,
    children: [
      { index: true, element: <Home /> },
      { path: "hall/:id", element: <HallInfo /> },
      { path: "manage-bookings", element: <ManageBookings /> },
      { path: "verify-payment", element: <VerificationPage /> },
      { path: "manage-favorites", element: <ManageFavorites /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { path: "login", element: <AdminLogin /> },
      { path: "create", element: <AdminSignup /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "bookings/:hall_id", element: <Bookings /> },
      { path: "bookings/approve-reject/:hall_id", element: <AssignStatus /> },
      { path: "sessions", element: <Sessions /> },
      { path: "sessions-list/:hall_id", element: <SessionsList /> },
      { path: "add-session/:hall_id", element: <CreateSession /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

const App = () => {
  const element = useRoutes(routes);

  return (
    <>
      <ToastContainer style={{ zIndex: 9999 }} />
      {element}
    </>
  );
};

export default App;
