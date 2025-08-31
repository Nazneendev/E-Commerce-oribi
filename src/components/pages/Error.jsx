import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'

const Error = () => {
  return (
    <>
    <Container>
 <div className='py-[100px]'>
      <h3 className='text-[120px] text-textC font-bold '>404</h3>
      <h4 className='text-[25px] text-hoverC font-bold '>Page Not Found</h4>
    
     <Link to={"/"}>
      <button className='bg-hoverC text-white px-6 py-3 rounded-md mt-5 hover:bg-textC font-dm font-semibold '>Go to Home</button>
     </Link>
    </div>
    </Container>

    </>
   
  )
}

export default Error