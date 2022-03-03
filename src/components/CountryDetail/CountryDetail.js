import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Box, Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink, useLocation } from "react-router-dom";
import { addCommaToNumbers } from "../../util/addComma";

function CountryDetail({
  countryName,
  exitCountryDetail,
  countryDetailActive,
}) {
  const [country, setCountry] = useState("");
  const [alphaCountry, setAlphaCountry] = useState("");

  const location = useLocation();
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/name${location.pathname}`)
      .then((res) => {
        setCountry(res.data);
      });

    window.addEventListener("load", () => {
      console.log("LOADED!!!");
      exitCountryDetail(true);
    });
  }, []);
  useEffect(() => {
    console.log("Working");

    if (alphaCountry) {
      axios
        .get(`https://restcountries.com/v2/alpha/${alphaCountry.toLowerCase()}`)
        .then((res) => {
          setCountry([res.data]);
        });
    }

    setAlphaCountry("");
  }, [alphaCountry]);
  console.log(country);
  return (
    <div className="country-detail" style={{ padding: "50px 0" }}>
      {country.length && (
        <>
          <NavLink
            className="country-detail__link"
            style={{ display: "flex", alignItems: "center" }}
            to="/"
            onClick={() => exitCountryDetail(false)}
          >
            <ArrowBackIcon mr={1} />
            <Typography ml={1}>Back</Typography>
          </NavLink>
          <Grid container mt={10}>
            <Grid item xs={12} lg={6}>
              <img
                className="country-detail__img"
                src={country[0].flag}
                alt={country[0].name}
                style={{
                  height: "350px",
                  width: "100%",
                  paddingRight: "100px",
                }}
              />
            </Grid>
            <Grid item lg={6}>
              <Typography mt={3} variant="h4" fontWeight="bold">
                {country[0].name}
              </Typography>
              <Box mt={5} display="flex" justifyContent="space-between">
                <Box>
                  <Typography mb={1}>
                    <strong className="country-detail__text">
                      Native Name
                    </strong>{" "}
                    <span className="country-detail__text--gray">
                      {country[0].nativeName}
                    </span>
                  </Typography>
                  <Typography mb={1}>
                    <strong className="country-detail__text">Population</strong>{" "}
                    <span className="country-detail__text--gray">
                      {addCommaToNumbers(country[0].population)}
                    </span>
                  </Typography>
                  <Typography mb={1}>
                    <strong className="country-detail__text">Region</strong>{" "}
                    <span className="country-detail__text--gray">
                      {country[0].region}
                    </span>
                  </Typography>
                  <Typography mb={1}>
                    <strong className="country-detail__text">Sub Region</strong>{" "}
                    <span className="country-detail__text--gray">
                      {country[0].subregion}
                    </span>
                  </Typography>
                  <Typography mb={1}>
                    <strong className="country-detail__text">
                      Native Name
                    </strong>{" "}
                    <span className="country-detail__text--gray">
                      {country[0].capital}
                    </span>
                  </Typography>
                </Box>
                <Box>
                  <Typography mb={1}>
                    <strong className="country-detail__text">
                      Top Level Domain
                    </strong>{" "}
                    <span className="country-detail__text--gray">
                      {country[0].topLevelDomain[0]}
                    </span>
                  </Typography>
                  <Typography mb={1}>
                    <strong className="country-detail__text">Currencies</strong>{" "}
                    <span className="country-detail__text--gray">
                      {country[0].currencies[0].name}
                    </span>
                  </Typography>
                  <Typography mb={1}>
                    <strong className="country-detail__text">Languages</strong>{" "}
                    {country[0].languages.map((language) => (
                      <span className="country-detail__text--gray">
                        {language.name},{" "}
                      </span>
                    ))}
                  </Typography>
                </Box>
              </Box>
              <Box mt={5}>
                <Typography>
                  {country[0].borders && (
                    <strong className="country-detail__text">
                      Border Countries
                    </strong>
                  )}
                  {country[0]?.borders?.map((border) => (
                    <Button
                      className="country-detail__btn"
                      key={border.toString()}
                      variant="contained"
                      onClick={() => setAlphaCountry(border)}
                    >
                      {border}
                    </Button>
                  ))}
                  {!country[0]?.borders && (
                    <Button variant="contained" className="country-detail__btn">
                      No Borders
                    </Button>
                  )}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

export default CountryDetail;
