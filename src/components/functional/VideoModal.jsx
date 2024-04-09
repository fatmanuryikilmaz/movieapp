import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import IconButton from "@mui/material/IconButton";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "none",
  border: "1px solid #f6be00 ",
  width: { xs: 320, sm: 480, md: 500 },
};

export default function VideoModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { id } = useParams();
  const [videoModalData, setVideoModalData] = useState({});
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
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setVideoModalData(response.results))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Box sx={{ display: "flex", alignItems: "flex-start" }}>
      <IconButton
        onClick={handleOpen}
        sx={{ color: "white", right: 0 }}
        aria-label="PlayCircleIcon"
      >
        <PlayCircleIcon
          sx={{
            fontSize: "40px",
            color: "#f6be00",

            "&:hover": {
              color: "white",
              background: "black",
              borderRadius: "50%",
            },
          }}
        />
        <Typography
          variant="p"
          sx={{
            fontSize: "20px",
            fontStyle: "italic",
            paddingLeft: "10px",
            color: "#f6be00",
            marginBottom: "3px",

            "&:hover": {
              color: "white",
            },
          }}
        >
          Play Trailer
        </Typography>
      </IconButton>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <iframe
            width={"100%"}
            height="300"
            src={`https://www.youtube.com/embed/${videoModalData[0]?.key}`}
            title={videoModalData[0]?.name}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Box>
      </Modal>
    </Box>
  );
}
