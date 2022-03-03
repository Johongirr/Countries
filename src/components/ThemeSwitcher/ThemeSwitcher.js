import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box, Typography } from "@mui/material";
import { ThemeTogglerProvider } from "../../contexts/ThemeToggler";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeTogglerProvider);
  const handleCLick = () => {
    toggleTheme();
  };
  return (
    <Box
      onClick={handleCLick}
      display="flex"
      sx={{ cursor: "pointer" }}
      alignItems="center"
    >
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      <Typography sx={{ marginLeft: "5px" }}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </Typography>
    </Box>
  );
}

export default ThemeSwitcher;
