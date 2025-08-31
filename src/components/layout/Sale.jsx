import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import s1 from "../../assets/s1.png"
import s2 from "../../assets/s2.png"
import s3 from "../../assets/s3.png"
import { Link } from 'react-router-dom'

const Sale = () => {
  return (
   <>
    <div className="py-[100px]">
        <Container>
            <Flex className={"justify-between gap-x-10"}>
                <div className="w-1/2">
               <Link to={"/"}>
               <Image imgSrc={s1} imgAlt={s1} className={"w-full"}/>

               </Link>
              

                </div>

                <div className="w-1/2 ">
                <div className="">
                <Link to={"/"}>
               <Image imgSrc={s2} imgAlt={s2} />

               </Link>
                </div>

                <div className="mt-9">
                <Link to={"/"}>
               <Image imgSrc={s3} imgAlt={s3} />

               </Link>

                </div>
               
                </div>

            </Flex>
        </Container>
    </div>
   </>
  )
}

export default Sale