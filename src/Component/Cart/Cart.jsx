import React, { useContext } from 'react'
import { cartContext } from './../context/CartContext';
import { ThreeCircles } from 'react-loader-spinner';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Cart() {
  
 const{removeCartData,cartProducts,totalcartPrice,numOfCartItems,deleteCartProduct ,updateCount}= useContext(cartContext)

async function updateItemCount(id,count){
   const res=await updateCount(id,count);
   if(res.status==="success"){
    toast.success("Updated Successfully")
   }
   else{
    toast.error("error happened")

   }
 }


async function deleteElement(id){
  const res= await deleteCartProduct(id);
  if ( res.status === "success" ){
    toast.success("Product deleted successfully")
}
else{
    toast.error("Error occurred while deleting");
}}

async function deleteCart(){
   await removeCartData()
}

 if (cartProducts===null){
  return  <div className=' d-flex align-items-center justify-content-center vh-100'>
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
if(cartProducts.length === 0){
    return<>
    <div className="text-center  d-flex align-items-center justify-content-center vh-100">
    <h1>No data found <Link to="/Products" className=' pointer-event text-danger'>Get some products</Link></h1>

    </div>
</>
}


  return <>
<Helmet><title>Cart</title></Helmet>
  <div className="container py-5  bg-body-tertiary">
  <h1>Shop Cart:</h1>
  <h5 className=' main-color'>total price: {totalcartPrice} </h5>
  <h5>total Items: {numOfCartItems} </h5>
 <div className="d-flex justify-content-between">

 <button onClick={deleteCart} className='btn btn-outline-danger'>Remove Cart</button>
  <Link to="/Payment" className='btn btn-primary'>Payment</Link>
 </div>
  
  {cartProducts.map(function(product){
    return  <div className="row my-5 border-3 pb-4 border-bottom">
    <div className="col-md-1">
        <img className='w-100' src={product.product.imageCover} alt="" />
    </div>
    <div className="col-md-9">
        <h5>{product.product.title}</h5>
        <h6>Price: {product.price} EGP</h6>
        <button onClick={ ()=> deleteElement(product.product.id)} className='btn btn-outline-danger'>Remove</button>
    </div>
    <div className="col-md-2 d-flex align-items-center">
        <button onClick={()=>updateItemCount(product.product.id,product.count+1)} className='btn btn-outline-info py-1  mx-2'>+</button>
        <span>{product.count}</span>
        <button onClick={()=>updateItemCount(product.product.id,product.count-1)} className='btn btn-outline-info py-1  mx-2'>-</button>
    </div>
  </div>
  }
  )
  }
  
 
  </div>
  </>
}
