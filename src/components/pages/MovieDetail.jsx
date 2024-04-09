import { Box, CardMedia, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TabButtons from "../functional/TabButtons";
import VideoModal from "../functional/VideoModal";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetailData, setMovieDetailData] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmE3MGEyMzliMWMwMzlkYmE4Mjk1N2I1ZTEwMmYwYSIsInN1YiI6IjY2MDA4YjJkZDM4YjU4MDE3ZDE5MmYwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wdv9B-pbojmolysxxbwTpGJAiYg_jSLvjMOgDAEDAc4",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setMovieDetailData(response))
      .catch((err) => console.error(err));
  }, [id]);
  return (
    <>
      <Grid
        container
        sx={{ padding: "100px 0", color: "white", justifyContent: "center" }}
        spacing={2}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <CardMedia
            component="img"
            sx={{ objectFit: "cover", p: "0", m: "25px", width: "350px" }}
            image={
              "https://image.tmdb.org/t/p/w500" + movieDetailData.poster_path
            }
            alt="Movie picture"
          />
          {/* {movieDetailData.poster_path} */}
        </Grid>
        <Grid item xs={12} md={5} sx={{ marginLeft: "20px" }}>
          <Grid
            sx={{
              fontSize: "36px",
              textAlign: "left",
              marginBottom: "3px",
              fontFamily: "sans-serif",
              fontStyle: "revert",
              marginTop: "60px",
              fontWeight: 700,
            }}
          >
            {movieDetailData.title}
          </Grid>
          <Grid
            sx={{
              textAlign: "left",
              color: "#f6be00",
              marginBottom: "15px",
              fontSize: "20px",
              fontStyle: "italic",
            }}
          >
            {movieDetailData.tagline}
          </Grid>
          <Grid
            sx={{
              textAlign: "left",
              marginBottom: "3px",
              fontSize: "16px",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Status: {movieDetailData.status}
          </Grid>
          <Grid
            sx={{
              textAlign: "left",
              marginBottom: "15px",
              fontSize: "16px",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Popularity: {movieDetailData.popularity}
          </Grid>
          <Grid
            sx={{
              textAlign: "left",
              marginBottom: "20px",
              fontSize: "20px",
              lineHeight: "30px",
              fontFamily: "sans-serif",
              fontStyle: "revert",
            }}
          >
            {movieDetailData.overview}
          </Grid>
          <Grid>
            <VideoModal />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TabButtons />
        </Grid>
      </Grid>
    </>
  );
};

export default MovieDetail;
