import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function HomeSlider() {
  
        const settings = {
          dots: true,
          infinite: true,
          speed: 200,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        };
  
  return<>
   <div>
        <Slider {...settings}>
          <div>
           <img style={{width:"100%", height:"300px"}} src={require("../Images/WhatsApp Image 2023-10-20 at 8.40.28 PM (1).jpeg")} alt="" />
          </div>
          <div>
           <img style={{width:"100% ", height:"300px"}} src={require("../Images/WhatsApp Image 2023-10-20 at 8.40.29 PM.jpeg")} alt="" />
          </div>
          <div>
           <img style={{width:"100%", height:"300px"}} src={require("../Images/WhatsApp Image 2023-10-20 at 8.40.28 PM.jpeg")} alt="" />
          </div>
          
        </Slider>
      </div>
  
  
  </>
}
