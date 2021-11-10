import React from 'react';
import CustomerService from '../../Pages/CustomerService/CustomerService';
import Room from '../../Service/Service';
import Header from '../Header/Header';
import OfferCard from '../OfferCard/OfferCard';
import Refer from '../Refer/Refer';
import RoomDetails from './../../Pages/RomeDetails/RoomDetails';
import ListProperty from './../../Pages/ListProperty/ListProperty';

const Home = () => {
    return (
        <div>
            <Header />
            <OfferCard />
            <Room />
            <Refer />
           <RoomDetails />
           <CustomerService />
           <ListProperty />
        </div>
    );
};

export default Home;