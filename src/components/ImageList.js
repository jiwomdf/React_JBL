import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ImageListContext } from "../contexts/ImageListContext";
import { btn, searchBar } from "../assets/style";
import Modal from '../components/Modal'

const ImageList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { images } = useContext(ImageListContext);

  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState([])
  const [selItm, setSelItm] = useState({})

  const theme = isLightTheme ? light : dark;

  useEffect(() => {

    setItems(images)
  }, [images])

  const onModalOpen = (item) => {
    setIsOpen(true)
    setSelItm(item)
  }

  const searchClick = () => {
    const searchItm = document.getElementById("seach_field").value
      .toLowerCase()
      .trim()

    setItems(images.filter(itm => itm.name.toLowerCase().includes(searchItm)))
  }

  const content = (
    <>
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input id="seach_field" type="text" placeholder="search" className={`${searchBar}`} />
        <button className={`${btn.primary} ml-2`} onClick={searchClick} >Search</button>
      </div>

      <div className="grid gap-2 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 container mx-auto ">

        {items.map((itm) => {
          return (
            <div key={itm.id} style={{ background: theme.ui }} className="max-w-sm rounded overflow-hidden shadow-lg m-6">
              <img src={itm.url} alt={itm.id} className="w-full h-full" />

              <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">{itm.name}</div>
                <p className="text-base">{itm.desc}</p>
              </div>
              <div className="px-4 py-4">
                <button className={btn.primary_rounded} onClick={() => onModalOpen(itm)}>Detail</button>
                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Rp. {itm.price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Modal open={isOpen} item={selItm} onClose={() => setIsOpen(false)} selTheme={{ isLightTheme }} />
    </>
  );

  return (
    /* Responsive Content
    <div>
      {images.length <= 4 ?
        (
          <div style={{ color: theme.syntax, background: theme.bg, height: "100vh", minHeight: "100vh", }}>
            {content}
          </div>
        ) : (
          <div style={{ color: theme.syntax, background: theme.bg, height: "100%" }}>
            {content}
          </div>
        )}
    </div> */


    <div style={{ color: theme.syntax, background: theme.bg, height: "100%" }}>
      {content}
    </div>
  );
};

export default ImageList;
