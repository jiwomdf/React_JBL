import React, { createContext, useState } from "react"

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: false,
    light: { syntax: "#555", ui: "#ddd", bg: "#f3f6f7" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
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
