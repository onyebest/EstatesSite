import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/Contactus";
import GetStarted from './Pages/GetStarted/GetStarted'
import OurValue from './Pages/OurValue/OurValue'
import Residency from './Pages/Residency/Residency'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path="/getstarted" element={<GetStarted/>} />
        <Route path="/ourvalue" element={<OurValue/>}/>
        <Route path="/residency" element={<Residency/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
