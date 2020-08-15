import React, { createContext, useEffect, useReducer } from "react"
import { auth } from '../script/firebaseInit'

export const UserContext = createContext();

/* auth.onAuthStateChanged(user => {
    if (user) {

    } else {

    }
}) */

export const ACTIONS = {
    LOGIN: 'login',
    LOGOUT: 'logout'
}

function reducer(user, action) {
    switch (action.type) {
        case ACTIONS.LOGIN: {
            localStorage.setItem('auth', action.payload);
            return { ...user, email: action.payload }
        }
        case ACTIONS.LOGOUT: {
            localStorage.removeItem('auth');
            return { ...user, email: null }
        }
        default: {
            console.log(action)
            console.log("UserContext Action Invalid")
            return
        }
    }
}

const UserContextProvider = (props) => {
    const [user, dispatchUser] = useReducer(reducer, {
        email: null
    })

    /* useEffect(() => {
        // console.log("Before.. ", user)
        // user.email = localStorage.getItem('auth') ? localStorage.getItem('auth') : null;
        // console.log("After.. ", user)
    }, [user]) */

    return (
        <UserContext.Provider value={{ user, dispatchUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export const checkLogin = (user) => {

    const emailInStrg = localStorage.getItem('auth')

    user.email = emailInStrg ? emailInStrg : null

    return emailInStrg ? true : false
}

export default UserContextProvider
