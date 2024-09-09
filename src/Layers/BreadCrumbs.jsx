import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const BreadCrumbs = () => {
  return (
    <div>
        <h2 className='md:text-[49px] text-3xl text-[#262626] md:font-bold font-medium capitalize md:mb-[11px] mb-1'>
            {window.location.pathname.split('/')[1]}
        </h2>
        <div className='flex items-center md:gap-1 gap-[2px] md:text-xs text-[9px] text-[#767676]'>
            <span>Home</span> <IoIosArrowForward /> {window.location.pathname.split('/')[1]}
        </div>
    </div>
  )
}

export default BreadCrumbs