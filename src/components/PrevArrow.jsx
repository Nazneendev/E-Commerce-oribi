import React from 'react'
import { MdOutlineArrowBackIos } from "react-icons/md";
const PrevArrow = (props) => {
    const { onClick } = props;
  return (
   
   
      <div className={"text-4xl text-hoverC absolute top-1/2 left-7 z-10 -translate-y-1/2 "} onClick={onClick}>
        <MdOutlineArrowBackIos/>
      </div>
    );
 
}

export default PrevArrow
