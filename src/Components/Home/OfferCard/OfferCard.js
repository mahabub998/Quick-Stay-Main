import React from 'react';
import pic2 from '../../assets/images/pic2.png';
import pic4 from '../../assets/images/pic4.png';
import pic3 from '../../assets/images/pic3.png';
import './OfferCard.css';

const OfferCard = () => {
    return (
        <section>
            <div className="container-fluid margin_card">
             <div className="row img_border">
             <div className="col-md-4  justify-content-around mb-5 ">
             <img src={pic2} alt="pic2" className="responsive img_offer" />
             </div>
             <div className="col-md-4  ">
            <img src={pic4} alt="pic4" className="responsive img_offer" />
           </div>
             <div className="col-md-4">
             <img src={pic3} alt="pic3" className="responsive img_offer" />
            </div>
            
             </div>
            </div>
        </section>
    );
};

export default OfferCard;