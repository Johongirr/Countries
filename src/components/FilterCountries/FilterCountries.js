import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  createTheme,
} from "@mui/material";

function FilterCountries({ filterByContinent }) {
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
        >
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="eu"
          >
            Europe
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="efta"
          >
            European Trade Association
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="caricom"
          >
            Caribbean Community
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="pa"
          >
            Pacific Alliance
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="au"
          >
            African Union
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="usan"
          >
            South American Union
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="eeu"
          >
            Euroasion Economic Union
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="al"
          >
            Arab League
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="asean"
          >
            Southeast Asian Nations
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="cais"
          >
            Central American Integration System
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="cefta"
          >
            Central European Free Trade Agreement
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="nafta"
          >
            North American Free Trade Agreement
          </MenuItem>
          <MenuItem
            className="filter-continent__option"
            sx={{ fontSize: "14px" }}
            value="saarc"
          >
            South Asian Association
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default FilterCountries;
