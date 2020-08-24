import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ImageListContext } from "../contexts/ImageListContext";
import { btn, searchBar, txtTitle } from "../assets/style";
import ItemCard from "./ItemCard";
import Modal from '../components/Modal'
import { ADMIN } from '../constant/userPrevilage'

const ImageListUser = (props) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { images, loading, err } = useContext(ImageListContext);
  const theme = isLightTheme ? light : dark;

  const [isOpen, setIsOpen] = useState(false)
  const [selItm, setSelItm] = useState({})

  const onModalOpen = (item) => {
    setIsOpen(true)
    setSelItm(item)
  }
  const loginUser = props.user

  const content = (
    <>
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input id="seach_field" type="text" placeholder="search" className={`${searchBar}`} />
        <button className={`${btn.primary} ml-2`} >Search</button>
      </div>

      {loading && <p className={`${txtTitle} flex justify-center my-12`} style={{ height: "100vh" }}>Loading...</p>}
      {err && <p className={`${txtTitle} flex justify-center my-12`} style={{ height: "100vh" }}>Error please refresh the page</p>}

      <div className="grid gap-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 container mx-auto ">

        {images.filter(user => user.email === loginUser.email).map((itm) => {
          return (
            <ItemCard key={itm.id} itm={itm} theme={theme} onModalOpen={onModalOpen} userPrev={ADMIN} />
          );
        })}
      </div>
      <Modal open={isOpen} item={selItm} onClose={() => setIsOpen(false)} selTheme={{ isLightTheme }} />
    </>
  );

  return (
    /* 
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
    </div>
    */
    <div style={{ color: theme.syntax, background: theme.bg }}>
      {content}
    </div>
  );
};

export default ImageListUser;
