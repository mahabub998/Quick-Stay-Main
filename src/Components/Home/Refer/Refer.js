import React from 'react';
import ReferEarn3 from '../../assets/images/ReferEarn3.png'
import ReferEarn2 from '../../assets/images/ReferEarn2.png'

const Refer = () => {
    return (
        <section>
        <div className="container-fluid">
        <div className="row mt-5">
        <div className="col-md-4 ">
         <img src={ReferEarn3} alt="" />
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