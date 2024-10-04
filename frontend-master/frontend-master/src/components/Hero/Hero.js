import React from 'react'
import './hero.css';
import Login from 'C:/Users/singh/OneDrive/Desktop/Health Clinic/frontend/src/components/Login_Card/login.js';

function Hero() {
  return (
    <div className='containe'>

     <div className='upper-container'>
           <div className='head-con'>
            <h1 className='heading'>Bringing Quality Healthcare</h1>
           </div>
           <div className='tagline-con flex'>
           <p className='tagline'>Providing Compassionate and Accessible <br/>Healthcare to <span className='tg'>Every Home </span></p>
           </div>

     </div>
     <div className='lower-container'>

<div className='left'>
<img src="https://res.cloudinary.com/dyevz7hnp/image/upload/v1721670782/one-removebg-preview_pivgwq.png" className='bg-img-one'/>
</div>
<div className='middle'>
    <Login />
</div>
<div className='right'>
<img src="https://res.cloudinary.com/dyevz7hnp/image/upload/v1721670604/80c49beb61b44f0d07bf79099e2d8e8a-removebg-preview_v9fmp9.png" className='bg-img-one'/>
</div>


     </div>


    </div>
  )
}


export default Hero