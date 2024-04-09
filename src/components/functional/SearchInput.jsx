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
        label="Outlined"
        variant="outlined"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
