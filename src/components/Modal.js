import React from 'react'
import ReactDom from 'react-dom'
import { btn, MODAL_STYLES, OVERLAY_STYLES } from '../assets/style'

export default function Modal({ open, item, onClose, selTheme }) {


    const theme = selTheme.isLightTheme ? { bg: "bg-gray-300", color: "text-gray-800" } : { bg: "bg-gray-800", color: "text-white" };

    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES} className={`${theme.bg} ${theme.color}`}>
                <img src={item.url} alt={item.id} className="w-full h-full" />
                {/* <p>{item.url}</p> */}

                <div className="px-4 py-4">
                    <div className="font-bold text-xl mb-2">{item.name}</div>
                    <p className="text-base">{item.desc}</p>
                </div>
                <div className="px-4 py-4">
                    <span className="inline-block rounded-full text-sm font-semibold mr-2">Rp.{item.price}</span>
                </div>
                <div className="px-4 py-4 flex justify-end">
                    <button className={`${btn.green_rounded}`} onClick={onClose}>Close Modal</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
