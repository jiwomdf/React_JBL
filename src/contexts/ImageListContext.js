import React, { createContext, useState, useEffect } from 'react';
import { db, storage } from '../script/firebaseInit'
import { v4 } from 'uuid'

export const ImageListContext = createContext()

const ImageListContextProvider = (props) => {
    const [images, addImages] = useState([])

    useEffect(() => {

        let didCancel = false;

        async function fetchFirebase() {
            const data = await db.collection("items").get()

            if (!didCancel) {

                data.forEach(async (doc) => {
                    const url = await storage.child('uploads/' + doc.data().fileName).getDownloadURL()

                    addImages(prevData => prevData.concat({ ...doc.data(), id: v4(), url: url }))
                })

            }
        }

        fetchFirebase()

        return () => didCancel = true

    }, [])

    return (
        <ImageListContext.Provider value={{ images }}>
            {props.children}
        </ImageListContext.Provider>
    );
}

export default ImageListContextProvider;