import React from "react";
import PG from "../assets/images/PG.png";
import Apartment from "../assets/images/Apartment.png";
import IndependentRoom from "../assets/images/IndependentRoom.png";
import "./Service.css";

const Service = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-5">
            <div className="d-flex mt-5">
              <span className="horizontal_color"></span>
              <div>
                <h2 className=" text-capitalize">
                  find your <br></br>favourite stays
                </h2>
                <p className=" font_change">
                  A new city might fell too new to room around and look for a
                  decent rental stay.is'ni it? no need to worry.find the best in
                  few clicks
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <img src={PG} alt="PG" className="responsive Img_service" />
            <h4 className="Text_Size">Paying Guest(pg)</h4>
          </div>
          <div className="col-md-3">
            <img src={Apartment} alt="Apartment" className="responsive Img_service" />
            <h4 className="Text_Size">Flat/Apartment</h4>
          </div>
          <div className="col-md-3 ">
            <img src={IndependentRoom} alt="pic3" className="responsive Img_service" />
            <h4 className="Text_Size">Independent Room</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
