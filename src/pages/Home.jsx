import React from 'react'
import IntroBanner from '../Components/IntroBanner'
import { PiNumberTwoBold } from 'react-icons/pi'
import Container from '../Layers/Container'
import { FaTruck } from 'react-icons/fa'
import { TbReload } from 'react-icons/tb'
import add01 from '/Home Images/Ad_1.png'
import add02 from '/Home Images/Ad_2.png'
import add03 from '/Home Images/Ad_3.png'


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

      {/* adds */}
      <section id="adds" className='md:py-[174px] py-8 md:px-0 px-2'>
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
      
    </div>
  )
}

export default Home