import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import ProductCard from "../Layers/ProductCard";
import p01 from '/Products/product-1.png'
import p02 from '/Products/product-2.png'
import p03 from '/Products/product-3.png'
import p04 from '/Products/product-4.png'
import p05 from '/Products/product-5.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#00000033", cursor: "pointer", width: '65px', height: '65px', borderRadius: '50%', position: 'absolute', top: "50%", transform: "translateY(-50%)", left: "0%", zIndex: "111" }}

        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#00000033", cursor: "pointer", width: '65px', height: '65px', borderRadius: '50%', position: 'absolute', top: "50%", transform: "translateY(-50%)", right: "0%", zIndex: "111" }}
        onClick={onClick}
      />
    );
  }

function ProductSlider() {
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
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1
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
    <div className="slider-container mx-auto">
      <Slider {...settings}>
        <div>
            <ProductCard src={p01} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'}/>
        </div>
        <div>
            <ProductCard src={p02} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'}/>
        </div>
        <div>
            <ProductCard src={p03} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'}/>
        </div>
        <div>
            <ProductCard src={p04} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'}/>
        </div>
        <div>
            <ProductCard src={p05} productName={'Basic Crew  Neck Tee'} price={'$44.00'} color={'Black'}/>
        </div>
      </Slider>
    </div>
  );
}

export default ProductSlider;
