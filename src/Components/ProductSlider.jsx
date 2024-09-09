import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from '../Layers/Container'
import ProductCard from "../Layers/ProductCard";
import p01 from '/Products/product-1.png'
import p02 from '/Products/product-2.png'
import p03 from '/Products/product-3.png'
import p04 from '/Products/product-4.png'
import p05 from '/Products/product-5.png'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='md:w-[65px] md:h-[65px] w-[40px] h-[40px] md:top-[153px] md:left-5 top-[70px] left-1 items-center justify-center'
        style={{ ...style, display: "flex", background: "#00000033", cursor: "pointer", borderRadius: '50%', position: 'absolute', zIndex: "111" }}

        onClick={onClick}
      >
        <FaLongArrowAltLeft className="text-white md:text-xl text-sm" />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='md:w-[65px] md:h-[65px] w-[40px] h-[40px] md:top-[153px] md:right-5 top-[70px] right-1 items-center justify-center'
        style={{ ...style, display: "flex", background: "#00000033", cursor: "pointer", borderRadius: '50%', position: 'absolute', zIndex: "111" }}
        onClick={onClick}
      >
        <FaLongArrowAltRight className="text-white md:text-xl text-sm" />
      </div>
    );
  }

function ProductSlider({className}) {
  const settings = {
    dots: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className={`slider-container w-full ${className}`}>
      <Slider {...settings}>
        <div>
            <ProductCard className='w-full md:w-full md:px-5 px-1' src={p01} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'10%'}/>
        </div>
        <div>
            <ProductCard className='w-full md:w-full md:px-5 px-1' src={p02} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'New'}/>
        </div>
        <div>
            <ProductCard className='w-full md:w-full md:px-5 px-1' src={p03} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'New'}/>
        </div>
        <div>
            <ProductCard className='w-full md:w-full md:px-5 px-1' src={p04} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'New'}/>
        </div>
        <div>
            <ProductCard className='w-full md:w-full md:px-5 px-1' src={p05} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'} tag={'New'}/>
        </div>
      </Slider>
    </div>
  );
}

export default ProductSlider;
