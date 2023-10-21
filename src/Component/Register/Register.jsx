import React, { useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';

export default function Register() {
  
    let users={
        name:"",
        email:"",
        password:"",
        rePassword:"",
        phone:""
      }
      

const [errMsg, setErrMsg] = useState(null)
const [successmsg, setSuccessmsg] = useState(null)
const navigate= useNavigate();
const [isLoading, setisLoading] = useState(false)

      async function registerNewUser(values){ 
        setisLoading(true);
        try {
          const {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
          console.log(data)
          setSuccessmsg("Successfully registered")
          setTimeout(() => {
            navigate('/Login')
          }, 1000);
          
        }
        catch(error){
          console.log(error.response.data.message)
          setErrMsg(error.response.data.message)
        } 
        setisLoading(false)

      }
      
      const formObj = useFormik({
        initialValues:users,
      
        onSubmit: registerNewUser,
        
        validate: function(values){
          setErrMsg(null)
          const errors = {}
           

          if(values.name.length<4 || values.name.length>10){
            errors.name = "Name must be between 4 and 10 characters"
          }
          if(values.email.includes('@')===false || values.email.includes('.')===false ){
            errors.email = "Invalid email"
          }
        if(!values.phone.match(/^(02)?01[0125][0-9]{8}$/)){
            errors.phone = "Invalid phone number"
            }
            if(values.password.length<6){
                          errors.password = "Password more than 6 characters"
                        }
            if(values.password!==values.rePassword){
            errors.rePassword = "Passwords do not match"
                       }





            return errors;
        }
      });
  
  return <>
  
  <div className="contact">
   <div className="container ">

     {errMsg? <div className="alert alert-danger">{errMsg}</div>:''} 
     {successmsg? <div className="alert alert-success">{successmsg}</div>:''} 

   <h2 className=' text-uppercase py-3 '>Register now..</h2>

   <form action="" className='mx-auto w-50 p-3 mt-3' onSubmit={formObj.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input onBlur={formObj.handleBlur} onChange={formObj.handleChange} value={formObj.values.name} type="text" className=' form-control py-3 mb-4' placeholder='userName ' id='name' />
      { formObj.errors.name && formObj.touched.name ? <div className="alert alert-danger">{formObj.errors.name} </div>:""}

      <label htmlFor="email">Email:</label>
      <input onBlur={formObj.handleBlur} onChange={formObj.handleChange} value={formObj.values.email} type="email" className=' form-control py-3 mb-4' placeholder='email' id='email'/>
      { formObj.errors.email && formObj.touched.email ? <div className="alert alert-danger">{formObj.errors.email} </div>:""}

      <label htmlFor="password">Password:</label>
      <input onBlur={formObj.handleBlur} onChange={formObj.handleChange} value={formObj.values.password} type="password" className=' form-control py-3 mb-4' placeholder='password' id='password'/>
      { formObj.errors.password && formObj.touched.password ? <div className="alert alert-danger">{formObj.errors.password} </div>:""}

      <label htmlFor="rePassword">RePassword:</label>
      <input onBlur={formObj.handleBlur} onChange={formObj.handleChange} value={formObj.values.rePassword} type="password" className=' form-control py-3 mb-4' placeholder='rePassword' id='rePassword'/>
      { formObj.errors.rePassword && formObj.touched.rePassword ? <div className="alert alert-danger">{formObj.errors.rePassword} </div>:""}

      <label htmlFor="phone">phone:</label>
      <input onBlur={formObj.handleBlur} onChange={formObj.handleChange} value={formObj.values.phone} type="tel" className=' form-control py-3 mb-4' placeholder='phone' id='phone'/>
      { formObj.errors.phone && formObj.touched.phone ? <div className="alert alert-danger">{formObj.errors.phone} </div>:""}

      <button type=' submit' disabled={formObj.isValid===false || formObj.dirty==false} className='btn my-4  '>
      
      {isLoading? <Bars
  height="60"
  width="60"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/> :"Regester" }
     </button>

     
    </form>
   </div>
    </div>

  
  </>
}



