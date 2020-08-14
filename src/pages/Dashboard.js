import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { ThemeContext } from "../contexts/ThemeContext";
import { txtTitle, label } from "../assets/style"
import ImageList from "../components/ImageList"

const Dashboard = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { user } = useContext(UserContext)
    const theme = isLightTheme ? light : dark

    console.log(user)

    return (
        <div style={{ color: theme.syntax, background: theme.bg }}>
            <div className={txtTitle}>Dasboard</div>
            <div className={`${label.medium} flex justify-center`}>Welcome {user.email} </div>
            <br />
            <ImageList></ImageList>
        </div>
    );
};

export default Dashboard;