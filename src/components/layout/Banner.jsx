import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from '../PrevArrow';
import NextArrow from '../NextArrow';



const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };


  return (
    <>
      
<div className='pt-[150px]'>
 <Slider {...settings}>
      <div className=''>
      <Link to={"https://www.creativeitinstitute.com/"} target='_blank' >
      <div class="bg-[url('./bg.png')]  bg-center bg-cover bg-no-repeat py-[125px] md:py-[250px] lg:py-[300px] xl:py-[350px]">

      </div>
      </Link>
      </div>
      <div>
      <Link to={"https://www.creativeitinstitute.com/"} target='_blank' >
      <div class="bg-[url('./bg.png')]  bg-center bg-cover bg-no-repeat py-[125px] md:py-[250px] lg:py-[300px] xl:py-[350px]">

      </div>
      </Link>
      </div>
      <div>
     
      <div class="bg-[url('./bg.png')]  bg-center bg-cover bg-no-repeat  py-[125px] md:py-[250px] lg:py-[300px] xl:py-[350px]">

      </div>
     
      </div>
     
    </Slider>
</div>
     
    </>
  )
}

export default Banner

