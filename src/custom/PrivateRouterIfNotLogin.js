import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom";

import { UserContext, checkLogin } from '../contexts/UserContext'

const PrivateRouteIfNotLogin = ({ component: RouteComponent, ...rest }) => {
    const { user } = useContext(UserContext)
    const isLogin = checkLogin(user)

    return (
        <Route
            {...rest}
            render={
                routeProp => isLogin === true ?
                    (
                        <Redirect to={"/Dashboard"} />
                    ) : (
                        <RouteComponent {...routeProp} />
                    )
            }
        />
    )
}

export default PrivateRouteIfNotLogin