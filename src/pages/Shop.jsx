import React, { useState } from 'react'
import Container from '../Layers/Container'
import BreadCrumbs from '../Layers/BreadCrumbs'
import { IoGrid } from 'react-icons/io5'
import { MdOutlineStorage } from 'react-icons/md'
import Pagination from '../Components/Pagination'

const Shop = () => {

  let [itemsPerPage, setitemsPerPage] = useState(12)

  let manageitemsPerPage = (element) => {
    setitemsPerPage(Number(element.target.value))
  }

  return (
    <div className='md:px-0 px-2'>
        <section id="products" className='md:pt-[124px] pt-10'>
            <Container>
                <BreadCrumbs />
                <div className="main md:mt-[130px] mt-10 grid md:grid-cols-4 gap-10">
                  <div className="category md:col-span-1 bg-slate-500">Shop by Category</div>
                  <div className="product md:col-span-3 ">
                    <div className="heading flex justify-between md:items-center">
                      <div className="format flex md:gap-5 gap-2 items-center">
                        <IoGrid className='md:p-1 md:border md:border-[#262626] md:text-white md:text-3xl md:bg-[#262626]' />
                        <MdOutlineStorage className='md:p-1 md:border md:border-[#262626] md:text-white md:text-3xl md:bg-[#262626]' />
                      </div>
                      <div className="sorting flex items-center md:gap-10 gap-5">
                        <div className="sort flex items-center md:gap-3 gap-2">
                          <p className='md:text-base text-xs text-[#767676] leading-[187.5%]'>
                            Sort by:
                          </p>
                          <select name="" id="" className='py-1 md:px-5 px-2 border border-[#F0F0F0] md:w-[239px] w-[120px] bg-transparent md:text-base text-xs text-[#767676] leading-[187.5%]'>
                            <option value="" className='py-1 px-5'>Featured</option>
                            <option value="" className='py-1 px-5'>Featured</option>
                            <option value="" className='py-1 px-5'>Featured</option>
                          </select>
                        </div>
                        <div className="show flex items-center md:gap-3 gap-2">
                          <p className='md:text-base text-xs text-[#767676] leading-[187.5%]'>
                          Show:
                          </p>
                          <select onChange={manageitemsPerPage} name="" id="" className='py-1 md:px-5 px-2 border border-[#F0F0F0] md:w-[239px] bg-transparent md:text-base text-xs text-[#767676] leading-[187.5%]'>
                            <option value="12" className='py-1 px-5'>12</option>
                            <option value="24" className='py-1 px-5'>24</option>
                            <option value="36" className='py-1 px-5'>36</option>
                            <option value="48" className='py-1 px-5'>48</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="products">
                      <Pagination itemsPerPage={itemsPerPage}/>
                    </div>
                  </div>
                </div>
            </Container>
        </section>
    </div>
  )
}

export default Shop