import React from "react";
import CountryItem from "../CountryItem/CountryItem";
import { Grid, Typography } from "@mui/material";

function CountryList({ countries, exitCountryDetail, userVal, setIsLoading }) {
  const countriesList = countries?.filter((country) =>
    country.name.official.toLowerCase().includes(userVal.toLowerCase())
  );

  return (
    <>
      {" "}
      <Grid container spacing={4} sx={{ marginTop: "50px" }}>
        {countriesList.length < 1 && userVal.trim().length ? (
          <Typography
            className="app__no-match-text"
            variant="h3"
            sx={{
              color: "#222",
              textAlign: "center",
              margin: "30px auto 0 auto",
            }}
          >
            There are no matches
          </Typography>
        ) : (
          countriesList.map((country) => (
            <CountryItem
              key={country.name.official}
              country={country}
              exitCountryDetail={exitCountryDetail}
              setIsLoading={setIsLoading}
            />
          ))
        )}
      </Grid>
      {!countries.length && (
        <Typography
          className="app__no-match-text"
          variant="h4"
          sx={{
            color: "#222",
            textAlign: "center",
            margin: "30px auto 0 auto",
          }}
        >
          There are no data available or Check your Network Connection!
        </Typography>
      )}
    </>
  );
}

export default CountryList;
