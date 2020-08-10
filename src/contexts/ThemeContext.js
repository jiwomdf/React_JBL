import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#F7FAFC' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    })

    const toggleTheme = () => {
        setTheme([...theme, { isLightTheme: !this.state.isLightTheme }])
    }

    return (
        <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider >
    );
}

export default ThemeContextProvider;