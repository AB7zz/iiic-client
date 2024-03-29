import React from 'react'
import { Link } from 'react-router-dom'
import { HomeContext } from '../Context/HomeContextProvider'

const Navbar = () => {
  const {isLogin, admin} = React.useContext(HomeContext)
  return (
    <nav className="absolute z-10 flex items-center justify-between flex-wrap bg-transparent pt-6 pb-6 pl-24 pr-8 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-bold text-2xl tracking-tight text-[#16255D]">IIIC SOE</Link>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-around">
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-[#2979F2] focus:text-[#2979F2] mr-4">
            Home
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-[#2979F2] focus:text-[#2979F2] mr-4">
            About
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-[#2979F2] focus:text-[#2979F2] mr-4">
            Categories
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-black hover:text-[#2979F2] focus:text-[#2979F2]">
            How it works?
          </a>
        </div>
        <div>
          {(isLogin && !admin) 
            ? <><Link to="/dashboard" className="ml-3 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Dashboard</Link></> 
          
            : (isLogin && admin) 
            ? <><Link to="/admin" className="ml-3 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Admin Panel</Link></> 
          
            : <Link to="/login" className="ml-3 inline-block text-sm px-4 pr-8 pl-8 py-4 leading-none border rounded text-[#2979F2] font-semibold border-white hover:border-transparent bg-[#C2C2C2] bg-opacity-30 mt-4 lg:mt-0">Sign In</Link>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar