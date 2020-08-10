import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { txtTitle, btn, labelInput, label, form } from '../assets/style'

const Register = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark

    return (
        <div style={{ color: theme.syntax, background: theme.bg }}>
            <p className={txtTitle}>Register</p>

            <div className="container mx-auto flex justify-center pb-8">
                <form className={form.card} style={{ background: theme.ui }}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className={label.small}>First Name</label>
                            <input className={labelInput.medium} type="text" placeholder="First Name" />
                            <p className="text-xs italic">Please fill out this field.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className={label.small}>Last Name</label>
                            <input className={labelInput.medium} type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className={label.small}>Email</label>
                            <input className={labelInput.medium} type="password" placeholder="Email" />
                            <p className="text-xs italic">Must containt `@` and `.`</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className={label.small}>Password</label>
                            <input className={labelInput.medium} type="password" placeholder="Password" />
                            <p className="text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button className={btn.primary} type="button">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;