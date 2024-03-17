import React from "react";
import Slider from "react-slick";
import CardCustom from "./CardCustom";

function SliderCards() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
        <CardCustom />
      </Slider>
    </div>
  );
}

export default SliderCards;
