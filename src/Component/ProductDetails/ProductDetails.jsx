import axios from 'axios';
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ThreeCircles, Bars } from 'react-loader-spinner';
import { cartContext } from './../context/CartContext';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function ProductDetails() {
  
const {id}= useParams();
const {addProductToCart}= useContext(cartContext)
const [sendingLoader, setsendingLoader] = useState(false)

async function addProduct(id){
  setsendingLoader(true)
const res= await addProductToCart(id);
if(res.status==="success"){
  console.log("Product added successfully")
  toast.success(res.message,{

  });
  
}
else{
  toast.error("error adding product")
}
setsendingLoader(false)

}


  function getProductDetails(){
   return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  
  const {data,isLoading}=useQuery("productDetails",getProductDetails)

if(isLoading){
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
  
  
  return<>
<div className="container p-4">
    <div className="row align-items-center">
        <div className="col-md-3">
            <figure>
                <img className='w-100' src={data.data.data.imageCover} alt={data.data.data.title} />
            </figure>
        </div>
        <div className="col-md-9">
          <Helmet>
            <title>{data.data.data.title.split(" ").splice(0,2).join(" ")}</title>
          </Helmet>
            <div className="details text-center">
              <h1>{data.data.data.title}</h1>
              <p className=' text-muted'>{data.data.data.description}</p>
              <h5>{data.data.data.price} EGP</h5>
              <button onClick={()=>addProduct(data.data.data.id)} className=' btn w-100 border-white text-white main-bg-color text-center'>
                
                {
                  sendingLoader?<Bars
                  height="30"
                  width="30"
                  color="#fff"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                /> :"+ Add to Cart"
                }
                
                
                </button>
            </div>
        </div>
    </div>
</div>



  </>
}
