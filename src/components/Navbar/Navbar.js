import React from "react";
import { AppBar, Typography, Grid } from "@mui/material";
import { Wrapper } from "../Wrapper/Wrapper";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styled from "styled-components";

function Header() {
  return (
    <header className="header">
      <AppBar
        position="static"
        className="header__box"
        sx={{
          padding: "12px 0",
          background: "#fff",
          color: "#000",
          boxShadow: "0 1px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Wrapper>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h6">Where In The World?</Typography>
            </Grid>
            <Grid item>
              <ThemeSwitcher />
            </Grid>
          </Grid>
        </Wrapper>
      </AppBar>
    </header>
  );
}

export default Header;
