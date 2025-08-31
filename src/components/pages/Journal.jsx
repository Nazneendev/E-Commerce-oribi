import React from 'react'
import Container from '../Container'
import { useDispatch, useSelector } from 'react-redux'
import { counterwork } from '../../slices/counterSlice';


const Journal = () => {
  let data=useSelector((state)=>state.counter.value)
 
  let dispatch=useDispatch();


  let handleIncrement=()=>{
   dispatch(counterwork(1))
  }
 
  return (
    <>
 <Container>
 <div className='pt-[200px]'>
 <h1>Counter {data}</h1>
      <button onClick={handleIncrement}>Increment</button>
 </div>
     
     
    </Container>
    </>
   
  )
}

export default Journal
