import React, { useState } from "react";

export const ThemeTogglerProvider = React.createContext("light");

function ThemeToggler({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeTogglerProvider.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeTogglerProvider.Provider>
  );
}

export default ThemeToggler;
