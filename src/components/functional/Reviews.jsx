import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Reviews = () => {
  const { id } = useParams();
  const [reviewsData, setReviewsData] = useState([]);
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
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setReviewsData(response.results))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <Grid item xs="12" sx={{ color: "white" }}>
      {reviewsData?.map((data) => {
        return (
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              ml: "20px",
            }}
          >
            <Typography variant="h5" sx={{ mt: "30px" }}>
              {data.author}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#f6be00",
                fontStyle: "italic",
                fontSize: "14px",
                mt: "5px",
              }}
            >
              10 / {data.author_details.rating}
            </Typography>
            <Typography
              variant="p"
              sx={{ mt: "5px", textAlign: "start", fontSize: "15px" }}
            >
              {data.content}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Reviews;
