import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { RiNumber2 } from "react-icons/ri";
import { FaShuttleVan } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

const Info = () => {
  return (
    <>
      <div className="bg-[#F0F0F0] py-[30px]">
        <Container>
          <Flex className={"justify-between items-center "}>
            <div className="flex items-center gap-x-2">
              <RiNumber2 className="text-black" />
              <h3 className="font-dm font-medium text-[#6D6D6D]">
                Two Years Warranty
              </h3>
            </div>
            <div className="flex items-center gap-x-2">
              <FaShuttleVan className="text-black" />
              <h3 className="font-dm font-medium text-[#6D6D6D]">
                Free Shipping
              </h3>
            </div>
            <div className="flex items-center gap-x-2">
              <GiReturnArrow className="text-black" />
              <h3 className="font-dm font-medium text-[#6D6D6D]">
                Return policy in 30 days
              </h3>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Info;
