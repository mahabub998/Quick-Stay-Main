import React from "react";
import GenuinePropertyDetails from "../../assets/images/GenuinePropertyDetails.png";
import CustomerSupport from "../../assets/images/CustomerSupport.png";
import TimeSaving from "../../assets/images/TimeSaving.png";
import './OurServices.css';

const OurServices = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-5">
            <div className="d-flex">
              <span className="horizontalColor"></span>
              <div>
                <h2 className=" mt-5">
                  find your <br></br>favourite stays
                </h2>
                <p className="font_change">
                  A new city might fell too new to room around and look for a
                  decent rental stay.is'ni it? no need to worry.find the best in
                  few clicks
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <img
              src={GenuinePropertyDetails}
              alt="PG"
              className="responsive "
            />
            <h3>Paying Guest(pg)</h3>
          </div>
          <div className="col-md-3">
            <img
              src={CustomerSupport}
              alt="Apartment"
              className="responsive "
            />
            <h3>Flat/Apartment</h3>
          </div>
          <div className="col-md-3 ">
            <img src={TimeSaving} alt="pic3" className="responsive " />
            <h3>Independent Room</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
