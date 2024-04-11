import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CardCustom from "./CardCustom";
import CardCategories from "./CardCategories";

function SliderCategories() {
  const [cardData, setcardData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmE3MGEyMzliMWMwMzlkYmE4Mjk1N2I1ZTEwMmYwYSIsInN1YiI6IjY2MDA4YjJkZDM4YjU4MDE3ZDE5MmYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wdv9B-pbojmolysxxbwTpGJAiYg_jSLvjMOgDAEDAc4",
      },
    };

    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => setcardData(response.genres))
      .catch((err) => console.error(err));
  }, []);

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
    <Box className="slider-container">
      <Typography
        variant="h2"
        sx={{
          color: "#f6be00",
          fontSize: "24px",
          textAlign: "left",
          marginLeft: "30px",
          fontStyle: "oblique",
          boxShadow: "revert-layer",
          marginBottom: "15px",
          marginTop: "30px",
        }}
      >
        Categories
      </Typography>
      <Slider {...settings}>
        {cardData?.map((data) => (
          <CardCategories categoryName={data.name} id={data.id} key={data.id} />
        ))}
      </Slider>
    </Box>
  );
}

export default SliderCategories;
