import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import "./NavBar.css";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Close the dropdown when scrolling occurs
      setIsDropdownOpen(false);
    };

    // Add a scroll event listener to the window
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='nav__container'>
      <div className='container__content'>
        <div className='nav'>
          <div className='logo'>
            <Link to={"/"}>samHomzy</Link>
            <div className='orange__circle'></div>
          </div>
          <ul className={`list__content ${isDropdownOpen ? "open" : ""}`}>
            <li>
              <Link to={"/residency"}>Residencies</Link>
            </li>
            <li>
              <Link to={"/ourvalue"}>Our Value</Link>
            </li>
            <li>
              <Link to={"/contactus"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/getstarted"}>Get Started</Link>
            </li>
            <li>
              <a href='/' className='contact'>
                Contact
              </a>
            </li>
          </ul>

          <div className='menu' onClick={toggleDropdown}>
            <BiMenuAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
