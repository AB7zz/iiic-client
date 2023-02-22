import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Navbar = () => {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-transparent pt-6 pb-6 pl-24 pr-8 ">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/dashboard/internship" class="font-bold text-2xl tracking-tight text-[#16255D]"><ArrowBackIcon style={{color: '#2979F2' }} className="mr-10"/> IIIC SOE</Link>
      </div>
    </nav>
  )
}

export default Navbar