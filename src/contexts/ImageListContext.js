import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid'
export const ImageListContext = createContext()

const ImageListContextProvider = (props) => {
    const [books, setBook] = useState([
        { title: 'name of the wind', id: 1 },
        { title: 'the way of kings', id: 2 },
        { title: 'the final empire', id: 3 },
        { title: 'the hero of ages', id: 4 },
        { title: 'name of the wind', id: 5 },
        { title: 'the way of kings', id: 6 },
        { title: 'the final empire', id: 7 },
        { title: 'the hero of ages', id: 8 }

    ])
    const addBook = (title, author) => {
        setBook([...books, { title: title, author: author, id: uuidv1() }])
    }
    const removeBook = (id) => {
        setBook(books.filter(book => book.id !== id))
    }
    return (
        <ImageListContext.Provider value={{ books }}>
            {props.children}
        </ImageListContext.Provider>
    );
}

export default ImageListContextProvider;