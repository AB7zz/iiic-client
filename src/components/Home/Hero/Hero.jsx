import React from 'react'
import cusat from '../../../assets/cusat2.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='z-0 grid md:grid-cols-2 sm:grid-cols-2 md:mb-16'>
      <div className='px-12 md:pl-32 md:pt-44 pt-20'>
        <p className='text-[#2979F2] md:text-xl text-sm text-semibold'>IIIC SOE STUDENT - INDUSTRY JOB PORTAL</p>
        <h1 className='text-black font-bold text-2xl md:text-7xl'>Top Talents Awaits </h1>
        <h1 className='text-4xl md:text-5xl mt-4 font-bold'>Find your dream team here</h1>
        <p className='mt-3 mb-12 text-[#646464] text-sm'>Portal for Internships, Projects and Assistance</p>
        <Link to='/login' className='rounded font-semibold text-sm bg-blue-500 pl-4 pr-4 px-3 py-3 text-white'>Discover the Best Minds Here</Link>
      </div>
      <div className='hidden md:block'>
        <img className="h-[105%]" src={cusat} alt="cusat" />
      </div>
    </div>
  )
}

export default Hero