import React from "react";
import Banner from "../layout/Banner";
import Info from "../layout/Info";
import Sale from "../layout/Sale";
import NewArrival from "../layout/NewArrival";
import BestSale from "../layout/BestSale";
import Add from "./Add";



const Home = () => {
  return (
    <>
      <Banner />
      <Info />
      <Sale />
      <NewArrival/>
      <BestSale/>
      <Add/>
     
     
    </>
  );
};

export default Home;
