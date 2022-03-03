import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField } from "@mui/material";
import styled from "styled-components";

const SearchInputBox = styled.div`
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: clamp(300px, 50vw, 550px);
  padding: 15px 0 15px 20px;
  display: flex;
  align-items: center;
`;
const CountrySearchInput = styled.input`
  border: 0;
  outline: transparent;
  padding-left: 15px;
  flex: 1;
  font-size: 16px;
  background-color: transparent;
`;

function SearchInput({ updateUserVal, userVal }) {
  return (
    <SearchInputBox className="search-input-box">
      <SearchIcon
        className="search-input-icon"
        sx={{ color: "gray", fontSize: "1.5rem" }}
      />
      <CountrySearchInput
        type="text"
        className="search-input"
        name="search-input"
        placeholder="Search for any country..."
        onChange={({ target: { value } }) => {
          updateUserVal(value);
        }}
        value={userVal}
      />
    </SearchInputBox>
  );
}

export default SearchInput;
