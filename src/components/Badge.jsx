import React from 'react'

const Badge = ({className,badgeText}) => {
  return (
   
        <div className={`py-2 px-8 bg-hoverC w-[90px] text-white text-[14px] font-dm font-bold ${className}`}>{badgeText}</div>
   
  )
}

export default Badge