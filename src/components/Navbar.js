import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext';
import { navBtn, btnDarkMode, btn } from '../assets/style'

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { toggleTheme } = useContext(ThemeContext)

    const theme = isLightTheme ? light : dark
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }} className="flex items-center justify-between flex-wrap bg-teal-500 p-2">
            <div className="flex items-center flex-shrink-0 mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <Link to="/">JBL Store</Link>
            </div>

            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/" className={navBtn.primary} >Home</Link>
                    <Link to="/About" className={navBtn.primary}>About</Link>
                    <Link to="/Contact" className={navBtn.primary}>Contact</Link>
                </div>
                <div className="flex leading-none mt-4 lg:mt-0">
                    <Link to="/Login" className={navBtn.primary}>
                        <button className={btn.primary}>Login</button>
                    </Link>
                    <button onClick={toggleTheme} className={btnDarkMode}>
                        <svg className="fill-current h-6 w-8 " viewBox="0 0 18 18"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;