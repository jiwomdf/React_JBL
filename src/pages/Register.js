import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { txtTitle, btn, labelInput, label, form } from '../assets/style'

const Register = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark

    return (
        <div style={{ color: theme.syntax, background: theme.bg, height: "100vh", minHeight: "100vh" }}>
            <p className={txtTitle}>Register</p>

            <div className="container mx-auto flex justify-center pb-8">
                <form class={form.card} style={{ background: theme.ui }}>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class={label.small} for="grid-first-name">First Name</label>
                            <input class={labelInput.medium} id="grid-first-name" type="text" placeholder="First Name" />
                            <p class="text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class={label.small} for="grid-last-name">Last Name</label>
                            <input class={labelInput.medium} id="grid-last-name" type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class={label.small} for="grid-password">Email</label>
                            <input class={labelInput.medium} id="grid-password" type="password" placeholder="Email" />
                            <p class="text-xs italic">Must containt `@` and `.`</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                            <label class={label.small} for="grid-password">Password</label>
                            <input class={labelInput.medium} id="grid-password" type="password" placeholder="Password" />
                            <p class="text-xs italic">Make it as long and as crazy as you'd like</p>
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