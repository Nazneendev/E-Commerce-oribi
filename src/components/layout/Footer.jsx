import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import Image from '../Image'
import logo from "../../assets/logo.png"
import { FaFacebookF,FaLinkedinIn ,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F3] py-[100px]">
      <Container>
      
 <Flex className="flex-wrap justify-between gap-y-8">
 
  <div className="w-full sm:ml-5  sm:w-[45%] md:w-[30%] lg:w-[15%]">
    <h3 className="font-bold font-dm text-[16px] text-[#262626]">MENU</h3>
    <ul>
      <Link to="/"><li className="text-[14px] font-dm text-textC font-bold mt-5 hover:text-hoverC">Home</li></Link>
      <Link to="/shop"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Shop</li></Link>
      <Link to="/about"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">About</li></Link>
      <Link to="/contact"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Contacts</li></Link>
      <Link to="/journal"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Journal</li></Link>
    </ul>
  </div>

 
  <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[15%]">
    <h3 className="font-bold font-dm text-[16px] text-[#262626]">SHOP</h3>
    <ul>
      <Link to="/"><li className="text-[14px] font-dm text-textC font-bold mt-5 hover:text-hoverC">Category 1</li></Link>
      <Link to="/shop"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Category 2</li></Link>
      <Link to="/about"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Category 3</li></Link>
      <Link to="/contact"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Category 4</li></Link>
      <Link to="/journal"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Category 5</li></Link>
    </ul>
  </div>

  
  <div className="w-full sm:ml-5 sm:w-[45%] md:w-[30%] lg:w-[15%]">
    <h3 className="font-bold font-dm text-[16px] text-[#262626]">HELP</h3>
    <ul>
      <Link to="/"><li className="text-[14px] font-dm text-textC font-bold mt-5 hover:text-hoverC">Privacy Policy</li></Link>
      <Link to="/shop"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Terms & Conditions</li></Link>
      <Link to="/about"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Special E-shop</li></Link>
      <Link to="/contact"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Shipping</li></Link>
      <Link to="/journal"><li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Secure Payments</li></Link>
    </ul>
  </div>

  
  <div className="w-full sm:w-[45%] lg:w-[30%]">
    <h3 className="font-bold font-dm text-[16px] text-[#262626]">(052) 611-5711</h3>
    <h4 className="font-bold font-dm text-[15px] text-[#262626] mt-5">company@domain.com</h4>
    <h6 className="text-[14px] font-dm text-textC mt-8 font-bold hover:text-hoverC">
      575 Crescent Ave. Quakertown, PA 18951
    </h6>
  </div>

 
  <div className="w-full sm:ml-5  sm:w-[45%] lg:w-[25%]">
    <Link to="/">
      <Image imgSrc={logo} imgAlt="Logo" />
    </Link>
  </div>
</Flex> 


<Flex className="flex-wrap justify-between items-center gap-y-6 mt-[80px] pt-8 border-t border-gray-200">
  <div className="flex items-center sm:ml-5  gap-x-4">
    <FaFacebookF />
    <FaLinkedinIn />
    <FaInstagram />
  </div>
  <div className="text-center w-full lg:w-auto">
    <h5 className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">
      2020 Orebi Minimal eCommerce Figma Template by Adveits
    </h5>
  </div>
</Flex>  

      </Container>

      </div>
    </>
  )
}

export default Footer
