import React from "react";
import Hero from "./HomeComponent/Hero/Hero";
import NavBar from "./HomeComponent/NavBar/NavBar";
import Company from "./HomeComponent/Company/Company";
import Residency2 from "./HomeComponent/Residency2/Residency2";
import OurValue from "./HomeComponent/OurValue2/OurValue";
import Contact2 from "./HomeComponent/contact2/Contact2";
import Getstarted from "./HomeComponent/Getstarted2/Getstarted";
import Footer from "./HomeComponent/Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Company />
      <Residency2 />
      <OurValue />
      <Contact2 />
      <Getstarted />
      <Footer />
    </div>
  );
};

export default Home;
