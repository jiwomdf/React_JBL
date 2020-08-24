import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ImageListContext } from "../contexts/ImageListContext";
import { btn, searchBar, txtTitle } from "../assets/style";
import Modal from '../components/Modal'
import ItemCard from "./ItemCard";

const ImageList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { images, loading, err } = useContext(ImageListContext);

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

      {loading && <p className={`${txtTitle} flex justify-center my-12`}>Loading</p>}
      {err && <h1>Error</h1>}


      <div className="grid gap-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 container mx-auto ">
        {items.map((itm) => {
          return (
            <ItemCard key={itm.id} itm={itm} theme={theme} onModalOpen={onModalOpen} />
          );
        })}
      </div>
      <Modal open={isOpen} item={selItm} onClose={() => setIsOpen(false)} selTheme={{ isLightTheme }} />
    </>
  );

  return (
    /*<div>
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
    </div>*/
    <div style={{ color: theme.syntax, background: theme.bg }}>
      {content}
    </div>
  );
};

export default ImageList;
