import * as  React from 'react'
import DashBoard_Header from '../../components/DashBoard_Header/DashBoard-header.js';
import Sidebar from '../../components/Sidebar/sidebar.js';
import DashBoard from '../DashBoard/DashBoard.js';
import ERP from '../ERP/erp.js';
import { Route, Routes } from 'react-router-dom';

import Joyride from "react-joyride";



const steps = [
  {
    target: ".header-logo",
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

function MainPage() {

// const [isToggleSidebar , setIsToggleSidebar] = useState(false);

  // const values ={

  // }
  return (
    
    <>
     <Joyride steps={steps} continuous={true}  showProgress={true} showSkipButton={true}/>
 
    <DashBoard_Header/>

    <div className="main d-flex">
        <div className="sidebar-wrapper">
          <Sidebar/>
        </div>
        <div className="content">

          <Routes>
          <Route  path='/' element={< DashBoard/>}  />
          <Route  path='/erp' element={< ERP/>}  />
          </Routes>
        </div>
    </div>
    {/* </MyContext.Provider> */}
    </>
  )
}

export default MainPage
// export {MyContext}