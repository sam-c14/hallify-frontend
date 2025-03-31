import React, { useState } from "react";
import { Link } from "react-router";
import BrandLogo from "../assets/icons/brand-logo";
import NigerianFlag from "../assets/icons/nigerian-flag";
import Favorites from "../assets/icons/favorites";
import Bookings from "../assets/icons/bookings";
import Menu from "../assets/icons/menu";
import XMark from "../assets/icons/x-mark";
import { useLocation } from "react-router";
import ModalWrapper from "../components/ModalWrapper";
import SignInModalContent from "./SignInModal";
import Avatar from "./Avatar";
import { useAppSelector } from "../redux/store";
import Exit from "../assets/icons/exit";
import ProfileDropdown from "./ProfileDropdown";
// import ModalWrapper from "./path/to/ModalWrapper"; // You will handle the import path
// import other icons and components (NigerianFlag, Favorites, Bookings, BrandLogo, Menu, XMark, Link) - assuming these are already correctly imported in your actual project.

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false); // NEW STATE: for Sign-in Modal visibility
  // const [showDropdown, setShowDropdown] = useState(false);
  const [authState, setAuthState] = useState("sign-up");
  const user = useAppSelector((state) => state.auth.user);

  // console.log(user);

  // Function to open the Sign-in Modal
  const openAuthModal = (authState) => {
    setIsSignInModalOpen(true);
    setAuthState(authState);
  };

  // Function to close the Sign-in Modal
  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  const { pathname } = useLocation();

  const logoutUser = () => {
    localStorage.clear();
    const isAdminRoute = window.location.pathname.includes("admin");
    window.location.href = isAdminRoute ? "/admin/login" : "/";
  };

  const navLinks = [
    { icon: <NigerianFlag />, text: "NGN" },
    { icon: <Favorites />, text: "Favorites", path: "/manage-favorites" },
    { icon: <Bookings />, text: "Bookings", path: "/manage-bookings" },
  ];

  return (
    <div className="w-full fixed sm:py-5 py-3 top-0 left-0 max-h-52 shadow-md xl:px-32 sm:px-10 px-3 bg-white flex items-center justify-between z-50">
      {/* Logo */}
      <Link to="/" className="sm:scale-100 scale-80">
        <BrandLogo />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-x-3">
        {navLinks.map(({ icon, text, path }) => (
          <Link
            to={path ?? "/"}
            key={text}
            className={`flex items-center gap-x-2 w-fit m-auto py-2 px-4 rounded-lg ${
              path !== "/" && path === pathname
                ? "bg-[#EBE9FE] text-[#6938EF]"
                : ""
            } ${!user && text === "Bookings" ? "hidden" : ""}`}
          >
            <span className="text-inherit">{icon}</span>
            <span className="font-inter text-sm">{text}</span>
          </Link>
        ))}
        <div className={`w-full ${!user && "min-w-64"}`}>
          {user ? (
            <ProfileDropdown logoutUser={logoutUser} user={user} />
          ) : (
            <div className="flex sm:flex-row flex-col gap-x-4">
              <button
                className="rounded-xl text-sm shadow-none px-3.5 py-2.5 border border-[#E2E4E9] font-inter shadow-md w-full hover:scale-105 transition-all"
                onClick={() => openAuthModal("sign-in")}
              >
                Sign In
              </button>
              <button
                onClick={() => openAuthModal("sign-up")}
                className="rounded-xl text-sm px-5 py-2.5 border border-purple-500 font-inter shadow-md bg-purple-500 text-white w-full hover:text-purple-500 hover:bg-transparent transition-all"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
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
          {navLinks.map(({ icon, text, path }) => (
            <Link
              to={path ?? "/"}
              onClick={() => setIsOpen(false)}
              key={text}
              className={`flex items-center gap-x-2 w-fit m-auto py-2 px-4 rounded-lg ${
                path !== "/" && path === pathname
                  ? "bg-[#EBE9FE] text-[#6938EF]"
                  : ""
              } ${!user && text === "Bookings" ? "hidden" : ""}`}
            >
              <span className="text-inherit">{icon}</span>
              <span className="font-inter text-sm">{text}</span>
            </Link>
          ))}
          <div className="w-full">
            {user ? (
              <div className="flex justify-center w-full">
                <Avatar
                  name={user.name}
                  size="w-8 h-8"
                  textSize="sm:text-sm text-xs"
                />
              </div>
            ) : (
              <div className="flex sm:flex-row flex-col gap-y-5">
                <button
                  className="rounded-xl text-sm shadow-none px-3.5 py-2.5 border border-[#E2E4E9] font-inter shadow-md w-full hover:scale-105 transition-all"
                  onClick={() => openAuthModal("sign-in")} // ADDED: openAuthModal on click
                >
                  Sign In
                </button>
                <button
                  onClick={() => openAuthModal("sign-up")}
                  className="rounded-xl text-sm px-5 py-2.5 border border-purple-500 font-inter shadow-md bg-purple-500 text-white w-full hover:text-purple-500 hover:bg-transparent transition-all"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>
          {user && (
            <div className="flex justify-center w-full">
              <button
                onClick={logoutUser}
                className="flex items-center gap-x-2 mt-5 hover:bg-[#F6F8FA] hover:font-semibold transition-all p-3 rounded-md text-left flex items-center gap-x-2"
              >
                <Exit />
                <span className="sm:text-base text-black text-sm font-inter">
                  Log Out
                </span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Sign-in Modal Wrapper */}
      <ModalWrapper isOpen={isSignInModalOpen} onClose={closeSignInModal}>
        <SignInModalContent
          onClose={closeSignInModal}
          isSignUp={authState === "sign-up"}
        />
      </ModalWrapper>
    </div>
  );
};

export default Navbar;
