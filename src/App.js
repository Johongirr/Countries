import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import SearchInput from "./components/SearchInput/SearchInput";
import CountryList from "./components/CountryList/CountryList";
import Loader from "./components/Loader/Loader";
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
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useContext(ThemeTogglerProvider);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data);
      setIsLoading(false);
    });
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 10000);
  }, []);

  const exitCountryDetail = (val) => {
    setCountryDetailActive(val);
  };
  const updateUserVal = (val) => {
    setUserVal(val);
  };
  const filterByContinent = (continent) => {
    setMenu(continent);
    setIsLoading(true);
    if (continent === "all") {
      axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
        setCountries(res.data);
        setIsLoading(false);
      });
      setUserVal("");
    } else {
      axios
        .get(`https://restcountries.com/v3.1/region/${continent}`)
        .then((res) => {
          setCountries(res.data);
          setIsLoading(false);
        });
      setUserVal("");
    }
  };
  return (
    <div
      className={
        theme === "dark" ? "app-dark-theme app" : "app-light-theme app"
      }
    >
      <BrowserRouter>
        <Navbar />
        <main>
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
                  <SearchInput
                    updateUserVal={updateUserVal}
                    userVal={userVal}
                  />
                </Grid>
                <Grid item>
                  <FilterCountries
                    continent={menu}
                    filterByContinent={filterByContinent}
                  />
                </Grid>
              </Grid>
            )}
            <Switch>
              <Route exact path="/">
                {isLoading ? (
                  <Loader />
                ) : (
                  <CountryList
                    userVal={userVal}
                    countries={countries}
                    exitCountryDetail={exitCountryDetail}
                  />
                )}
              </Route>
              <Route path="/:name">
                <CountryDetail
                  countryDetailActive={countryDetailActive}
                  exitCountryDetail={exitCountryDetail}
                />
              </Route>
            </Switch>
          </Wrapper>
        </main>
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
