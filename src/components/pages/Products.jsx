import React from 'react'
import Badge from '../Badge'
import Image from '../Image'
import watch from "../../assets/hand.png";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiGitCompare } from "react-icons/bi";
import Flex from '../Flex';
import { useDispatch } from 'react-redux';
import { addtocart } from '../../slices/addtocartSlice';



const Products = ({productImg,badgeText,productTitle,productPrice}) => {
  let dispatch=useDispatch()
  
  let handleAddToCart=()=>{
    dispatch(addtocart({
      title:productTitle,
      price:productPrice,
      image:productImg,
      quantity:1
    }))
    
  }
     
   
    
  return (
    <>
    <div className="relative group">
      <Image imgSrc={productImg} imgAlt={watch} className={"w-full"}/>
      <Badge badgeText={badgeText} className={"absolute top-[20px] left-[20px]"}/>
      <div className="bg-white lg:p-7 sm:p-4 absolute bottom-5 left-0 w-full opacity-0 z-10 group-hover:opacity-100 transition-all duration-500">
         <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Add to Wish List</p>  <FaHeart/>
   </Flex>
    </Link>
    <Link to={"/"}>
   <Flex className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC  sm:text-[10px] lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Compare</p>  <BiGitCompare/>
   </Flex>
    </Link>
    <Link to={"/"}>
    <div onClick={handleAddToCart}>
<Flex  className={"justify-end items-center gap-x-2 mb-2"}>
   <p className='text-textC  sm:text-[10px]  lg:text-[16px] font-dm hover:text-hoverC hover:font-semibold'>Add to Cart</p>  <FaShoppingCart/>
   </Flex>
    </div>
   
    </Link>

      </div>

      <div className="flex justify-between pt-5">
    <h3 className='text-hoverC font-semibold font-dm'>{productTitle}</h3>
    <h4 className='text-textC font-medium font-dm'>{productPrice}</h4>

    </div>
    </div>


   
    </>
    

  )
}

export default Products
