import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import CardCustom from "../functional/CardCustom";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const { id } = useParams();

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
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${id}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setCategoryData(response.results);
        setPageCount(response.total_pages);
      })
      .catch((err) => console.error(err));
  }, [id, page]);
  return (
    <div className="container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {categoryData.length === 0 && <div>No results found</div>}
        {categoryData?.map((data) => (
          <CardCustom
            genres={data.genre_ids}
            movieImage={data.poster_path}
            movieName={data.original_title}
            id={data.id}
            popularity={data.popularity}
            key={data.id}
          />
        ))}
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

export default CategoryPage;
