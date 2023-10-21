import React, { useEffect } from 'react'
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

export default function AllOrders() {
 

  const [userOrders, setUserOrders] = useState(null)
  useEffect(() => {
    const res =jwtDecode(localStorage.getItem('tkn'))
    getUserOrders(res.id);
  }, [])
  

 async function getUserOrders(id) {
  try {
  const {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`)
  setUserOrders(data);
} 
  catch (error) {
    console.log("error", error)
  }
 }
 if (userOrders===null) {
  return <div className="vh-100 d-flex justify-content-center align-items-center ">
<ThreeCircles
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
</div>
 }
 return <>
  <Helmet><title>All Orders</title></Helmet>
  
  
  <div className="container">
    <div className="row">
    {userOrders.map(function(order,idx){
 return <div key={idx} className="col-md-8  bg-primary-subtle py-3 border-bottom border-5 mb-2">
 <div className="order">

<div className="container  bg-primary-subtle py-3 border-bottom border-3 mb-2">
  <div className="row">
  {order.cartItems.map(function(item,index){
return <div key={index}  className="row g-3">
  <div className="col-md-4">
  <div>
  <img src={item.product.imageCover} className="w-50" alt={item.product.imageCover} />

</div>

</div>
<div className="col-md-4">
<div className="details">
<h6 > {item.product.title.split(" ").splice(0,2).join(" ") } </h6>
  {/* <h6>count: {item.count}</h6> */}
  <h6 className=' main-color fs-5'>{item.price } EGP</h6>
</div>
</div>  
<div className="col-md-4">
<div className="details">

</div>
</div>  
</div>

  })}
  </div>
</div>
<div className="div text-center">
<p><i class="fa-solid fa-phone main-color"></i> phone: {order.shippingAddress.phone}</p>
<p> <i class="fa-solid fa-city main-color"></i> city: {order.shippingAddress.city}</p>
<p><i class="fa-solid fa-info main-color"></i> details: {order.shippingAddress.details}</p>
<h5>Payment Method: {order.paymentMethodType}</h5>
<h5>Total Price:<span className=' main-color'> {order.totalOrderPrice} EGP</span></h5>
</div>

 </div>
</div>
})}
    </div>
  </div>
  
  </>
}
