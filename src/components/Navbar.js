import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext } from '../contexts/ThemeContext'
import { UserContext, ACTIONS, checkLogin } from '../contexts/UserContext'
import { useHistory } from "react-router-dom"

import { navBtn, btnDarkMode, btn } from '../assets/style'
import { auth } from '../script/firebaseInit'

import '../assets/navbar.css'

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { toggleTheme } = useContext(ThemeContext)
    const { dispatchUser, user } = useContext(UserContext)

    const [isMobileMode, setMobileMode] = useState(false)

    const isLogin = checkLogin(user)
    const history = useHistory()
    const theme = isLightTheme ? light : dark

    const signout = () => {
        auth.signOut().then(console.log('sign out'))
        dispatchUser({ type: ACTIONS.LOGOUT })
        history.push("/Login")
    }

    const displayMobileMenue = () => setMobileMode(isMobileMode ? false : true)

    return (
        <nav style={{ background: theme.bg, color: theme.syntax }}>
            <div style={{ height: "10vh" }} className="flex md:flex-grow">
                <div className="flex items-center flex-shrink-0 mx-6" >
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <Link to="/">JBL Store</Link>
                </div>

                <div className="flex items-center w-auto flex sm:hidden">
                    <button className="toggle-button" onClick={displayMobileMenue}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
                <div className="hidden flex-grow items-center w-auto sm:flex">
                    <div className="flex flex-grow">
                        <Link to="/" className={navBtn.primary} >
                            {
                                isLogin === false ? "Home" : "Dashboard"
                            }
                        </Link>
                        <Link to="/About" className={navBtn.primary}>About</Link>
                        <Link to="/Contact" className={navBtn.primary}>Contact</Link>
                    </div>
                    <div className="flex leading-none">
                        {
                            isLogin === false ?
                                <Link to="/Login" className={navBtn.primary}>
                                    <button className={btn.primary}>Login</button>
                                </Link> :
                                <div className={navBtn.primary} >
                                    <button className={btn.primary} onClick={signout}>Logout</button>
                                </div>

                        }
                        <button onClick={toggleTheme} className={btnDarkMode}>
                            <svg className="fill-current h-6 w-8 " viewBox="0 0 18 18"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menue */}
            <div style={{ display: isMobileMode ? 'inline' : 'none' }}>
                <div className="flex flex-col">
                    <Link to="/" className={`${navBtn.primary} m-2 w-full text-center`} >{isLogin === false ? "Home" : "Dashboard"}</Link>
                    <Link to="/About" className={`${navBtn.primary} m-2 w-full text-center`}>About</Link>
                    <Link to="/Contact" className={`${navBtn.primary} m-2 w-full text-center`}>Contact</Link>
                    <div className="flex my-2 w-full justify-center">
                        {
                            isLogin === false ?
                                <Link to="/Login" className={navBtn.primary}><button className={btn.primary_small}>Login</button></Link>
                                :
                                <div className={navBtn.primary} >
                                    <button className={btn.primary_small} onClick={signout}>Logout</button>
                                </div>
                        }
                        <button onClick={toggleTheme} className={btn.green_small}>
                            {isLightTheme ? "Light" : "Dark"}
                        </button>
                    </div>
                </div>
            </div>
            <br />
        </nav >
    )
}

export default Navbar