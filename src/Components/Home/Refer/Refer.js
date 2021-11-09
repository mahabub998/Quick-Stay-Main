import React from 'react';
import ReferEarnE1 from '../../assets/images/ReferEarnE1.png'
import ReferEarn2 from '../../assets/images/ReferEarn2.png'

const Refer = () => {
    return (
        <section>
        <div className="container-fluid">
        <div className="row mt-5">
        <div className="col-md-4 ">
         <img src={ReferEarnE1} alt="" />
        </div>

        <div className="col-md-8">
         <img src={ReferEarn2} alt="" />
        </div>
       </div>
        </div>

            
        </section>
    );
};

export default Refer;