import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { label, labelContainer, labelInput, btn } from '../assets/style'

const Login = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark
    return (
        <div style={{ color: theme.syntax, background: theme.bg }} >
            <div className="flex items-center justify-center pt-12 pb-12">
                <form className="shadow-md rounded pt-8 pl-12 pr-12 pb-12" style={{ background: theme.ui }} >
                    <div className="mb-4">
                        <label className={label.medium} htmlFor="username">Username</label>
                        <input className={labelInput} id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className={label.medium} htmlFor="password">Password</label>
                        <input className={labelInput} id="password" type="password" placeholder="password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className={btn.primary} type="button">Sign In</button>
                        <a className="inline-block align-baseline font-bold text-sm" href="#">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;