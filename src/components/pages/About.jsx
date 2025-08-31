import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import watch from "../../assets/watch.png"
import beter from "../../assets/beter.png"
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
   <>
    <div className="py-[150px] pt-[200px]">
    <Container>
      <h3 className='font-bold font-dm text-[49px] text-hoverC'>About Us</h3>
      <p className='text-textC font-dm text-[12px] mt-5 font-bold flex items-center'>Home <IoIosArrowForward/> About </p>
      <Flex className={"justify-between gap-x-4 mt-15"}>
      <div className='w-1/2'>
      <Image imgSrc={watch} imgAlt={watch}/>

      </div>
      <div className='w-1/2'>
        <Image imgSrc={beter} imgAlt={beter}/>

      </div>

      </Flex>
      <div className=''>
        <h5 className='text-[30px] font-dm text-hoverC leading-[52px] mt-40'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h5>
      </div>
      <Flex className={"justify-between gap-x-10 mt-40"}>
        <div className='w-1/3'>
          <h6 className='font-dm text-[18px] text-hoverC font-bold'>Our Vision </h6>
          <p className='text-textC text-[14px] font-dm leading-5 pt-5 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='w-1/3'>
          <h6 className='font-dm text-[18px] text-hoverC font-bold'>Our Story </h6>
          <p className='text-textC text-[14px] font-dm pt-5 leading-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className='w-1/3'>
          <h6 className='font-dm text-[18px] text-hoverC font-bold'>Our Brands </h6>
          <p className='text-textC text-[14px] font-dm pt-5 leading-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </Flex>
      
    </Container>

    </div>
    
   </>
  )
}

export default About
