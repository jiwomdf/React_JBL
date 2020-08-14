import React, { createContext, useState, useEffect } from "react"

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState({
        email: ""
    })

    useEffect(() => {
        console.log("Login.. ", user)
    }, [user])

    function updateUser(email) {
        setUser(prevUser => {
            return { ...prevUser, email: email }
        })
    }

    return (
        <UserContext.Provider value={{ ...user, updateUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
