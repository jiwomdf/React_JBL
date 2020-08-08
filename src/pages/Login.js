import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { txtTitle, label, labelInput, btn, form } from '../assets/style'
import { useHistory } from "react-router-dom";

const Login = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark

    const history = useHistory();

    const navigateRegister = () => {
        history.push("/Register")
    }

    return (
        <div style={{ color: theme.syntax, background: theme.bg, height: "100vh", minHeight: "100vh" }} >
            <p className={txtTitle}>Login</p>

            <div className="container mx-auto flex justify-center pb-8">
                <form className={form.card} style={{ background: theme.ui }} >
                    <div className="mb-4">
                        <label className={label.small} htmlFor="username">Username</label>
                        <input className={labelInput.medium} id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        <label className={label.small} htmlFor="password">Password</label>
                        <input className={labelInput.medium} id="password" type="password" placeholder="password" />
                    </div>
                    <div className="flex justify-between items-center">
                        <button className={btn.primary} style={{ marginTop: "12px" }} type="button">Sign In</button>
                        <a className="inline-block align-baseline font-bold text-sm" href="#">Forgot Password?</a>
                    </div>
                </form>
            </div>
            <div className="flex justify-center">
                <button onClick={navigateRegister}>Dont have any account? register here</button>
            </div>
        </div>

    );
}

export default Login;