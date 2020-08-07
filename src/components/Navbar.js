import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext';
import { navBtn, btnDarkMode } from '../assets/style'

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { toggleTheme } = useContext(ThemeContext)

    const theme = isLightTheme ? light : dark
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }} className="flex items-center justify-between flex-wrap bg-teal-500 p-2">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <Link to="/" className="font-semibold text-xl tracking-tight">JBL Store</Link>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className={navBtn.primary} >Home</Link>
                    <Link to="/About" className={navBtn.primary}>About</Link>
                    <Link to="/Contact" className={navBtn.primary}>Contact</Link>
                    <button onClick={toggleTheme} className={btnDarkMode}> Toggle the theme</button>
                </div>
                <div className="pr-2">
                    <Link to="/Login" className={navBtn.primary}>Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;