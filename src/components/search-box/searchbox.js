import React from 'react';
import { IoMdSearch } from "react-icons/io";

function searchbox() {
  return (
    <div className='searchBox position-relative d-flex align-items-center'>
         <IoMdSearch className='mr-2'/>
         <input type="text" placeholder='Search here...'/>
    </div>
  )
}

export default searchbox