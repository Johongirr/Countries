import React, { useContext } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  createTheme,
} from "@mui/material";
import { ThemeTogglerProvider } from "../../contexts/ThemeToggler";

function FilterCountries({ filterByContinent }) {
  const { theme } = useContext(ThemeTogglerProvider);
  return (
    <div>
      <FormControl sx={{ width: "280px" }} className="filter-continent">
        <InputLabel
          sx={{ fontSize: "14px" }}
          className="filter-continent__text"
        >
          Filter by Region
        </InputLabel>
        <Select
          onChange={(e) => filterByContinent(e.target.value)}
          id="demo-simple-select"
          label="Age"
          variant="standard"
          className="filter-continent__select"
          style={theme === "dark" ? { color: "#fff" } : { color: "#000" }}
        >
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="all"
          >
            All
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="europe"
          >
            Europe
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="africa"
          >
            Africa
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="asia"
          >
            Asia
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="Oceania"
          >
            Oceania
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default FilterCountries;
