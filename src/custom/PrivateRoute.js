import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom";

import { UserContext, checkLogin } from '../contexts/UserContext'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { user } = useContext(UserContext)
    const isLogin = checkLogin()

    return (
        <Route
            {...rest}
            render={routeProp => isLogin === false ?
                (
                    <Redirect to={"/Login"} />
                ) : (
                    <RouteComponent {...routeProp} />
                )
            }
        />
    )
}

export default PrivateRoute