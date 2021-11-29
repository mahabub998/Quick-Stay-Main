import React from 'react';
import './ListProperty.css';

const ListProperty = () => {
    return (
        <section className="background_color_list">
            <div className="container">
            <div className="row ">
             <div className="col-md-3 mt-5 justify-content-start">
              <h4 className="text_color responsive_system">Are you a<br/> home owner?</h4>
              <button className="handel_Button">List your Property</button>
             </div>
             <div className="col-md-3 col-sm-3 mt-5 responsive_system justify-content-start"><h4 className="text-white ">Get Verified<br/> Tenant Leads </h4></div>
             <div className="col-md-3  col-sm-3 mt-5 responsive_system2 justify-content-start"><h4 className="text-white ">Get Timely <br/> Rents.</h4></div>
             <div className="col-md-3 col-sm-3 mt-5 responsive_system3 justify-content-start"><h4 className="text-white">Get On-Demand <br/>House Maintenance</h4></div>
            </div>
            
            </div>
        </section>
    );
};

export default ListProperty;