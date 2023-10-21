import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { useQuery } from 'react-query';
import { Rings } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

export default function CategorySlider() {
 

function Allcategory() {
   return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
}
const {data,isLoading}=useQuery("category", Allcategory, {
    refetchOnMount:false,
})

if(isLoading) {
return <Rings
height="80"
width="80"
color="#4fa94d"
radius="6"
wrapperStyle={{}}
wrapperClass=""
visible={true}
ariaLabel="rings-loading"
/>
}


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        arrows:false
      };
 
 
 return <>
 <Helmet><title>Categories</title></Helmet>
 <h2 className='mb-3 text-center text-uppercase'>categories</h2>
  <div className='mb-5'>
        <Slider {...settings}>
         {data?.data.data.map(function (category,idx) { 
            return <div key={idx}>
         <img style={{width:"100% ", height:"200px"}} src={category.image} alt="" />
         <h6 className='mt-2'>{category.name}</h6>
        </div>
}) }
          
         </Slider>
         </div>
  
  
  
  </>
}
