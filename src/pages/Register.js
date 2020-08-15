import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { txtTitle, btn, labelInput, form } from '../assets/style'
import { auth } from '../script/firebaseInit'
import { useHistory } from "react-router-dom";

const Register = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark
    const history = useHistory();

    const register = async () => {

        const email = document.getElementById("form_email").value
        const password = document.getElementById("form_password").value

        const cred = await auth.createUserWithEmailAndPassword(email, password)

        console.log(cred.user)
        history.push("/Dashboard");
    }

    return (
        <div style={{ color: theme.syntax, background: theme.bg, height: "85vh", minHeight: "85vh" }}>
            <div className="container mx-auto flex justify-center py-2">
                <div className={form.card} style={{ background: theme.ui }}>
                    <p className={txtTitle}>Register</p>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <input className={labelInput.medium} type="text" placeholder="First Name" />
                            <p className="text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <input className={labelInput.medium} type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <input className={labelInput.medium} placeholder="Email" id="form_email" />
                            <p className="text-xs italic">Must containt `@` and `.`</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <input className={labelInput.medium} type="password" placeholder="Password" id="form_password" />
                            <p className="text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button className={btn.primary} type="button" onClick={register}>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;