import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

/* class Navbar extends Component {
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isAuthenticated, toggleAuth } = authContext
                    const { isLightTheme, light, dark } = themeContext
                    const theme = isLightTheme ? light : dark

                    return (
                        <nav style={{ background: theme.ui, color: theme.syntax }}>
                            <h1>Jbl Store</h1>
                            <div onClick={toggleAuth}>
                                {isAuthenticated ? 'Logged in' : 'Logged out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    )
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        );
    }
} */

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const { isAuthenticated, toggleAuth } = useContext(AuthContext)
    const { toggleTheme } = useContext(ThemeContext)

    const theme = isLightTheme ? light : dark
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }} class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                <span class="font-semibold text-xl tracking-tight">JBL Store</span>
            </div>

            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-purple-500 hover:text-white mr-4" >Home</a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-purple-500 hover:text-white mr-4">About</a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-purple-500 hover:text-white mr-4">Contact</a>
                    <button onClick={toggleTheme}>Toggle the theme</button>

                </div>

            </div>

            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
        </nav>
    );
}

export default Navbar;