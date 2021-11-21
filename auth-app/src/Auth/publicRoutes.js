import React from 'react';
import { Route, Navigate } from 'react-router-dom';
const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    // const userInfo = JSON.parse(localStorage.getItem('user'))
    const isLogedIn = true;


    return (
        <Route {...rest} render={props => (
            isLogedIn && restricted ?
                <Navigate to="/home" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;