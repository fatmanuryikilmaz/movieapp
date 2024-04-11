import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function CardCategories({ categoryName, id }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: "black",
        boxShadow: "0px 0px 5px 2px #f6be00 ",
        color: "white",
        m: "10px",
      }}
    >
      <Link to={`category/${id}`}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {categoryName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
