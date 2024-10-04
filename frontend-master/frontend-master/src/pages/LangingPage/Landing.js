import React from 'react';
import Navbar from 'C:/Users/singh/OneDrive/Desktop/Health Clinic/frontend/src/components/Navbar/Navbar.js';
import Hero from 'C:/Users/singh/OneDrive/Desktop/Health Clinic/frontend/src/components/Hero/Hero.js';
import Footer from 'C:/Users/singh/OneDrive/Desktop/Health Clinic/frontend/src/components/footer/footer.js';
import Card from 'C:/Users/singh/OneDrive/Desktop/Health Clinic/frontend/src/components/card/card.js';
import './landing.css';
import Joyride from "react-joyride";

const steps = [
  {
    target: ".logo",
    content: "Welcome!! Please spare a minute to learn about our page",
  },
  {
    target: ".tg",
    content: "Welcome!! Please Next",
  },
  {
    target: ".card-container",
    content: "Explore our Features",
  },
];
function Landing() {
  return (
   <>
   <Joyride steps={steps} continuous={true}  showProgress={true} showSkipButton={true}/>
   <Navbar />
   <Hero />
   <div className = 'second'>
    <div className='heading'>
         <h1 className='feature'>Manage your health care anywhere <br/><span className='tg'>with MCare </span></h1>
         </div>
         <div className = 'para-con'>
         <p className='para'>Your Comprehensive Solution for Convenient, Reliable, and <br/>Accessible Medical Services at Your Fingertips</p>
         </div>
   <div className='card-container'>
   <Card imageSrc='https://res.cloudinary.com/dyevz7hnp/image/upload/v1721745619/robot-assistant_n6ao12.png' heading='AI Assistant' />
   <Card imageSrc='https://res.cloudinary.com/dyevz7hnp/image/upload/v1721745642/health-report_z1qkcj.png' heading='Test Bookings' />
   <Card imageSrc='https://res.cloudinary.com/dyevz7hnp/image/upload/v1721745628/consulting_wuhwtw.png' heading='Consultation' />
   <Card imageSrc='https://res.cloudinary.com/dyevz7hnp/image/upload/v1721745634/medical-book_qvnwlm.png' heading='Medical Records' />
   </div>
   </div>


    
   <div className='section'>
        <div className='inner-container'>
        <div className='heading'>
         <h1 className='feature'>Simplify Your Healthcare Experience <br/><span className='tg'>with MCare </span></h1>
         </div>
         <div className = 'para-con'>
         <p className='para'>"Centralize your family’s health care with MCare, offering detailed records, timely alerts,<br/> and easy access to medical consultations</p>
         </div>
          <div className='img-container'>
            <div className='left-feature'>
              <div className='upper'>
            <img src='https://plus.unsplash.com/premium_photo-1661766743908-ca87957f4bb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFZpcnR1YWwlMjBDb25zdWx0YXRpb25zJTIwZG9jdG9yfGVufDB8MXwwfHx8MA%3D%3D' className='big-img'/>
            <hr className='line'/>
            <h2 className='feature-head'>Virtual Consultations</h2>
            <p className='feature-para'>Expert advice, anytime, anywhere</p>
            </div>
            <div className='upper'>
            <img src='https://images.ctfassets.net/7zuugkb002is/7m2HYzdouTu9MsJghoYX0O/3226f80407a688074a7b531019587767/image_5.png' className='small-img'/>
            <hr className='line'/>
            <h2 className='feature-head'>Health Records Management</h2>
            <p className='feature-para'>All your medical history in one place</p>
            </div>
            
            </div>

            <div className='right-feature'>
              <div className='upper'>
            <img src='https://ih1.redbubble.net/image.4867166272.3448/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg' className='big-img'/>
            <hr className='line'/>
            <h2 className='feature-head'>Medication Reminders</h2>
            <p className='feature-para'>Never miss a dose again</p>
            </div>
            <div className='upper'>
            <img src='https://plus.unsplash.com/premium_vector-1716656068991-5f639b016ffd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmFtaWx5JTIwSGVhbHRoJTIwTW9uaXRvcmluZ3xlbnwwfDF8MHx8fDA%3D' className='small-img'/>
            <hr className='line'/>
            <h2 className='feature-head'>Family Health Monitoring</h2>
            <p className='feature-para'>Stay updated on your loved ones' health</p>
            </div>
            
            </div>
            
          </div>

        </div> 
   </div>

   <div className='third'>
    <div className='left-con'>
      <img src='https://res.cloudinary.com/dyevz7hnp/image/upload/v1721742108/ana-removebg-preview_hl0ccd.png'  />
    </div>
    <div className='right-con'>
      <p className='analyse'>Analytics</p>
      <h1 className='tag'>Your Family's health at a <br/>glance
      </h1>
      <p>Our platform ensures that every family member gets the best care. From routine check-ups to specialized treatments, MCare provides seamless and efficient healthcare services for all ages. Trust MCare to keep your loved ones healthy and happy, no matter where you are.</p>
    </div>
   </div>

   <Footer/>
   </>
  )
}

export default Landing