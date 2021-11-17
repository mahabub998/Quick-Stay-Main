import React from 'react';
import './Footer.css';
import Logo3 from "../../assets/images/Logo3.png"

const Footer = () => {
    return (
        <section className="background_color mt-5">
            <div className="row ">
             <div className="col-md-3 ">
             <img className="footer_Logo" src={Logo3} alt=""/>
             </div>
             <div className="col-md-2">
             <h5>Home</h5>
             <h5>About</h5>
             <h5>Blog</h5>
             <h5>About & Earn</h5>
             <h5>List your property</h5>
             </div>
             <div className="col-md-2">
            <h5>Contact Us</h5>
            <h5>Terms and Conditions</h5>
            <h5>Privacy Policy</h5>
            <h5>Refund policy</h5>
            <h5>FAQs</h5>
             </div>
             <div className="col-md-5">
            <h5>+91-8387868880</h5>
            <h5>info@quickStayrooms.com</h5>
            <br></br>
            <h3>STAY IN TOUCH!</h3>


             </div>
            </div>
            
            
         
        </section>
    );
};

export default Footer;