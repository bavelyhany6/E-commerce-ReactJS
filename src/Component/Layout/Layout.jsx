import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer';
import Navbar from './../Navbar/Navbar';
import Navbar1 from './../Navbar1/Navbar1';

export default function Layout() {
  return <>
     <Navbar1/>

  <Outlet/>
  
  <Footer/>
  </>
}
