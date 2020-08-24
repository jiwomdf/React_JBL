import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#F7FAFC", bg2: "#F7FAFC" },
    dark: { syntax: "#ddd", ui: "#44337a", bg: "#553c9a", bg2: "#38A169" },
  })

  const toggleTheme = () => {
    setTheme(prevtheme => {
      return { ...prevtheme, isLightTheme: !theme.isLightTheme }
    })
  }

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
