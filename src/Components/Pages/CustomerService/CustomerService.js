import React from "react";
import './CustomerService.css';

const CustomerService = () => {
  return (
    <section>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-3 mt-5">
            <div className="d-flex">
              <span className="horizontal__color"></span>
              <div>
                <h2>
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
          <div className="col-md-3 shadow-lg p-3 mb-5 bg-white rounded">
            <img
              src="https://i.ibb.co/PzhD0QL/Room-Service.jpg"
              alt="PG"
              className="responsive "
            />
            <h4>12 Reasons why you should travel more...</h4>
            <div className="row">
              <h6 className="col-md-6">52 views</h6>
              <h6 className="col-md-6">read moor > </h6>
            </div>
          </div>
          <div className="col-md-3 shadow-lg p-3 mb-5 bg-white rounded">
            <img
              src="https://i.ibb.co/PzhD0QL/Room-Service.jpg"
              alt="Apartment"
              className="responsive "
            />
            <h4>12 Reasons why you should travel more...</h4>
            <div className="row">
              <h6 className="col-md-6">52 views</h6>
              <h6 className="col-md-6">read moor > </h6>
            </div>
          </div>
          <div className="col-md-3 shadow-lg p-3 mb-5 bg-white rounded">
            <img
              src="https://i.ibb.co/PzhD0QL/Room-Service.jpg"
              alt="pic3"
              className="responsive "
            />
            <h4>12 Reasons why you should travel more...</h4>
            <div className="row">
              <h6 className="col-md-6">52 views</h6>
              <h6 className="col-md-6">read moor > </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
