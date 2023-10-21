import axios from 'axios'
import React from 'react'
import { useEffect, useState, useContext } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import HomeSlider from '../HomeSlider/HomeSlider';
import CategorySlider from './../CategorySlider/CategorySlider';
import { Link } from 'react-router-dom';
import { cartContext } from './../context/CartContext';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function Products() {

const {addProductToCart}=useContext(cartContext)

async function addProduct(id){
 const res= await addProductToCart(id);
console.log("product ress",res);
if(res.status==="success"){
  console.log("Product added successfully")
  toast.success(res.message,{

  });
  
}
else{
  toast.error("error adding product")
}
}


  function getAllProducts(){
    return  axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

const {data, isLoading}=useQuery("allProducts",getAllProducts)
  

  if(isLoading===true){
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
<Helmet><title>Brands</title></Helmet>
<div className="container my-5">
  <div className="row g-4">
    {data?.data.data.map(function(product,idx) {
     return <div key={idx} className="col-md-4">
     <Link to={`/ProductDetails/${product.id}`}>
     <div className="product">
        <img src={product.imageCover} className="w-100" alt="product" />
        <p className='main-color mt-1'>{product.category.name}</p>
        <h6>{product.title.split(' ').slice(0,2).join(' ')}</h6>
       <div className="div d-flex justify-content-between align-items-center">
       <p>{product.price} EGP</p>
        <p><span> <i className="fa-solid fa-star main-color"></i> </span> {product.ratingsAverage}</p>
       </div>

      </div>
     
     </Link>
     <button onClick={()=> addProduct(product.id)} className=' btn w-100 border-white text-white main-bg-color'>+ Add to Cart</button>

     </div>
    })}
  </div>
</div>





  
  
  </>
}
