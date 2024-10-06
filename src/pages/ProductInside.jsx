import React, { useState } from 'react'
import Container from '../Layers/Container'
import BreadCrumbs from '../Layers/BreadCrumbs'
import p01 from '/Products/product-4.png'
import p02 from '/Products/product-2.png'
import p03 from '/Products/product-10.png'
import p04 from '/Products/product-9.png'
import { IoMdStar } from 'react-icons/io'

const ProductInside = () => {

    return (
        <section id="product_details" className='md:py-[124px] py-10 md:px-0 px-2'>
            <Container>
                <BreadCrumbs />
                <div className="images md:mt-[119px] mt-11 md:h-[1600px] h-[400px] grid grid-cols-2 grid-rows-2 md:gap-10 gap-4">
                    <div className="img">
                        <img src={p01} alt="" className='h-full w-full object-cover' />
                    </div>
                    <div className="img">
                        <img src={p02} alt="" className='h-full w-full object-cover' />
                    </div>
                    <div className="img">
                        <img src={p03} alt="" className='h-full w-full object-cover' />
                    </div>
                    <div className="img">
                        <img src={p04} alt="" className='h-full w-full object-cover' />
                    </div>
                </div>
                <div className="info md:mt-[66px] mt-7">
                    <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium'>
                        Product
                    </h2>
                    <div id='rating' className="flex items-center md:gap-6 gap-4 md:mt-4 mt-1">
                        <div className="stars flex items-center gap-0 text-[#FFD881] md:text-base text-sm">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                        </div>
                        <div className='md:text-sm text-xs text-[#767676] font-normal'>
                            1 Review
                        </div>
                    </div>
                    <div id="price" className="flex items-center md:gap-6 gap-3 md:mt-5 mt-3">
                        <p className='md:text-base text-sm text-[#767676] font-normal'>
                            <del>$88.00</del>
                        </p>
                        <p className='md:text-[20px] text-base text-[#262626] md:font-bold font-medium'>
                            $44.00
                        </p>
                    </div>
                    <div className="line h-[1px] max-w-[780px] bg-[#F0F0F0] md:my-7 my-4"></div>
                    <div className="flex gap-[30px] flex-col">
                        <div id="color" className="flex items-center md:gap-14 gap-10">
                            <p className='md:text-base text-sm text-[#262626] md:font-bold font-medium leading-[143.75%]'>
                                COLOR:
                            </p>
                            <div className="shades flex items-center md:gap-4 gap-2">
                                <div className='md:h-5 md:w-5 h-3 w-3 bg-[#00000032] rounded-full duration-300 md:hover:w-6 md:hover:h-6'></div>
                                <div className='md:h-5 md:w-5 h-3 w-3 bg-[#ff8686] rounded-full duration-300 md:hover:w-6 md:hover:h-6'></div>
                                <div className='md:h-5 md:w-5 h-3 w-3 bg-[#7dd32132] rounded-full duration-300 md:hover:w-6 md:hover:h-6'></div>
                                <div className='md:h-5 md:w-5 h-3 w-3 bg-[#b6b6b632] rounded-full duration-300 md:hover:w-6 md:hover:h-6'></div>
                                <div className='md:h-5 md:w-5 h-3 w-3 bg-[#15cba432] rounded-full duration-300 md:hover:w-6 md:hover:h-6'></div>
                            </div>
                        </div>
                    </div>
                    <div className="line h-[1px] max-w-[780px] bg-[#F0F0F0] md:my-7 my-4"></div>
                    <div className="flex items-center gap-5">
                        <button className='md:py-4 md:w-[200px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300'>
                            Add to Wish List
                        </button>
                        <button className='md:py-4 md:w-[200px] text-center py-[10px] w-[140px] bg-[#262626] border border-[#262626] text-white md:text-sm text-xs md:font-bold font-medium hover:bg-transparent hover:text-[#262626] duration-300'>
                            Add to Cart
                        </button>
                    </div>

                </div>
            </Container>
        </section>
    )
}

export default ProductInside