import React from "react";
import Facebook from "../../assets/images/Facebook.png";
import Instagram from "../../assets/images/Instagram.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import './Icon.css';

const Icon = () => {
  return (
    <section>
        <div className="container-fluid">
         <div className="row icon_social mt-5 mb-5">
         <div className="col-md-3 mt-5">
       <h2 className="font-change mt-5">
       FOLLOW.LIKE.SHARE.
       </h2>
    
       </div>
         <div className="col-md-3 ">
         <img src={Instagram} alt="Instagram" className="responsive " />
        
         </div>         
         <div className="col-md-3">
        <img src={Facebook} alt="Facebook" className="responsive " />
      
       </div>
        <div className="col-md-3 ">
        <img src={LinkedIn} alt="LinkedIn" className="responsive " />
     
       </div>
        
         </div>
        </div>
    </section>
  );
};

export default Icon;
