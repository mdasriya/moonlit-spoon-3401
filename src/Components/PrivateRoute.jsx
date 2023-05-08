import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuth = useSelector((store) => store.authReducer.isAuth)
    const location = useLocation();
    // console.log(location);
  return (
    isAuth ? children : <Navigate state={location.pathname} to={"/login"} />
    //location.pathname give you previous location and after login you can redirect to this state
  )
}

export default PrivateRoute