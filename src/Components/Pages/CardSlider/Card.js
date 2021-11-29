import React,{Component} from 'react';
import './Card.css';

import Slider from "react-slick";



export default class SwipeToSlide extends Component {
    render() {
      const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
      };
      return (
        <div className="margin_card">
          <h2>Swipe To Slide</h2>
          <Slider {...settings} >
            <div className="bg bg-primary card_size margin_card responsive">
              <h3>1</h3>
            </div>
            <div className="bg bg-secondary card_size margin_card responsive">
              <h3>2</h3>
            </div>
            <div className="bg bg-success card_size margin_card">
              <h3>3</h3>
            </div>
            <div className="bg bg-info card_size margin_card">
              <h3>4</h3>
            </div>
            <div className="bg bg-warning card_size margin_card">
              <h3>5</h3>
            </div>
            <div className="bg bg-danger card_size margin_card">
              <h3>6</h3>
            </div>
            <div className="bg bg-warning card_size margin_card">
              <h3>7</h3>
            </div>
            <div className="bg bg-dark card_size margin_card">
              <h3>8</h3>
            </div>
            <div className="bg bg-primary card_size margin_card">
              <h3>9</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }