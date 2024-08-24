import React from 'react'
import Container from '../Layers/Container'
import { MdOutlineShortText } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <section className='search_bar bg-[#F5F5F3] relative z-10'>
        <Container className='flex justify-between items-center md:py-[25px] p-2'>
            <div className="category flex gap-[10px] items-center hover:cursor-pointer">
                <MdOutlineShortText className='md:text-lg text-xl'/>
                <span className='md:block hidden text-sm text-[#262626] font-normal'>
                    Shop by Category
                </span>
            </div>
            <div className="search md:w-[601px] w-[250px] relative">
                <input type="text" placeholder='Search Products' className='w-full md:py-4 md:px-[21px] p-2 text-sm text-[#262626] placeholder:text-[#C4C4C4] placeholder:font-normal font-medium outline-none'/>
                <FaSearch className='absolute top-1/2 -translate-y-1/2 md:right-[21px] right-2 md:text-[15px] text-xs text-[#262626] hover:cursor-pointer'/>
            </div>
            <div className="cart-login flex items-center md:gap-x-10 gap-x-2 text-[#262626]">
                <div className="user flex items-center hover:cursor-pointer md:text-base text-xs">
                    <FaUser />
                    <IoMdArrowDropdown className='md:text-xl' />
                </div>
                <div className="cart hover:cursor-pointer md:text-base text-xs">
                    <FaShoppingCart />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Searchbar