import React from 'react';
import './AppServiceLocation.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import LocationData from '../../FakeData/FakeDataCard.json'

const AppServiceLocation = () => {
    console.log(LocationData);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 4
        },
        MidTablet: {
            breakpoint: { max: 768, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (

        <div>
          
            <div className="col-md-12">
            <h1 className="text_sizing">You Can Find Us Here</h1>
                <div className="container-fluid px-lg-5 pb-5">
                    {LocationData &&
                        <Carousel responsive={responsive}>
                            {LocationData.map((item, index) => {
                                return (
                                    <div key={item?.id} className="slider-box m-2 p-3 row" >
                                        <div className="col-md-2 d-flex location-card justify-content-center align-items-center">
                                            <div className="card-item">
                                               
                                                <h5>{item?.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Carousel>
                    }
                </div>
            </div>

        </div>

    );
};

export default AppServiceLocation;