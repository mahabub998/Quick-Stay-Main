import React, { useState, useEffect } from "react";
import "./CardSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FakeDataCard from "../../FakeData/FakeDataCard.json";

const CardSlider = () => {
  
  return (
    <section>
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
  
         <div className="col-md-3  justify-content-start card"></div>
         <div className="col-md-3 justify-content-start  card"></div>
         <div className="col-md-3 justify-content-start  card"></div>
        
        
        </div>
      </div>
    </section>
  );
};

export default CardSlider;
