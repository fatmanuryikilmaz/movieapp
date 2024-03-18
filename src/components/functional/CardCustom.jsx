import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Box, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardCustom = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        // maxHeight: 350,
        bgcolor: "black",
        boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.57)",
        color: "white",
        m: "20px",
        p: "0",
        position: "relative",
      }}
    >
      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          p: "0",
        }}
      >
        <CardMedia
          component="img"
          sx={{ objectFit: "cover", p: "0", height: "350px" }}
          image="https://themes.potenzaglobalsolutions.com/html/4k-star/images/movie/06.jpg"
          alt="Movie picture"
        />
        <Box
          sx={{
            float: "left",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            position: "absolute",
            top: "10px",
            left: "10px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "#0b0b0d",
              borderColor: "f6be00",
              backgroundColor: "#f6be00",
              borderRadius: "1px",
              fontSize: "12px",
              lineHeight: "1",
              p: 0.7,
              fontWeight: 550,
              opacity: 0.8,
              "&:hover": {
                backgroundColor: "#fff",
                borderColor: "#f6be00",
                color: "#f6be00",
                boxShadow: "none",
                opacity: 1,
              },
            }}
          >
            Horror
          </Button>
        </Box>
        <Box
          sx={{
            float: "right",
            display: "flex",
            position: "absolute",
            top: "3px",
            right: "10px",
          }}
        >
          <IconButton
            sx={{
              color: "white",
              mr: "4px",
              fontSize: "16px",
              "&:hover": {
                color: "#f6be00",
              },
            }}
            aria-label="FavoriteBorderIcon"
          >
            <FavoriteBorderIcon sx={{ fontSize: "16px" }} />
          </IconButton>
          <Box>
            <IconButton
              sx={{
                color: "white",

                "&:hover": {
                  color: "#f6be00",
                },
              }}
              aria-label="VisibilityOutlinedIcon"
            >
              <VisibilityOutlinedIcon sx={{ mb: "3px", fontSize: "20px" }} />
              <Typography variant="p" sx={{ ml: "4px", fontSize: "14px" }}>
                5M
              </Typography>
            </IconButton>
          </Box>
        </Box>
      </CardActions>

      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          top: 280,
          bottom: 0,
          width: "100%",
        }}
      >
        <Box
          sx={{
            float: "left",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <IconButton
            sx={{ color: "white", right: 10 }}
            aria-label="PlayCircleIcon"
          >
            <PlayCircleIcon
              sx={{
                fontSize: "30px",
                mt: 1,

                "&:hover": {
                  color: "#f6be00",
                  background: "#fff",
                  borderRadius: "50%",
                },
              }}
            />
          </IconButton>
          <CardContent sx={{ p: 0 }}>
            <Link to="/">
              <Typography variant="h6" sx={{ mt: "30px", fontSize: "22px" }}>
                The Deer Hunter
              </Typography>
            </Link>
          </CardContent>
        </Box>
        <Box sx={{ float: "right", position: "relative", mt: 1 }}>
          <IconButton
            sx={{
              color: "white",
              "&:hover": {
                color: "#f6be00",
              },
            }}
            aria-label="share"
          >
            <ShareIcon sx={{ fontSize: 22 }} />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
              "&:hover": {
                color: "#f6be00",
              },
            }}
            aria-label="add"
          >
            <AddIcon sx={{ pr: 1.5, fontSize: 22 }} />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CardCustom;
