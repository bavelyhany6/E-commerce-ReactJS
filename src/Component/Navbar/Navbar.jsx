// import React, { Component, useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { authContext } from './../context/authen';

// export default function Navbar() {
  
//  const {token} =useContext(authContext);

//  console.log(token)

//     return <>
// <nav className="navbar navbar-expand-lg py-4 ">
//   <div className="container">
//     <Link className="navbar-brand  text-black fw-bolder" to="/home">START FRAMEWORK</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
//         {token? "":<>
//           <li className="nav-item">
//           <Link className="nav-link text-black text-uppercase fw-bolder" to="/Products">Products</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-black text-uppercase fw-bolder" to="/Catigory" >Catigory</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-black text-uppercase fw-bolder" to="/Brands" >Brands</Link>
//         </li></>}
      
        
//       </ul>
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

//         {token?<>
//           <li className="nav-item">
//           <Link className="nav-link text-black text-uppercase fw-bolder" to="/Compare" >Profile</Link>
//         </li>
//         <li className="nav-item">
//           <span className="nav-link text-black text-uppercase fw-bolder" to="/portfolio">LogOut</span>
//         </li></>:<>
//         <li className="nav-item">
//           <Link className="nav-link text-black text-uppercase fw-bolder" to="/Register" >Register</Link>
//         </li>
        
//         <li className="nav-item">
//           <Link className="nav-link text-black text-uppercase fw-bolder" to="/Login" >Login</Link>
//         </li>
        
//         </> }
      
        
       
        
//       </ul>
//     </div>
//   </div>
// </nav>    
    
    
    
//     </>
//   }
















