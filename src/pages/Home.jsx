import React from 'react'
import IntroBanner from '../Components/IntroBanner'
import { PiNumberTwoBold } from 'react-icons/pi'
import Container from '../Layers/Container'
import { FaTruck } from 'react-icons/fa'
import { TbReload } from 'react-icons/tb'
import add01 from '/Home Images/Ad_1.png'
import add02 from '/Home Images/Ad_2.png'
import add03 from '/Home Images/Ad_3.png'
import Adds_2nd from '/Home Images/Adds_2nd.png'
import ProductCard from '../Layers/ProductCard'
import ProductSlider from '../Components/ProductSlider'
import p06 from '/Products/product-6.png'
import p07 from '/Products/product-7.png'
import p08 from '/Products/product-8.png'
import p09 from '/Products/product-9.png'
import p010 from '/Products/product-10.png'
import p011 from '/Products/product-11.png'
import p012 from '/Products/product-12.png'


const Home = () => {
  return (
    <div>
      {/* intro banner */}
      <section id="intro">
      <div className='w-full'>
      <IntroBanner />
      </div>
      <Container className="flex items-center justify-between w-full md:py-[22px] py-2 md:px-0 px-2">
        <div className="one flex items-center md:gap-x-4 gap-x-[2px]">
        <PiNumberTwoBold className='text-[#262626] md:text-base text-[10px]'/>
        <p className='md:text-base text-[10px] text-[#6D6D6D] whitespace-nowrap'>
        Two years warranty
        </p>
        </div>
        <div className="two flex items-center md:gap-x-4 gap-x-[2px]">
        <FaTruck className='text-[#262626] md:text-base text-[10px]'/>
        <p className='md:text-base text-[10px] text-[#6D6D6D] whitespace-nowrap'>
        Free Shipping
        </p>
        </div>
        <div className="three flex items-center md:gap-x-4 gap-x-[2px]">
        <TbReload className='text-[#262626] md:text-base text-[10px] rotate-90'/>
        <p className='md:text-base text-[10px] text-[#6D6D6D] whitespace-nowrap'>
        Return policy in 30 days
        </p>
        </div>
      </Container>
      </section>

      {/* adds-01 */}
      <section id="adds01" className='md:pt-[174px] pt-4 md:px-0 px-2 cursor-pointer'>
        <Container className='flex md:gap-10 gap-3'>
          <div className="add_1">
            <img src={add01} alt="" />
          </div>
          <div className="flex flex-col md:gap-10 gap-3 md:w-[50%] md:h-[50%]">
            <div className="add_1 w-[100%] h-[50%]">
              <img src={add02} alt="" />
            </div>
            <div className="add_1 w-[100%] h-[50%]">
              <img src={add03} alt="" />
            </div>
          </div>
        </Container>
      </section>

      {/* products-01 */}
      <section id="productSlider" className='md:pt-32 pt-5 md:px-0 px-2'>
        <Container>
          <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium'>
          New Arrivals
          </h2>
        </Container>
        <Container className='max-w-[1640px]'>
          <div id="pSlider" className='md:mt-12 mt-7 max-w-[1640px]'>
            <ProductSlider className='w-full'/>
          </div>
        </Container>
      </section>

      {/* products-02 */}
      <section id="bestSeller" className='md:pt-32 pt-5 md:px-0 px-2'>
        <Container>
          <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium'>
            Our Bestsellers
          </h2>
          <div id="Products" className='md:mt-12 mt-7 flex justify-between md:flex-nowrap flex-wrap gap-y-8 items-center'>
            <ProductCard src={p06} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'10%'}/>
            <ProductCard src={p07} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'10%'}/>
            <ProductCard src={p08} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'10%'}/>
            <ProductCard src={p09} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'10%'}/>
          </div>
        </Container>
      </section>

      {/* adds-02 */}
      <section id="adds02" className='md:pt-32 pt-5 md:px-0 px-2 cursor-pointer'>
        <Container>
          <img src={Adds_2nd} alt="" className='w-full h-full object-contain'/>
        </Container>

      </section>
      
      {/* products-02 */}
      <section id="offer" className='md:py-32 py-5 md:px-0 px-2'>
        <Container>
          <h2 className='md:text-[39px] text-2xl text-[#262626] md:font-bold font-medium'>
            Special Offers
          </h2>
          <div id="Products" className='md:mt-12 mt-7 flex justify-between md:flex-nowrap flex-wrap gap-y-8 items-center'>
            <ProductCard src={p010} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'10%'}/>
            <ProductCard src={p011} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'10%'}/>
            <ProductCard src={p012} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'10%'}/>
            <ProductCard src={p06} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'10%'}/>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Home