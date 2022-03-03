import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { addCommaToNumbers } from "../../util/addComma";

function CountryItem({ country, exitCountryDetail }) {
  console.log(country.name.official);
  return (
    <Grid item xs="12" sm="6" md="4" lg="3">
      <Card className="card">
        <CardMedia
          component="img"
          height="200"
          image={country.flags.svg}
          alt={country.name.official}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" mb={2}>
            {country.name.official}
          </Typography>
          <Box display="flex">
            <Typography
              variant="body2"
              sx={{ color: "#000", fontWeight: "bold" }}
              mr={2}
              mb={1}
              component="strong"
              className="card__strong"
            >
              Population
            </Typography>
            <Typography variant="body2" component="span" className="card__gray">
              {addCommaToNumbers(country.population)}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography
              variant="body2"
              sx={{ color: "#000", fontWeight: "bold" }}
              mr={2}
              mb={1}
              className="card__strong"
            >
              Region
            </Typography>
            <Typography variant="body2" component="span" className="card__gray">
              {country.region}
            </Typography>
          </Box>
          <Box display="flex">
            <Typography
              variant="body2"
              sx={{ color: "#000", fontWeight: "bold" }}
              mr={2}
              mb={1}
              className="card__strong"
            >
              Capital
            </Typography>
            <Typography variant="body2" component="span" className="card__gray">
              {country.capital}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Link
            onClick={() => exitCountryDetail(true)}
            to={`/${country.name.common}`}
            className="country-item__btn"
          >
            Read Details
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default CountryItem;
