import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { txtTitle, btn, labelInput, label, form } from '../assets/style'

const Postitem = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark

    return (
        <div style={{ color: theme.syntax, background: theme.bg }}>
            <p className={txtTitle}>Post Item</p>

            <div className="container mx-auto flex justify-center pb-8">
                <form className={form.card} style={{ background: theme.ui }}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className={label.small}>Photo</label>
                            <input className={`${labelInput.medium}`} type="file" />
                            <p className="text-xs italic">File extension must be an '.jpg' '.png' '.jpeg'.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className={label.small}>Item Name</label>
                            <input className={labelInput.medium} type="password" placeholder="Item Name" />
                            <p className="text-xs italic">Minimum length is 3 and maximum length is 15</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className={label.small}>Item Price</label>
                            <div className="flex items-center">
                                <p className="mr-2">Rp.</p>
                                <input className={labelInput.medium} type="number" placeholder="Item price in Rupiah" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className={label.small}>Description</label>
                            <textarea className={labelInput.medium} type="textarea" placeholder="Description" />
                            <p className="text-xs italic">Maximum length is 200</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button className={btn.primary} type="button">Post Item</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Postitem;