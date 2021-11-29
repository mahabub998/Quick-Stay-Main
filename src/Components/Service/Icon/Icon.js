import React from "react";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import './Icon.css';

const Icon = () => {
  return (
    <section>
        <div className="container-fluid">
         <div className="row  mt-5 mb-5">
         <div className="col-md-4">
       <h2 className="font-change ">
       FOLLOW.LIKE.SHARE.
       </h2>
    
       </div>
         <div className="margin_to_write col-md-8">
         <img src={Instagram} alt="Instagram" className="responsive icon_img_handel" />
         <img src={Facebook} alt="Facebook" className="responsive icon_img_handel" />
         <img src={LinkedIn} alt="LinkedIn" className="responsive icon_img_handel" />
         </div>         
         
      
        
         </div>
        </div>
    </section>
  );
};

export default Icon;
