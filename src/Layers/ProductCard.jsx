import React from 'react'

const Text = ({productName, color, price})=> {
  return(
    <>
    <div className='md:pt-6 pt-3 w-full'>
      <div className="flex justify-between items-center mb-1 md:mb-[15px]">
        <h3 className='text-xs md:text-xl text-[#262626] md:font-bold font-medium leading-[187.5%]'>
        {productName}
        </h3>
        <p className='text-xs md:text-xl text-[#767676] font-normal leading-[187.5%]'>
        {price}
        </p>
      </div>
      <p className='text-xs md:text-xl text-[#767676] font-normal leading-[187.5%]'>
      {color}
      </p>
    </div>
    </>
  )
}

const ProductCard = ({src, productName, price, color}) => {
  return (
    <div className='md:w-[370px] w-[180px]'>
      <div className="img md:w-[370px] md:h-[370px] w-[180px] h-[180px]">
        <img src={src} alt="" className='w-full h-full object-contain'/>
      </div>
      <Text productName={productName} price={price} color={color}/>
    </div>
  )
}

export default ProductCard