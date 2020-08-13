import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { ImageListContext } from "../contexts/ImageListContext";
import { btn, txtTitle, searchBar } from "../assets/style";

/* class BookList extends Component {
    static contextType = ThemeContext
    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark
        return (
            <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>the way of king</li>
                    <li style={{ background: theme.ui }}>the name of the wind</li>
                    <li style={{ background: theme.ui }}>the final empire</li>
                </ul>
            </div>
        );
    }
} */

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(ImageListContext);
  const theme = isLightTheme ? light : dark;
  const content = (
    <>
      <p className={`${txtTitle} text-center hidden md:flex`}>
        Welcome to JBL Store
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mt-2 mb-8">
        <input type="text" placeholder="search" className={searchBar} style={{ width: 500 }} />
        <button className={`${btn.primary} ml-2`}>Search</button>
      </div>


      <div className="grid gap-2 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 container mx-auto" style={{ background: theme.con, borderRadius: 10 }}>
        {books.map((book) => {
          return (
            <div
              key={book.id}
              style={{ background: theme.ui }}
              className="max-w-sm rounded overflow-hidden shadow-lg m-6"
            >
              <img
                src="https://source.unsplash.com/random/250x150"
                alt={book.id}
                className="w-full h-full"
              />

              <div className="px-4 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="px-4 py-4">
                <button className={btn.primary_rounded}>Detail</button>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  Rp. 25000
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  return (
    <div>
      {books.length <= 4 ? (
        <div
          style={{
            color: theme.syntax,
            background: theme.bg,
            height: "100vh",
            minHeight: "100vh",
          }}
        >
          {content}
        </div>
      ) : (
          <div
            style={{ color: theme.syntax, background: theme.bg, height: "100%" }}
          >
            {content}
          </div>
        )}
    </div>
  );
};

export default BookList;
