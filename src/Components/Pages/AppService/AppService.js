import React from "react";
import PlaystoreCrop  from "../../assets/images/PlaystoreCrop.png";
import AppSSPhone from "../../assets/images/AppSSPhone.png";
import './AppService.css';
import AppServiceLocation from "./AppServiceLocation";

const AppService = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md-6 ">
          <h3 className="ms-5"> Book Long Stay Anytime,Anywhere</h3>
          <h1 className="ms-5">with QuickStay</h1>
          <h3 className="mt-5 mb-5 ms-5 "> Download the app </h3>
          <img className="play_store_img " src={PlaystoreCrop} alt="" />
        </div>
        <div className="col-md-6 ">
          <img className="phone_img" src={AppSSPhone} alt=""></img>
        </div>
      </div>
      <AppServiceLocation />
    </section>
  );
};

export default AppService;
