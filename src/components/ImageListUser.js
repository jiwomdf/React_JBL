import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ImageListContext } from "../contexts/ImageListContext";
import { btn, searchBar } from "../assets/style";

const ImageListUser = (props) => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { images } = useContext(ImageListContext);
  const theme = isLightTheme ? light : dark;

  const loginUser = props.user

  const content = (
    <>
      {/* Search Bar */}
      <div className="flex justify-center mb-8">
        <input type="text" placeholder="search" className={`${searchBar}`} />
        <button className={`${btn.primary} ml-2`}>Search</button>
      </div>

      <div className="grid gap-2 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 container mx-auto ">

        {images.filter(user => user.email === loginUser.email).map((itm) => {
          return (
            <div
              key={itm.id}
              style={{ background: theme.ui }}
              className="max-w-sm rounded overflow-hidden shadow-lg m-6"
            >

              <img
                src={itm.url}
                alt={itm.id}
                className="w-full h-full"
              />

              <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2">Rp. 25000</span>
              </div>
              <div className="px-4 py-4">
                <button className={`${btn.primary_rounded} mx-1`}>Detail</button>
                <button className={`${btn.green_rounded} mx-1`}>Edit</button>
                <button className={`${btn.red_rounded} mx-1`}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  return (
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
  );
};

export default ImageListUser;
