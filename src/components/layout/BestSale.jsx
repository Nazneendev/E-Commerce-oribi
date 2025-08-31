import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import tob from "../../assets/tob.png"
import Badge from '../Badge'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { BiGitCompare } from "react-icons/bi";
import bbag from "../../assets/bbag.png"
import bati from "../../assets/bati.png"
import gbag from "../../assets/gbag.png"

const BestSale = () => {
  return (
    <>
        <div className="py-[100px]">
        <Container>
            <Flex className={"justify-between gap-x-8"}>
            <div className="relative group w-1/4">
    <Badge badgeText={"New"} className={"absolute top-[20px] left-[20px]"}/>
    <Image imgSrc={tob}  className={"w-full"}/>
    <div className="bg-white lg:p-7 sm:p-4  absolute bottom-20 left-0 w-full opacity-0  group-hover:opacity-100 ">
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC sm:text-[10px] lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Add to Wish List</p>  <FaHeart/>
   </Flex>
    </Link>
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC sm:text-[10px] lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Compare</p>  <BiGitCompare/>
   </Flex>
    </Link>
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC sm:text-[10px] lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Add to Cart</p>  <FaShoppingCart/>
   </Flex>
    </Link>

    </div>
    <div className="flex justify-between pt-5">
    <h3 className='text-hoverC font-semibold font-dm'>Basic Crew Neck Tee</h3>
    <h4 className='text-textC font-medium font-dm'>$44.00</h4>

    </div>
    <h4 className='text-textC font-medium font-dm pt-5'>Black</h4>


    </div>
    <div className="relative group w-1/4">
    <Badge badgeText={"New"} className={"absolute top-[20px] left-[20px]"}/>
    <Image imgSrc={bbag}  className={"w-full"}/>
    <div className="bg-white lg:p-7 sm:p-4 absolute bottom-20 left-0 w-full opacity-0  group-hover:opacity-100 ">
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC  sm:text-[10px]  lg:text-[16px]sm:text-[10px]  lg:text-[16px]sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Add to Wish List</p>  <FaHeart/>
   </Flex>
    </Link>
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC sm:text-[10px]  lg:text-[16px]sm:text-[10px]  lg:text-[16px]sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Compare</p>  <BiGitCompare/>
   </Flex>
    </Link>
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC sm:text-[10px]  lg:text-[16px]sm:text-[10px]  lg:text-[16px]sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Add to Cart</p>  <FaShoppingCart/>
   </Flex>
    </Link>

    </div>
    <div className="flex justify-between pt-5">
    <h3 className='text-hoverC font-semibold font-dm'>Basic Crew Neck Tee</h3>
    <h4 className='text-textC font-medium font-dm'>$44.00</h4>

    </div>
    <h4 className='text-textC font-medium font-dm pt-5'>Black</h4>


    </div>
    <div className="relative group w-1/4">
    <Badge badgeText={"New"} className={"absolute top-[20px] left-[20px]"}/>
    <Image imgSrc={bati}  className={"w-full"}/>
    <div className="bg-white lg:p-7 sm:p-4 absolute bottom-20 left-0 w-full opacity-0  group-hover:opacity-100 ">
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC  sm:text-[10px]  lg:text-[16px]sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Add to Wish List</p>  <FaHeart/>
   </Flex>
    </Link>
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC sm:text-[10px]  lg:text-[16px]sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Compare</p>  <BiGitCompare/>
   </Flex>
    </Link>
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC sm:text-[10px]  lg:text-[16px]sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Add to Cart</p>  <FaShoppingCart/>
   </Flex>
    </Link>

    </div>
    <div className="flex justify-between pt-5">
    <h3 className='text-hoverC font-semibold font-dm'>Basic Crew Neck Tee</h3>
    <h4 className='text-textC font-medium font-dm'>$44.00</h4>

    </div>
    <h4 className='text-textC font-medium font-dm pt-5'>Black</h4>


    </div>
    <div className="relative group w-1/4">
    <Badge badgeText={"New"} className={"absolute top-[20px] left-[20px]"}/>
    <Image imgSrc={gbag}  className={"w-full"}/>
    <div className="bg-white lg:p-7 sm:p-4 p-7 absolute bottom-20 left-0 w-full opacity-0  group-hover:opacity-100 ">
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC  sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Add to Wish List</p>  <FaHeart/>
   </Flex>
    </Link>
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Compare</p>  <BiGitCompare/>
   </Flex>
    </Link>
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Add to Cart</p>  <FaShoppingCart/>
   </Flex>
    </Link>

    </div>
    <div className="flex justify-between pt-5">
    <h3 className='text-hoverC font-semibold font-dm'>Basic Crew Neck Tee</h3>
    <h4 className='text-textC font-medium font-dm'>$44.00</h4>

    </div>
    <h4 className='text-textC font-medium font-dm pt-5'>Black</h4>


    </div>

            </Flex>
        </Container>
        </div>
     
      
        
    </>
  )
}

export default BestSale


