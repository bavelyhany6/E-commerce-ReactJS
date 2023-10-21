import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from './../context/authen';

export default function ProtectedRoute({children}) {
  
  
  
  const {token} =useContext(authContext);


  if ( token===null ){
  return  <Navigate to="/Login"></Navigate>  }
  
  return<>
  
  {children}
  
  </>
}
