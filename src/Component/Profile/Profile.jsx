import jwtDecode from 'jwt-decode'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Profile() {
  
const [name, setName] = useState(null)

  useEffect(()=>{
    const x=  jwtDecode(localStorage.getItem('tkn'))
     setName(x.name);
  },[]);
if (name===null){
  return <h1>lodaing</h1>
}
  return <>
    <Helmet><title>Profile</title></Helmet>
<div className="div  vh-100">
<h1 className=' text-uppercase text-center'>hello {name}</h1>

  </div>  
  </>
}
