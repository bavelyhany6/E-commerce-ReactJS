import React, { Component, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { authContext } from './../context/authen';
import Cart from './../Cart/Cart';
import { cartContext } from './../context/CartContext';
import Profile from './../Profile/Profile';

export default function Navbar1() {
  
   const {token, settoken} =  useContext(authContext)
   const {numOfCartItems}= useContext(cartContext)

   
const navFunc =useNavigate();

  function logOut(){
    localStorage.removeItem('tkn')
    settoken(null)
    navFunc('/login')
  }
  return <>
   
   

 <nav className="navbar navbar-expand-lg py-4 ">
  <div className="container">
    <Link className="navbar-brand text-black fw-bolder" to="/Products">
        <img src={require("../Images/FreshCart.jpeg")}className=' w-75'  alt="FreshCart" />

        </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        {token? <>
          <li className="nav-item">
          <Link className="nav-link text-black text-uppercase fw-bolder" to="/Products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black text-uppercase fw-bolder" to="/Catigory" >Catigory</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black text-uppercase fw-bolder" to="/Brands" >Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-black text-uppercase fw-bolder" to="/AllOrders" >All Orders</Link>
        </li>
        </>:""}
      
        
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {token? <>
            <li className="nav-item me-2">
          <Link className="nav-link text-black text-uppercase fw-bolder position-relative" to="/Cart" ><i class="fa-solid fa-cart-shopping main-color"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {numOfCartItems}
    <span class="visually-hidden">unread messages</span>
  </span>
   </Link>
        </li>
            <li className="nav-item me-2">
          <Link className="nav-link text-black text-uppercase fw-bolder" to="/Profile" ><i class="fa-solid fa-user main-color"></i></Link>
        </li>
          
        <li className="nav-item">
          <span onClick={ logOut} style={{cursor:'pointer'}} className="nav-link text-black text-uppercase fw-bolder" to="/portfolio"><i class="fa-solid fa-right-from-bracket main-color"></i></span>
        </li>
          
          </>:<>
          <li className="nav-item">
          <Link className="nav-link text-black text-uppercase fw-bolder" to="/Register" >Register</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-black text-uppercase fw-bolder" to="/Login" >Login</Link>
        </li>
        </>}
        
         
        
       
        
      </ul>
    </div>
  </div>
</nav> 
  </>
}
