import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from './helpers/helperRoutes';

const PrivateRoute = ({children}) => {
    const { isAuth } = useSelector((state) => state.login);
    const {pathname} = useLocation()
    const { shippingData } = useSelector((state) => state.shipping);

    if (!isAuth) return <Navigate to={routes.login}/>;
    
    if(isAuth && pathname === '/orders'){
        if(shippingData !== null){
            if(shippingData.yourData ||  shippingData.result.clientId === '1'){
                return <Navigate to={routes.home}/>
            }
        }
    }
    return children;
}

export default PrivateRoute;