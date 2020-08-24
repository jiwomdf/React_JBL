import React from 'react'
import { btn } from "../assets/style";

export default function ItemCard({ itm, theme, onModalOpen }) {
    return (
        <div style={{ background: theme.ui }} className="relative max-w-sm rounded shadow-lg m-4">

            <div className="w-full" style={{ width: "auto", height: "150px", overflow: "hidden" }}>
                <img src={itm.url} alt={itm.id} className="w-full" />
            </div>

            <div className="px-6 py-4 h-56" >
                <div className="font-bold text-xl mb-2">{itm.name}</div>
                <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700  mb-2">Rp.{itm.price}</span>
                <p className="text-base">{itm.desc}</p>
            </div>
            <div className="pr-2 pb-2 float-right" style={{ position: "absolute", bottom: "0", right: "0" }}>
                <button className={btn.primary_rounded} onClick={() => onModalOpen(itm)}>Detail</button>
                <button className={`${btn.green_rounded} mx-1`}>Edit</button>
                <button className={`${btn.red_rounded} mx-1`}>Delete</button>
            </div>
        </div>
    )
}
