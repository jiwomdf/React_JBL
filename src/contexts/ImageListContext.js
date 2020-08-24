import React, { createContext, useReducer, useEffect } from 'react';
import { db, storage } from '../script/firebaseInit'
import { v4 } from 'uuid'

export const ImageListContext = createContext()

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    SET_DATA: 'set-data',
    ERROR: 'error'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, images: [] }
        case ACTIONS.SET_DATA:
            return { ...state, loading: false, images: action.payload.images }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, images: [] }
        default:
            return state
    }
}

const ImageListContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { loading: true, images: [] })

    useEffect(() => {

        let didCancel = false;

        fetchFirebase(didCancel, dispatch)

        return () => {
            didCancel = true
        }

    }, [])

    return (
        <ImageListContext.Provider value={{ ...state }}>
            {props.children}
        </ImageListContext.Provider>
    );
}

async function fetchFirebase(didCancel, dispatch) {
    dispatch({ type: ACTIONS.MAKE_REQUEST })

    try {
        const retVal = await db.collection("items").get()

        let arrData = []
        if (!didCancel) {

            retVal.forEach(async (doc) => {
                const url = await storage.child('uploads/' + doc.data().fileName).getDownloadURL()
                arrData.push({ ...doc.data(), id: v4(), url: url })
                dispatch({ type: ACTIONS.SET_DATA, payload: { images: arrData } })
            })
        }

    }
    catch (err) {
        dispatch({ type: ACTIONS.ERROR, payload: { error: err } })
    }
}

export default ImageListContextProvider;