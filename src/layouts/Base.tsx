import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Base = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen sm:py-20 py-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Base;
