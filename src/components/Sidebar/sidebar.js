import * as React from 'react'
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaBookMedical } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiHealthBookFill } from "react-icons/ri";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { IoIosPersonAdd } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar =()=> {

    const[activeTab , setActiveTab] = React.useState(0);
    const[isTogglesubmenu , setisToggleSubmenu] = React.useState(false);
    const isOpenSubmenu =(index)=>
    {
        setActiveTab(index);
        setisToggleSubmenu(!isTogglesubmenu)
    }


  return (
    <div className='sidebar'>
<ul>
    <li>
        <Link to="/">
<Button className={`w-100 ${activeTab===0 ? 'active':''}`} onClick={()=>isOpenSubmenu(0)}>
    <span className='icon'><MdDashboard /></span>
    DashBoard
    {/* <span className='arrow'><IoIosArrowForward /></span> */}
    </Button>
    </Link>
    </li>

    <li>
      
<Button className={`w-100 ${activeTab===1 && isTogglesubmenu === true ? 'active':''}`} onClick={()=>isOpenSubmenu(1)}>
    <span className='icon'><MdOutlineFamilyRestroom /></span>
    Family Members
    <span className='arrow'><IoIosArrowForward /></span>
    </Button>

    <div className={`submenu-wrapper ${activeTab===1 && isTogglesubmenu === true ? 'colapse' : 'colapsed'}`}>
   <ul className='sub-menu'>
      <li><Link to="#">Member 1</Link></li>
      <li><Link to="#">Member 2</Link></li>
      <li><Link to="#">Member 3</Link></li>
      <li><Link to="#">Member 4</Link></li>
   </ul>
   </div>
    </li>

    <li>
        <Link to="/appointment">
<Button className={`w-100 ${activeTab===2 ? 'active':''}`} onClick={()=>isOpenSubmenu(2)}>
    <span className='icon'><FaBookMedical /></span>
    Appointments
    {/* <span className='arrow'><IoIosArrowForward /></span> */}
    </Button>
    </Link>
    </li>
    <li>
        <Link to="/doctors">
<Button className={`w-100 ${activeTab===3 ? 'active':''}`} onClick={()=>isOpenSubmenu(3)}>
    <span className='icon'><FaUserDoctor /></span>
    Doctors
    {/* <span className='arrow'><IoIosArrowForward /></span> */}
    </Button>
    </Link>
    </li>

    <li>
        <Link to="/health-guide">
<Button className={`w-100 ${activeTab===4 ? 'active':''}`} onClick={()=>isOpenSubmenu(4)}>
    <span className='icon'><RiHealthBookFill /></span>
    Health Guide
    {/* <span className='arrow'><IoIosArrowForward /></span> */}
    </Button>
    </Link>
    </li>


    <li>
        <Link to="/chats">
<Button className={`w-100 ${activeTab===5 ? 'active':''}`} onClick={()=>isOpenSubmenu(5)}>
    
    <span className='icon'><BsChatSquareDotsFill /></span>
    Chats
    {/* <span className='arrow'><IoIosArrowForward /></span> */}
    </Button>
    </Link>
    </li>
    <li>
        <Link to="/contact">
<Button className={`w-100 ${activeTab===6 ? 'active':''}`} onClick={()=>isOpenSubmenu(6)}>
    <span className='icon'><IoIosContact /></span>
    Contact
    {/* <span className='arrow'><IoIosArrowForward /></span> */}
    </Button>
    </Link>
    </li>

    <li className='btn-list'>
        <Link to="/add-member">
    <Button variant="contained" className='add-btn'>
    <span className='icon'><IoIosPersonAdd /></span>
        Add Member</Button>
        </Link>
    </li>

</ul>

    </div>

  )
}

export default Sidebar