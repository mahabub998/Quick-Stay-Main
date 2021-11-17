import React from 'react';
import './ListProperty.css';

const ListProperty = () => {
    return (
        <section className="background_color">
            <div className="container-fluid">
            <div className="row ">
             <div className="col-md-3 mt-5">
              <h4>Are you<br/> home owner?</h4>
              <button className="handel_Button">List your Property</button>
             </div>
             <div className="col-md-3 mt-5"><h4>Get Verified<br/> Tenant Leads </h4></div>
             <div className="col-md-3 mt-5"><h4>Get Timely <br/> Rents.</h4></div>
             <div className="col-md-3 mt-5"><h4>Get On-Demand <br/>House Maintenance</h4></div>
            </div>
            
            </div>
        </section>
    );
};

export default ListProperty;