import axios from 'axios';
import React from 'react'
import { useState, useContext } from 'react';
import { cartContext } from './../context/CartContext';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function Payment() {

    const {cartID , setCartProducts,setTotalCartPrice,setNumOfCartItems} = useContext(cartContext)

async function confirmCashPayment(){
const phoneValue=document.querySelector('#phone').value;
const cityValue=document.querySelector('#city').value;
const detailsValue=document.querySelector('#details').value;

const shippingAddress={
"shippingAddress":{
    "phone":phoneValue,
    "city":cityValue,
    "details":detailsValue
}
}

try {
  const {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartID}`,shippingAddress,{
        headers:{token:localStorage.getItem('tkn')}
    })
    if (data.status == 'success'){ 
toast.success("order added successfully");
setCartProducts([]);
 setTotalCartPrice(0);
 setNumOfCartItems(0) ;
    }
    else{
        data.error("error in creating order")
    }
} catch (error) {
    console.log(error,"error");
}

}
 
async function confirmOnlinePayment(){
    const phoneValue=document.querySelector('#phone').value;
const cityValue=document.querySelector('#city').value;
const detailsValue=document.querySelector('#details').value;

const shippingAddress={
"shippingAddress":{
    "phone":phoneValue,
    "city":cityValue,
    "details":detailsValue
}
}
try {
   const {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartID}`,shippingAddress,{
    headers:{token:localStorage.getItem('tkn')},
    params:{url:`http://localhost:${window.location.port}`}
   })
   if (data.status ===  'success'){
    toast.success("order added successfully");
    setCartProducts([])
     setTotalCartPrice(0)
     setNumOfCartItems(0) 
        }
        else{
            data.error("error in creating order")
        }
   window.open(data.session.url, "_blank");
} catch (error) {
    console.log("error",error);
}
} 

  return <>
  <Helmet><title>Payment</title></Helmet>
  <div className="container my-5">
  <label htmlFor="phone">Phone:</label>
  <input id='phone' type="tel" placeholder='phone' className=' form-control mb-4' />
  <label htmlFor="city">City:</label>
  <input id='city' type="text" placeholder='city' className=' form-control mb-4' />
  <label htmlFor="details">Details:</label>
  <textarea id='details' type="text" placeholder='details' className=' form-control mb-4' />
  <button type='button' onClick={confirmCashPayment} className=' btn btn-primary'>Confirm Cash Payment</button>
  <button type='button' onClick={confirmOnlinePayment} className=' btn btn-primary'>Confirm Online Payment</button>
  </div>
  </>
}
