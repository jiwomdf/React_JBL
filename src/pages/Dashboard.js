import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Dashboard = () => {

    const { email } = useContext(UserContext)

    return (
        <div>
            Dasboard
            <br />
            <div>Welcome {email} </div>
        </div>
    );
};

export default Dashboard;
