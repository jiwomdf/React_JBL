import React, { useContext } from 'react';
import ImageList from '../components/ImageList';
import { txtTitle } from "../assets/style";
import { ThemeContext } from "../contexts/ThemeContext";

const Main = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return (
        <div style={{ background: theme.bg }}>
            <p style={{ color: theme.syntax }} className={`${txtTitle} hidden md:flex`}>Welcome to JBL Store</p>
            <ImageList></ImageList>
        </div>
    );
}

export default Main;