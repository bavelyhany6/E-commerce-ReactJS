import React from 'react'

export default function Footer() {
  return <>
  
 <footer className='  bg-body-secondry bg-body-secondary py-2'>
 <div className="container my-5">
 <h5>Get the Freshcart app</h5>
  <p className=' text-muted'>We will send you a link,open it on your phone to download the app</p>
  <div className="row">
    <div className="col-md-9">
        <div className="left">
        <input type="email" placeholder='Email..' className='w-100 mb-5'/>
        <h6>Payment Partners</h6>
        </div>
    </div>
    <div className="col-md-3">
        <div className="right">
        <button className='btn btn-success'>Share App Link</button>

        </div>
    </div>
  </div>
  
 </div>
 </footer>
  
  </>
}
