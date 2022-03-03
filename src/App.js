import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import CountryList from "./components/CountryList/CountryList";
import FilterCountries from "./components/FilterCountries/FilterCountries";
import CountryDetail from "./components/CountryDetail/CountryDetail";
import Grid from "@mui/material/Grid";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { ThemeTogglerProvider } from "./contexts/ThemeToggler";

function App() {
  const [countries, setCountries] = useState([]);
  const [userVal, setUserVal] = useState("");
  const [menu, setMenu] = useState("");
  const [countryDetailActive, setCountryDetailActive] = useState(false);
  const { theme } = useContext(ThemeTogglerProvider);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);
  const exitCountryDetail = (val) => {
    setCountryDetailActive(val);
  };
  const updateUserVal = (val) => {
    setUserVal(val);
  };
  const filterByContinent = (continent) => {
    axios
      .get(`https://restcountries.com/v2/regionalbloc/${continent}`)
      .then((res) => {
        setCountries(res.data);
      });
  };

  return (
    <div className={theme === "dark" ? "app-dark-theme" : "app-light-theme"}>
      <BrowserRouter>
        <Navbar />
        <Wrapper>
          {!countryDetailActive && (
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ margin: "50px 0" }}
              rowSpacing={4}
            >
              <Grid item>
                <SearchInput updateUserVal={updateUserVal} />
              </Grid>
              <Grid item>
                <FilterCountries filterByContinent={filterByContinent} />
              </Grid>
            </Grid>
          )}
          <Switch>
            <Route exact path="/">
              <CountryList
                userVal={userVal}
                countries={countries}
                exitCountryDetail={exitCountryDetail}
              />
            </Route>
            <Route path="/:name">
              <CountryDetail exitCountryDetail={exitCountryDetail} />
            </Route>
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 *  Components
 *  App
 *  Header
 *    ThemeSwitcher
 *  SearchCountriesInput
 *  FilterCountries
 *  CountryList
 *     CountryItem
 *         CountryDetail
 *
 *
 *
 */
