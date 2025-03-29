import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Base from "./layouts/Base";
import Home from "./pages/Home";
import HallInfo from "./pages/HallInfo";
import ManageBookings from "./pages/ManageBookings";
import ManageFavorites from "./pages/ManageFavorites";
import Admin from "./layouts/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminSignup from "./pages/AdminSignUp";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Sessions from "./pages/Sessions";
import CreateSession from "./pages/CreateSession";
import SessionsList from "./pages/SessionsList";
import AssignStatus from "./pages/AssignStatus";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />}></Route>
          <Route path="hall/:id" element={<HallInfo />}></Route>
          <Route path="manage-bookings" element={<ManageBookings />}></Route>
          <Route path="manage-favorites" element={<ManageFavorites />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="login" element={<AdminLogin />}></Route>
          <Route path="create" element={<AdminSignup />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="bookings/:hall_id" element={<Bookings />}></Route>
          <Route
            path="bookings/approve-reject/:hall_id"
            element={<AssignStatus />}
          ></Route>
          <Route path="sessions" element={<Sessions />}></Route>
          <Route
            path="sessions-list/:hall_id"
            element={<SessionsList />}
          ></Route>
          <Route
            path="add-session/:hall_id"
            element={<CreateSession />}
          ></Route>
        </Route>
        {/* Uncomment and define NotFound component if needed */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
