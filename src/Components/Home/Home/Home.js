import React from "react";
import Blogs from "../../Pages/Blogs/Blogs";
import Service from "../../Service/Service";

import OfferCard from "../OfferCard/OfferCard";
import Refer from "../Refer/Refer";
import RoomDetails from "./../../Pages/RomeDetails/RoomDetails";
import ListProperty from "./../../Pages/ListProperty/ListProperty";
import OurServices from "../../Service/OurServices/OurServices";
import Icon from "./../../Service/Icon/Icon";
import Card from "./../../Pages/CardSlider/Card";
import CardSlider from "../../Pages/CardSlider/CardSlider";
import LocationPart from "../../Pages/LocationPart/LocationPart";
import AppService from "../../Pages/AppService/AppService";
import PopularSercahes from "../../Pages/PopularSercahes/PopularSercahes";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <OfferCard />
      <Service />
      <Refer />
      <RoomDetails />
      <OurServices />
      <Blogs />
      <ListProperty />
      <Icon />
      <CardSlider />
      <Card />
      <LocationPart />
      <AppService />
      <PopularSercahes />
    </main>
  );
};

export default Home;
