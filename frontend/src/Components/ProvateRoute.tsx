import React from 'react'
import {FC} from "react"
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}:any) => {
  const [state,setState] = React.useState(true);
  if(!state){
    return <Navigate to="/login" replace={true} />
  }
  return children
}

export default PrivateRoute