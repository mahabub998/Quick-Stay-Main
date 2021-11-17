import React, { useState, useEffect } from "react";
import RoomService from "../../assets/images/RoomService.jpg";
import "./RomeDetails.css";
import roomFakeData from "../../FakeData/roomFakeData.json";
import "./RomeDetails.css";
import Male from "../../assets/images/Male.png";
import Female from "../../assets/images/Female.png";
import Unisex from "../../assets/images/Unisex.png";

const RoomDetails = () => {
  const [roomConditions, setRoomConditions] = useState([]);

  useEffect(() => {
    setRoomConditions(roomFakeData);
  }, []);
  console.log(roomConditions);
  return (
    <section>
      <div className="container-fluid">
        <div className="row mt-5 ">
          <div className="col-md-3 mt-5">
            <div className="d-flex">
              <span className="horizontal-color"></span>

              <div>
                <h4>QuickStay Exclusive Properties</h4>
                <h5 className="font_change">
                  We won't show you photos that are too good to be true.find the
                  best room for rent near you.
                </h5>
              </div>
            </div>
          </div>
          <div className=" col-md-3 shadow-lg p-3 mb-5 bg-white rounded">
            <img
              src="https://i.ibb.co/PzhD0QL/Room-Service.jpg"
              alt="Room-Service"
            />
            <div className="d-flex">
              <div>
                <h4>Private Room</h4>
                <small>sec,22 Chandigarh</small>
                <p>Full Furnished</p>
              </div>
              <div className="ms-auto">
                <p className="">Price:500</p>
                <img className="img_category" src={Male} alt="" />
              </div>
            </div>
          </div>
          <div className=" col-md-3 shadow-lg p-3 mb-5 bg-white rounded">
            <img
              src="https://i.ibb.co/PzhD0QL/Room-Service.jpg"
              alt="Room-Service"
            />
            <div className="d-flex">
              <div>
                <h4>Private Room</h4>
                <small>sec,22 Chandigarh</small>
                <p>Full Furnished</p>
              </div>
              <div className="ms-auto">
                <p className="">Price:500</p>
                <img className="img_category" src={Female} alt="" />
              </div>
            </div>
          </div>
          <div className=" col-md-3 shadow-lg p-3 mb-5 bg-white rounded">
            <img
              src="https://i.ibb.co/PzhD0QL/Room-Service.jpg"
              alt="Room-Service"
            />
            <div className="d-flex">
              <div>
                <h4>PG</h4>
                <small>sec,46 Chandigarh</small>
                <p>Full Furnished</p>
              </div>
              <div className="ms-auto">
                <p className="">Price:500</p>
                <img className="img_category" src={Unisex} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
