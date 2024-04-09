import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import CardCustom from "../functional/CardCustom";

const SearchPage = () => {
  const { searchText } = useParams();

  const [searchData, setsearchData] = useState([]);
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
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setsearchData(response.results))
      .catch((err) => console.error(err));
  }, [searchText]);
  return (
    <Box>
      {searchText}
      {searchData?.map((data) => (
        <CardCustom
          genres={data.genre_ids}
          id={data.id}
          movieImage={data.poster_path}
          movieName={data.original_title}
          popularity={data.popularity}
          key={data.id}
        />
      ))}
    </Box>
  );
};

export default SearchPage;
