import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext, ACTIONS } from '../contexts/UserContext'

import { txtTitle, label, labelInput, btn, form } from '../assets/style'
import { useHistory } from "react-router-dom";
import { auth } from '../script/firebaseInit'

const Login = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { dispatch } = useContext(UserContext)

    const theme = isLightTheme ? light : dark
    const history = useHistory();

    const navigateRegister = () => {
        history.push("/Register")
    }

    const login = async () => {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        try {
            const cred = await auth.signInWithEmailAndPassword(email, password)
            dispatch({ type: ACTIONS.LOGIN, payload: cred.user.email })

            history.push("/Dashboard");
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div style={{ color: theme.syntax, background: theme.bg, height: "100vh", minHeight: "100vh" }} >
            <p className={txtTitle}>Login</p>

            <div className="container mx-auto flex justify-center pb-8">
                <form className={form.card} style={{ background: theme.ui }} >
                    <div className="mb-4">
                        <label className={label.small} htmlFor="email">Email</label>
                        <input className={labelInput.medium} id="email" type="text" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className={label.small} htmlFor="password">Password</label>
                        <input className={labelInput.medium} id="password" type="password" placeholder="Password" />
                    </div>
                    <div className="flex justify-between items-center">
                        <button className={btn.primary} style={{ marginTop: "12px" }} type="button" onClick={login}>Sign In</button>
                        <button className="inline-block align-baseline font-bold text-sm">Forgot Password?</button>
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