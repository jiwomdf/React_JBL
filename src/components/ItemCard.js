import React, { useEffect, useRef } from "react";
import { btn } from "../assets/style";
import { TweenMax, Power3 } from 'gsap'

export default function ItemCard({ itm, theme, onModalOpen, userPrev }) {

    let cardCon = useRef(null)

    /* on Mount */
    useEffect(() => {
        TweenMax.from(cardCon, .8, {
            opacity: 0,
            y: 20,
            ease: Power3.easeOut,
        })
    }, [])

    return (
        <div ref={el => cardCon = el} style={{ background: theme.ui }} className="relative max-w-sm rounded shadow-lg m-4">

            <div className="w-full" style={{ width: "auto", height: "150px", overflow: "hidden" }}>
                <img src={itm.url} alt={itm.id} className="w-full" />
            </div>

            <div className="px-6 pt-4 h-40" >
                <div className="font-bold text-xl mb-2">{itm.name}</div>
                <p className="text-base">{itm.desc.length > 90 ? `${itm.desc.substring(0, 90)}...` : itm.desc}</p>
            </div>
            <div className="pl-4 pb-1">
                <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700  mb-2">Rp.{itm.price}</span>
            </div>
            <div className="pr-2 pb-2 float-right" style={{ position: "relative", bottom: "0", right: "0" }}>
                {userPrev.includes(1) && <button className={btn.primary_rounded} onClick={() => onModalOpen(itm)}>Detail</button>}
                {userPrev.includes(2) && <button className={`${btn.green_rounded} mx-1`}>Edit</button>}
                {userPrev.includes(3) && <button className={`${btn.red_rounded} mx-1`}>Delete</button>}
            </div>
        </div>
    )
}
