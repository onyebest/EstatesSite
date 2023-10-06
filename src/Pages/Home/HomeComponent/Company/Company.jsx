import React from "react";
import "./Company.css";
import Equinix from "../../../../assets/equinix.png";
import Prologis from "../../../../assets/prologis.png";
import Reality from "../../../../assets/realty.png";
import Tower from "../../../../assets/tower.png";

const company = () => {
  return (
    <div className='company__container'>
      <div className='container__content'>
        <img src={Equinix} alt='' />
        <img src={Prologis} alt='' />
        <img src={Reality} alt='' />
        <img src={Tower} alt='' />
      </div>
    </div>
  );
};

export default company;
