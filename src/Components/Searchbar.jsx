import React from 'react'
import Container from '../Layers/Container'
import { MdOutlineShortText } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className='search_bar bg-[#F5F5F3]'>
        <Container className='flex justify-between items-center sm:py-[25px] py-12px'>
            <div className="category flex gap-[10px] items-center hover:cursor-pointer">
                <MdOutlineShortText className='text-lg'/>
                <span className='text-sm text-[#262626] font-normal'>
                    Shop by Category
                </span>
            </div>
            <div className="search w-[601px] relative">
                <input type="text" placeholder='Search Products' className='w-full sm:py-4 sm:px-[21px] text-sm text-[#262626] placeholder:text-[#C4C4C4] placeholder:font-normal font-medium outline-none'/>
                <FaSearch className='absolute top-[18px] right-[21px] text-[15px] text-[#262626] hover:cursor-pointer'/>
            </div>
            <div className="cart-login flex items-center gap-x-10 text-[#262626]">
                <div className="user flex items-center hover:cursor-pointer">
                    <FaUser />
                    <IoMdArrowDropdown className='text-xl' />
                </div>
                <div className="cart hover:cursor-pointer">
                    <FaShoppingCart />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Searchbar