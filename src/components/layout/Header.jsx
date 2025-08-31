import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import Bar from "../../assets/icons/Bar";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
 <div className="bg-white ">
    <Container>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-300 rounded-box z-1 mt-3 w-52 p-2 shadow">

<Link to="/">
          <li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Home</li>
          </Link>
           <Link to="/shop">
           <li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Shop</li>
           </Link>
           <Link to="/about">
           <li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">About</li>
           </Link>
           <Link to="/contact">
           <li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Contacts</li>
           </Link>
           <Link to="/journal">
           <li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Journal</li>
           </Link>
              
             
            </ul>
          </div>
         <Link to="/">
         <Image imgSrc={logo} imgAlt={logo}/>

         </Link>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-x-12">
          <Link to="/">
          <li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Home</li>
          </Link>
           <Link to="/shop">
           <li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Shop</li>
           </Link>
           <Link to="/about">
           <li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">About</li>
           </Link>
           <Link to="/contact">
           <li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Contacts</li>
           </Link>
           <Link to="/journal">
           <li className="text-[14px] font-dm text-textC font-bold hover:text-hoverC">Journal</li>
           </Link>
            
          </ul>
        </div>
        
      </div>
      </Container>


    </div>


    <div className="py-[25px] bg-bgColor">
  <Container>
    <Flex className="flex-wrap justify-between items-center gap-y-4">
      
      {/* Category */}
      <div className="flex items-center lg:ml-0 sm:ml-6 md:ml-5  gap-x-2">
        <Bar />
        <h3 className="font-dm font-medium text-black">Category</h3>
      </div>

     
      <div className="relative w-full sm:w-[250px] md:w-[400px] lg:w-[500px] xl:w-[700px]">
        <input
          type="text"
          placeholder="Search Products"
          className="bg-white p-4 w-full text-textC rounded"
        />
        <FaSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-black" />
      </div>

    
      <div className="flex items-center sm:pr-5 gap-x-4">
        <FaUser />
        <TiArrowSortedDown />
        <Link to="/cart">
 <FaShoppingCart />
        </Link>
       
      </div>

    </Flex>
  </Container>
</div>
    </div>
   
    
    
      
    </>
  );
};

export default Header;
