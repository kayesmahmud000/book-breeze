import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({children}) => {
    const {users ,loading}=useContext(AuthContext)
    const location=useLocation()

    if(loading){
        return <LoadingPage></LoadingPage>
    }
    if(users && users?.email){
        return children
    }
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>
};
