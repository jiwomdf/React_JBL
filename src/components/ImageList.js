import React, { useContext, useState, useEffect, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ImageListContext } from "../contexts/ImageListContext";
import { btn, searchBar, txtTitle } from "../assets/style";
import Modal from '../components/Modal'
import ItemCard from "./ItemCard";
import { VISITOR } from '../constant/userPrevilage'

const ImageList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { images, loading, err } = useContext(ImageListContext);

  let seachInpt = useRef(null)

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
    const searchItm = seachInpt.value
      .toLowerCase()
      .trim()

    setItems(images.filter(itm => itm.name.toLowerCase().includes(searchItm)))
  }

  const content = (
    <>
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input ref={el => seachInpt = el} type="text" placeholder="search" className={`${searchBar} opacity-1`} />
        <button className={`${btn.primary} ml-2 opacity-1`} onClick={searchClick} >Search</button>
      </div>

      {loading && <p className={`${txtTitle} flex justify-center my-12`} style={{ height: "100vh" }}>Loading...</p>}
      {err && <p className={`${txtTitle} flex justify-center my-12`} style={{ height: "100vh" }}>Error please refresh the page</p>}

      <div className="grid gap-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 container mx-auto" >
        {items.map((itm) => {
          return (
            <ItemCard key={itm.id} itm={itm} theme={theme} onModalOpen={onModalOpen} userPrev={VISITOR} />
          );
        })}
      </div>
      <Modal open={isOpen} item={selItm} onClose={() => setIsOpen(false)} selTheme={{ isLightTheme }} />
    </>
  );

  return (
    <div style={{ color: theme.syntax, background: theme.bg }}>
      {content}
    </div>
  );
};

export default ImageList;
