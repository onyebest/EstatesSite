import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer__container'>
      <div className='container__content'>
        <div className='content__1'>
          <div className='logo'>
            <Link to={"/"}>samHomzy</Link>
            <div className='orange__circle'></div>
          </div>
          <h4>
            Our vision is to make all poeple <br /> the best place to live for them
          </h4>
        </div>
        <div className='content__2'>
          <h1>Information</h1>
          <h3>145 New York. FL 4571, USA</h3>
          <ul className='list__content'>
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
              <Link to={""} className='contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
