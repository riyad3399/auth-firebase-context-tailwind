import React, { useContext } from 'react';
import { UserContext } from '../Providers/AuthProviders';


const Home = () => {

    const user = useContext(UserContext)
    return (
        <div>
            <h3>this is home page {user && <span>{user.displayName}</span>} </h3>
        </div>
    );
};

export default Home;