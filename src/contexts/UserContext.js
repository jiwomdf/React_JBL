import React, { createContext, useEffect, useReducer } from "react"

export const UserContext = createContext();

export const ACTIONS = {
    LOGIN: 'login',
    LOGOUT: 'logout'
}


function reducer(user, action) {
    switch (action.type) {
        case ACTIONS.LOGIN: {
            localStorage.setItem('auth', action.payload);
            return
        }
        case ACTIONS.LOGOUT: {
            localStorage.removeItem('auth');
            return
        }
        default: {
            console.log(action)
            console.log("UserContext Action Invalid")
            return
        }

    }
}

const UserContextProvider = (props) => {
    const [user, dispatch] = useReducer(reducer, {
        email: null
    })

    useEffect(() => {
        // console.log("Before.. ", user)
        // user.email = localStorage.getItem('auth') ? localStorage.getItem('auth') : null;
        // console.log("After.. ", user)
    }, [user])

    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {props.children}
        </UserContext.Provider>
    )
}

export const checkLogin = () => localStorage.getItem('auth') ? true : false;

export default UserContextProvider
