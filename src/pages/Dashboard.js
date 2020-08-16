import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Link } from 'react-router-dom'

import { ThemeContext } from "../contexts/ThemeContext";
import { btn, navBtn, label } from "../assets/style"
import ImageListUser from "../components/ImageListUser"

const Dashboard = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { user } = useContext(UserContext)
    const theme = isLightTheme ? light : dark

    return (
        <div style={{ color: theme.syntax, background: theme.bg }}>
            <div className="pt-4"></div>
            <div className="flex justify-center">
                <svg viewBox="0 0 20 20" fill="currentColor" className="user-circle w-12 h-12"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path></svg>
            </div>
            <div className={`${label.medium} flex justify-center`}>Welcome {user.email}</div>
            <div className="flex justify-center">
                <Link to="/Postitem" className={navBtn.primary}><button className={`${btn.primary_small} m-2`}>Post Photo</button></Link>
                <Link to="/" className={navBtn.primary}><button className={`${btn.primary_small} m-2`}>Edit Profile</button></Link>
            </div>

            <br /><br />
            <ImageListUser user={user}></ImageListUser>
        </div >
    );
};

export default Dashboard;