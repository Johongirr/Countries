import React from "react";
import CountryItem from "../CountryItem/CountryItem";
import { Grid, Typography } from "@mui/material";

function CountryList({ countries, exitCountryDetail, userVal }) {
  const countriesList = countries?.filter((country) =>
    country.name.official.toLowerCase().includes(userVal.toLowerCase())
  );
  return (
    <Grid container spacing={4} sx={{ marginTop: "50px" }}>
      {countriesList.length < 1 && userVal.trim().length ? (
        <Typography
          className="app__no-match-text"
          variant="h2"
          sx={{ color: "#111", textAlign: "center", margin: "0 auto" }}
        >
          There are no matches
        </Typography>
      ) : (
        countriesList.map((country) => (
          <CountryItem
            key={country.name.official}
            country={country}
            exitCountryDetail={exitCountryDetail}
          />
        ))
      )}
    </Grid>
  );
}

export default CountryList;
