import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Base from "./layouts/Base";
import Home from "./pages/Home";
import HallInfo from "./pages/HallInfo";
import ManageBookings from "./pages/ManageBookings";
import ManageFavorites from "./pages/ManageFavorites";
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
        {/* Uncomment and define NotFound component if needed */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
