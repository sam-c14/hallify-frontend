import React, { useState } from "react";
import { Link } from "react-router";
import BrandLogo from "../assets/icons/brand-logo";
import NigerianFlag from "../assets/icons/nigerian-flag";
import Favorites from "../assets/icons/favorites";
import Bookings from "../assets/icons/bookings";
import Menu from "../assets/icons/menu";
import XMark from "../assets/icons/x-mark";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  XMark;

  const navLinks = [
    { icon: <NigerianFlag />, text: "NGN" },
    { icon: <Favorites />, text: "Favorites" },
    { icon: <Bookings />, text: "Bookings" },
  ];

  return (
    <div className="w-full fixed py-5 top-0 left-0 max-h-52 shadow-md xl:px-40 sm:px-10 px-3 bg-white flex items-center justify-between z-50">
      {/* Logo */}
      <Link to="/" className="sm:scale-100 scale-80">
        <BrandLogo />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-x-5">
        {navLinks.map(({ icon, text }) => (
          <button key={text} className="flex items-center gap-x-2">
            <span>{icon}</span>
            <span className="font-inter lg:text-base text-sm">{text}</span>
          </button>
        ))}
        <button className="rounded-xl lg:text-base text-sm shadow-none px-3.5 py-2.5 border border-[#E2E4E9] font-inter shadow-md hover:scale-105 transition-all">
          Sign In
        </button>
        <button className="rounded-xl lg:text-base text-sm px-5 py-2.5 border border-purple-500 font-inter shadow-md bg-purple-500 text-white hover:text-purple-500 hover:bg-transparent transition-all">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <XMark /> : <Menu />}
      </button>

      {/* Mobile Navigation (Dropdown) */}
      {isOpen && (
        <div className="absolute items-center top-full left-0 w-full bg-white flex flex-col items-start gap-y-4 p-5 shadow-md md:hidden">
          {navLinks.map(({ icon, text }) => (
            <button
              key={text}
              className="flex items-center gap-x-2 w-fit m-auto"
            >
              <span>{icon}</span>
              <span className="font-inter text-sm">{text}</span>
            </button>
          ))}
          <button className="rounded-xl text-sm shadow-none px-3.5 py-2.5 border border-[#E2E4E9] font-inter shadow-md w-full hover:scale-105 transition-all">
            Sign In
          </button>
          <button className="rounded-xl text-sm px-5 py-2.5 border border-purple-500 font-inter shadow-md bg-purple-500 text-white w-full hover:text-purple-500 hover:bg-transparent transition-all">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
