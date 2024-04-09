import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
  return (
    <Box sx={{ backgroundColor: "black", height: "100%" }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: "80px",
          color: "white",
          margin: "100px",
        }}
      >
        404 - Not Found
      </Typography>
    </Box>
  );
};

export default NotFound;
