
import Container from '../Container';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PrevArrow from '../PrevArrow';
import NextArrow from '../NextArrow';
import { Link } from 'react-router-dom';
import Products from '../pages/Products';
import axios from "axios";
import { useEffect, useState } from 'react';


const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,  
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  let [allData, setAllData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await axios.get("https://dummyjson.com/products");
      setAllData(data.data.products);
    }
    fetchData();
  }, []); //added dependency array jate loop infinitely na hoy(mone rakhte hobe je useEffect er moddhe jei variable use kora hoyeche seta dependency array te thakte hobe jate sei variable er value change hole abar useEffect call hoy)

  return (
    <div className="py-[100px]">
      <Container>
        <Slider {...settings}>
          {allData.map(item => (
           <div key={item.id} className="px-4">
  <Link to={`/productdetails/${item.id}`}>
    <Products
      productImg={item.thumbnail}
      badgeText={"New"}
      productTitle={item.title}
      productPrice={item.price}
    />
  </Link>
</div>

          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default NewArrival;
