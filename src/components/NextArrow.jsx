import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";

const NextArrow = (props) => {
    const { onClick } = props;
  return (
   
 
    <div className={"text-4xl text-hoverC absolute top-1/2 right-7 -translate-y-1/2"} onClick={onClick}>
        <MdArrowForwardIos/>
    </div>
  );
  
}

export default NextArrow