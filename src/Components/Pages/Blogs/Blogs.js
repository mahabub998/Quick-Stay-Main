import React from "react";
import './Blogs.css';

const Blogs = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-md-3 mt-5 ">
            <div className="d-flex">
              <span className="horizontal__color"></span>
              <div>
                <h2 className="mt-2">
                 Blogs 
                </h2>
                <p className="font_change mt-4">
                  If you enjoy reading here's a little somethings extra, we hope you like it!
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 shadow-lg p-3 mb-5 bg-white rounded">
            <img 
              src="https://i.ibb.co/PzhD0QL/Room-Service.jpg"
              alt="PG"
              className="responsive rounded_img2"
            />
            <h4>12 Reasons why you should travel more...</h4>
            <div className="row">
              <h6 className="col-md-6 mt-3">52 views</h6>
              <h6 className="col-md-6 mt-3 text-danger">read moor > </h6>
            </div>
          </div>
          <div className="col-md-3 shadow-lg p-3 mb-5 bg-white rounded">
            <img 
              src="https://i.ibb.co/PzhD0QL/Room-Service.jpg"
              alt="Apartment"
              className="responsive rounded_img2"
            />
            <h4>12 Reasons why you should travel more...</h4>
            <div className="row">
            <h6 className="col-md-6 mt-3">52 views</h6>
            <h6 className="col-md-6 mt-3 text-danger">read moor > </h6>
            </div>
          </div>
          <div className="col-md-3 shadow-lg p-3 mb-5 bg-white rounded">
            <img 
              src="https://i.ibb.co/PzhD0QL/Room-Service.jpg"
              alt="pic3"
              className="responsive rounded_img2"
            />
            <h4>12 Reasons why you should travel more...</h4>
            <div className="row">
            <h6 className="col-md-6 mt-3">52 views</h6>
            <h6 className="col-md-6 mt-3 text-danger">read moor > </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
