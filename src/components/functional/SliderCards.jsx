import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import CardCustom from "./CardCustom";

function SliderCards() {
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

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setcardData(response.results))
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
        }}
      >
        Top Rated
      </Typography>
      <Slider {...settings}>
        {cardData?.map((data) => (
          <CardCustom
            genres={data.genre_ids}
            id={data.id}
            movieImage={data.poster_path}
            movieName={data.original_title}
            popularity={data.popularity}
            key={data.id}
          />
        ))}
      </Slider>
    </Box>
  );
}

export default SliderCards;
