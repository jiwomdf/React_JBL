import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: false,
    light: { syntax: "#555", ui: "#ddd", bg: "#F7FAFC", con: "#f3f6f7" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#595959", con: "#555" },
  });

  const toggleTheme = () => {
    setTheme({
      ...theme,
      isLightTheme: !theme.isLightTheme,
    });
  };

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
