import React from 'react'
import Container from '../Layers/Container'
import Logo from '../Layers/Logo'
import Logo_image from '/Common Images/Logo.png'
import Li from '../Layers/Li'
import { TbGridDots } from "react-icons/tb";
const Navbar = () => {
  return (
    <nav>
        <Container className='flex sm:py-8 sm:px-0 items-center justify-between py-4 px-3'>
            <div className="logo">
              <Logo src={Logo_image}/>
            </div>
            <div className="menu">
              <ul className='hidden sm:flex gap-x-10 items-center'>
                <Li value='Home' />
                <Li value='Shop' />
                <Li value='About' />
                <Li value='Contacts' />
                <Li value='Journal' />
              </ul>
            </div>
            <div className="lang">
              <ul className='flex gap-x-2 sm:gap-x-5 items-center'>
                <Li value='EN' />
                <Li value='RU' />
              </ul>
            </div>
            <div className='sm:hidden'>
              <TbGridDots />
            </div>
        </Container>
    </nav>
  )
}

export default Navbar