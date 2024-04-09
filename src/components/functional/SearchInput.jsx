import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`search/${searchText}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Search Movie"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputLabelProps={{ shrink: true }}
        sx={{
          height: "16px",
          paddingBottom: "5px",
          ".MuiInputBase-input": {
            color: "white !important",
          },
          "& label": {
            color: "white",
          },
          "& label.Mui-focused": {
            color: "white",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#f6be00",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#f6be00",
            },
            "&:hover fieldset": {
              borderColor: "#f6be00",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#f6be00",
            },
            "&.MuiInputBase-root": {
              height: "35px",
            },
            "&.MuiFormLabel-root": {
              bottom: "200px",
            },
          },
        }}
      />
    </form>
  );
};

export default SearchInput;
