import React from 'react'
import  { useEffect, useState } from "react";
import Container from "../Container";
import { IoIosArrowForward } from "react-icons/io";
import Flex from "../Flex";
import Image from "../Image";
import Badge from "../Badge";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { addtocart } from '../../slices/addtocartSlice';




const Shop = () => {
  const [products, setProducts] = useState([]);
const dispatch=useDispatch();
  
  

  useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => setProducts(data.products)) 
    .catch(err => console.log(err));
}, []);

 const handleAddToCart = (product) => {
    dispatch(addtocart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail,
      quantity: 1
    }));
  };


  return (
    <>
     <div className="py-[100px] pt-[200px]">
  <Container>
    <h3 className="text-hoverC font-bold text-[35px] font-dm">Products</h3>
    <p className='text-textC font-dm text-[12px] mt-2 flex items-center'>
      Home <IoIosArrowForward /> Shop
    </p>

    <div className="flex mt-10 gap-10">
     
      <div className="w-[25%]">
        <h3 className="text-hoverC font-bold text-[18px] font-dm mb-5">Shop by Category</h3>
        <ul className="space-y-3 text-textC font-dm">
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          <li>Category 4</li>
        </ul>
      </div>

    
      <div className="w-[75%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(product => (
            <div key={product.id} className="relative group  p-3">
            
              <Image imgSrc={product.thumbnail} className="w-full" />

           
              <div className="bg-white p-3 absolute bottom-10 left-0 w-full opacity-0 group-hover:opacity-100">
                <Flex className="justify-end items-center gap-2 mb-1">
                  <p className='text-textC text-[14px] hover:text-hoverC font-medium hover:font-bold'>Add to Wish List</p>
                  <FaHeart />
                </Flex>
                <Flex className="justify-end items-center gap-2 mb-1">
                  <p className='text-textC text-[14px] hover:text-hoverC font-medium hover:font-bold'>Compare</p>
                  <BiGitCompare />
                </Flex>
                  <div onClick={() => handleAddToCart(product)}>
                        <Flex className="justify-end items-center gap-2 mb-1 cursor-pointer">
                          <p className='text-textC text-[14px] hover:text-hoverC font-medium hover:font-bold'>Add to Cart</p>
                          <FaShoppingCart />
                        </Flex>
                      </div>
                
              </div>

              {/* Product */}
              <div className="flex justify-between pt-3">
                <h3 className="font-semibold text-hoverC">{product.title}</h3>
                <h4 className="text-textC font-semibold">${product.price}</h4>
              </div>
              {/* <h4 className="text-gray-500 text-[14px] pt-1">Category: {product.category}</h4> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  </Container>
</div>
    </>
  )
}

export default Shop


