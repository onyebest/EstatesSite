import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import HeroImg from "../../../../assets/hero-image.png";

const Hero = () => {
  return (
    <div className='hero__container'>
      <div className='container__content'>
        {/* content 1 starts here */}
        <div className='content__1'>
          {/* Banner Text */}
          <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 5, type: "spring" }}
            className='big__text'
          >
            Discover <br /> More Suitable <br /> Property
            <div className="orange__circle"></div>
          </motion.div>
          <h4>
            Find a Variety of Properties thath suit you very easlity Forget <br />  all
            difficulties in finding a residency for you
          </h4>
          {/* search Bar */}
          <div className='search'>
            <HiLocationMarker className="icon" color='blue' size={23} />
            <input type='text' />
            <button className='button'>search</button>
          </div>

          {/* CountUp starts here */}
          <div className='countup'>
            <div className='countup__content'>
              <div className='countup__1'>
                <CountUp className="count" start={8000} end={9000} duration={4} />
                <span>+</span>
              </div>
              <span className='secondaryText'>Premuim Porducts</span>
            </div>

            <div className='countup__content'>
              <div className='countup__1'>
                <CountUp className="count" start={1900} end={4000} duration={4} />
                <span>+</span>
              </div>
              <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className='countup__content'>
              <div className='countup__1'>
                <CountUp className="count" end={28} />
                <span>+</span>
              </div>
              <span className='secondaryText'>Award Winning</span>
            </div>
          </div>
        </div>
        {/* content 2 starts here */}
        <div className='content__2'>
            <motion.div
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 3, type: "spring" }}
              className='img__container'
            >
              <img src={HeroImg} alt='hero logo' className='image-container' />
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
