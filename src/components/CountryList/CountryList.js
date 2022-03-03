import React from "react";
import CountryItem from "../CountryItem/CountryItem";
import Grid from "@mui/material/Grid";

function CountryList({ countries, exitCountryDetail, userVal }) {
  console.log(countries);
  return (
    <Grid container spacing={4} sx={{ marginTop: "50px" }}>
      {countries
        .filter((country) =>
          country.name.toLowerCase().includes(userVal.toLowerCase())
        )
        .map((country) => (
          <CountryItem
            key={country.flag}
            country={country}
            exitCountryDetail={exitCountryDetail}
          />
        ))}
    </Grid>
  );
}

export default CountryList;
