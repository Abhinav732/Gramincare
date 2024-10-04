import React from 'react'
import Header from 'C:/Users/singh/OneDrive/Desktop/Health Clinic/frontend/src/components/Header/Header.js';
import './style.css';

function Navbar() {
  return (
    <div className='containerr'>
         <div className='logo'>
            <a href='#'>
                <img src="https://res.cloudinary.com/dyevz7hnp/image/upload/v1722363255/gramin_hd_hx1rkg.png" alt="MCare" className='icon-logo'/>
            </a>
         </div>
         <Header/>
         
         <div className='btn'>
            <button class="emg-btn">Emergency</button>
         </div>

        
    </div>
  )
}

export default Navbar