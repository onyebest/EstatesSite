import React from "react";
import "./Getstarted.css";
import { Link } from "react-router-dom";

const Getstarted = () => {
  return (
    <div className='get__container'>
      <div className='container__content'>
        <h1>Get Started with samHomzy</h1>
        <h4>
          Subcribe and find super attractive price quotes from us <br /> Find your
          residence soon
        </h4>
        <Link className="cta">Get started</Link>
      </div>
    </div>
  );
};

export default Getstarted;
