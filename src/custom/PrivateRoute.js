import React, { useContext } from 'react'
import { Route, Redirect } from "react-router-dom";

import { UserContext } from '../contexts/UserContext'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { email } = useContext(UserContext)

    return (
        <Route
            {...rest}
            render={routeProp => email !== "" ?
                (
                    <RouteComponent {...routeProp} />
                ) : (
                    <Redirect to={"/Login"} />
                )
            }
        />
    )
}

export default PrivateRoute