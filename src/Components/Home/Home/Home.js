import React from 'react';
import CustomerService from '../../Pages/CustomerService/CustomerService';
import Room from '../../Service/Service';
import Header from '../Header/Header';
import OfferCard from '../OfferCard/OfferCard';
import Refer from '../Refer/Refer';
import RoomDetails from './../../Pages/RomeDetails/RoomDetails';
import ListProperty from './../../Pages/ListProperty/ListProperty';
import OurServices from '../../Service/OurServices/OurServices';
import Icon from './../../Service/Icon/Icon';
import Card from './../../Pages/CardSlider/Card';
import CardSlider from '../../Pages/CardSlider/CardSlider';
import LocationPart from '../../Pages/LocationPart/LocationPart';


const Home = () => {
    return (
        <div>
            <Header />
            <OfferCard />
            <Room />
            <Refer />
           <RoomDetails />
           <OurServices />
           <CustomerService />
           <ListProperty />
           <Icon />
         
         <CardSlider />
         <LocationPart />
        </div>
    );
};

export default Home;
