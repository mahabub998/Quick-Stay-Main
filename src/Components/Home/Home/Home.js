import React from 'react';
import Room from '../../Service/Service';
import Header from '../Header/Header';
import OfferCard from '../OfferCard/OfferCard';
import Refer from '../Refer/Refer';
import RoomDetails from './../../Pages/RomeDetails/RoomDetails';

const Home = () => {
    return (
        <div>
            <Header />
            <OfferCard />
            <Room />
            <Refer />
           <RoomDetails />
        </div>
    );
};

export default Home;