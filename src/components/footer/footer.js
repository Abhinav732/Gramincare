import React from 'react';
import './footer.css';
function footer() {
  return (
    <div className='footer-container'>
        
<div className='logo'>
            <a href='#'>
                <img src="https://res.cloudinary.com/dyevz7hnp/image/upload/v1721791987/Mcare_logo_blakr6.png" alt="MCare" className='logo'/>
            </a>
         </div>

        <div className='list-items'>
            <p>Services</p>
             <a href='#'>API Documentation</a>
             <a href='#'>Integrations</a>
             <a href='#'>MCare Team</a>
        </div>
        <div className='list-items'>
            <p>Support</p>
             <a href='#'>Help & FAQs</a>
             <a href='#'>Contact us</a>
             <a href='#'>Platform Support</a>
             <a href='#'>Tutorials</a>
        </div>
        <div className='list-items'>
            <p>Policies</p>
             <a href='#'>Privacy Policy</a>
             <a href='#'>Terms and Conditions</a>
            
        </div>
        <div className='follow'>
            <p>Follow us</p>
            <div className='follow-btn'>
            <a href='#'><img src='https://res.cloudinary.com/dyevz7hnp/image/upload/v1721749185/facebook_lzrwjs.png' className='follow-icon'/></a>
            <a href='#'><img src='https://res.cloudinary.com/dyevz7hnp/image/upload/v1721749192/twitter_zlfkqk.png' className='follow-icon'/></a>
            <a href='#'><img src='https://res.cloudinary.com/dyevz7hnp/image/upload/v1721749199/linkedin_cwzoed.png' className='follow-icon'/></a>
            
            </div>
        </div>
    </div>
  )
}

export default footer