import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderCards from "../functional/SliderCards";
import CardCustom from "../functional/CardCustom";
import { Box } from "@mui/material";
import SliderCategories from "../functional/SliderCategories";
import Pagination from "@mui/material/Pagination";

const Home = () => {
  const [movieData, setMovieData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
  };

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
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovieData(response.results);
        setPageCount(response.total_pages);
      })
      .catch((err) => console.error(err));
  }, [page]);
  return (
    <div className="container">
      <SliderCards />
      <SliderCategories />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {movieData?.map((item) => {
          return (
            <CardCustom
              genres={item.genre_ids}
              movieImage={item.poster_path}
              movieName={item.original_title}
              id={item.id}
              popularity={item.popularity}
              key={item.id}
            />
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: "15px",
        }}
      >
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChange}
          sx={{ "& .MuiPaginationItem-root ": { color: "#fff" } }}
        />
      </Box>
    </div>
  );
};

export default Home;
