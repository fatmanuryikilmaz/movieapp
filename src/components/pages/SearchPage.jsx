import React from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import CardCustom from "../functional/CardCustom";
import Pagination from "@mui/material/Pagination";

const SearchPage = () => {
  const { searchText } = useParams();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [searchData, setsearchData] = useState([]);

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
      `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setPageCount(response.total_pages);
        setsearchData(response.results);
      })
      .catch((err) => console.error(err));
  }, [searchText, page]);

  useEffect(() => {
    setPage(1);
  }, [searchText]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {searchData.length === 0 && <div>No results found</div>}
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
    </Box>
  );
};

export default SearchPage;
