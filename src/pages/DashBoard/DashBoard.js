import React from 'react';
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbReportMedical } from "react-icons/tb";
import Corousel from '../../components/Corousel/corousel.js';
import ChatBot from '../../components/Chatbot/chatbot.js';

function DashBoard() {
  return (
    
    <>
    <div className="right-content w-100">

      <div className='dashboardboxwrapper d-flex align-items-center'>

        <div className="dashboardbox">
          <div className='box-head d-flex align-items-center'><span><MdOutlineFamilyRestroom /></span>
          <h4>Family Members</h4></div>
          
          <p>5</p>
        </div>
        <div className="dashboardbox">
          <div className='box-head d-flex align-items-center'><span><MdOutlineFamilyRestroom /></span>
          <h4>Family Members</h4></div>
          
          <p>5</p>
        </div>
        <div className="dashboardbox">
          <div className='box-head d-flex align-items-center'><span><MdOutlineFamilyRestroom /></span>
          <h4>Appointments</h4></div>
          
          <p>2</p>
        </div>
        <div className="dashboardbox">
          <div className='box-head d-flex align-items-center'><span><TbReportMedical /></span>
          <h4>Health Record</h4></div>
          
          <p>10</p>
        </div>
<div className="dashboardbox">
          <div className='box-head d-flex align-items-center'><span><TbReportMedical /></span>
          <h4>Health Record</h4></div>
          
          <p>10</p>
        </div>


      </div>

      <div className='upper-container d-flex'>
        <div className='left-container d-flex'>
        <div className='corousel-container'>

          <Corousel/>
         </div>
<div className='left-down d-flex'>


<div className='part-one'>

</div>
<div className='part-one'>
  
</div>

</div>
        </div>
        <div className='right-container'>
<ChatBot/>
        </div>
      </div>
      
    </div>
    
    </>
  )
}

export default DashBoard