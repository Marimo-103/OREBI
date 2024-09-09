import React from 'react'
import Container from '../Layers/Container'
import BreadCrumbs from '../Layers/BreadCrumbs'

const Shop = () => {
  return (
    <div className='md:px-0 px-2'>
        <section id="products" className='md:pt-[124px] pt-10'>
            <Container>
                <BreadCrumbs />
            </Container>
        </section>
    </div>
  )
}

export default Shop