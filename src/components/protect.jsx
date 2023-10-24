// import React from 'react'
// import { Route, redirect, Navigate } from "react-router-dom";

// function Protect({ component: Component, ...restProps }) {
//     const isAuth = localStorage.getItem('token');
//     return (
//         <Route {...restProps} render={(props) => {
//             return isAuth ? <Component {...props} /> : <Navigate to='/login' />
//         }} />
//     )
// }

// export default Protect
import {Outlet, Navigate} from 'react-router-dom';

export const Protect = ({ children, path }) => {
    const isAuth = localStorage.getItem('token'); // your logic here

    return isAuth ? children : <Navigate to="/login" />;
}
