import React, { useContext, useEffect, useRef } from "react";

import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext, ACTIONS } from '../contexts/UserContext'

import { txtTitle, labelInput, btn, form } from '../assets/style'
import { useHistory } from "react-router-dom";
import { auth } from '../script/firebaseInit'
import { TweenMax, Power3 } from 'gsap'

const Login = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { dispatchUser } = useContext(UserContext)

    const theme = isLightTheme ? light : dark
    const history = useHistory();

    let loginCon = useRef(null)

    /* on Mount */
    useEffect(() => {
        TweenMax.from(loginCon, .8, {
            opacity: 0,
            y: 20,
            ease: Power3.easeOut,
        })
    }, [])

    const navigateRegister = () => {
        history.push("/Register")
    }

    const login = async () => {
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        try {
            const cred = await auth.signInWithEmailAndPassword(email, password)
            dispatchUser({ type: ACTIONS.LOGIN, payload: cred.user.email })

            history.push("/Dashboard");
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <div style={{ color: theme.syntax, background: theme.bg, height: "85vh", minHeight: "85vh" }} >

            <div ref={el => loginCon = el} className="container mx-auto flex justify-center py-8">

                <form className={form.card} style={{ background: theme.ui }} >
                    <p className={txtTitle}>Login</p>

                    <div className="mb-4">
                        <input className={labelInput.medium} id="email" type="text" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <input className={labelInput.medium} id="password" type="password" placeholder="Password" />
                    </div>
                    <div className="flex justify-between items-center mt-10">
                        <button className={btn.primary} type="button" onClick={login}>Sign In</button>
                        <button className="font-bold text-sm">Forgot Password?</button>
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