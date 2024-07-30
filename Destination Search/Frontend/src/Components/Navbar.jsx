import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.png'

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="h-20">
      <nav
        className={`w-full flex items-center justify-between h-20 px-5 lg:px-10 xl:px-20 ${
          sticky
            ? "fixed text-black bg-white shadow-xl transition-all duration-700 z-50 ease-in-out w-full"
            : "text-black"
        }`}
      >
        <div className="text-4xl font-bold cursor-pointer text-pink-500"><img className="h-20" src={logo}/></div>
        <div className="xl:h-full">
          <ul
            ref={navRef}
            className="xl:h-full xl:flex xl:flex-row py-20 md:py-0 xl:items-center xl:justify-center text-base font-semibold w-full"
          >
            <NavLink className="px-4">Home</NavLink>
            <NavLink className="px-4">About</NavLink>
            <NavLink className="px-4">Contact Us</NavLink>
            <button onClick={showNavbar} className="nav-btn nav-close-btn">
              <FaTimes />
            </button>
          </ul>
          
        <div>
          <button onClick={showNavbar} className={`nav-btn nav-btn-open`}>
            <FaBars />
          </button>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
