import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import LoadingPage from '../Pages/LoadingPage';
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user ,loader}=useContext(AuthContext)
    const location=useLocation()

    if(loader){
        return <LoadingPage></LoadingPage>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>
};
export default PrivateRoute