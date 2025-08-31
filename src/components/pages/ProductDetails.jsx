import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";
import Container from "../Container";
import { useDispatch } from "react-redux";
import { addtocart } from "../../slices/addtocartSlice";

const ProductDetails = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);


  let dispatch=useDispatch()
 let handleAddToCart = () => {
  if (product) {
    dispatch(addtocart({
      title: product.title,
      price: product.price,
      image: product.thumbnail,
      quantity: 1
    }));
  }
};


  useEffect(() => {
    async function fetchProduct() {
      try {
        let res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center py-10 text-lg">Loading...</p>;

  return (
   <>
   <div className="pt-[150px]">
  <Container>
 <div className=" max-w-6xl m-auto px-6 py-16 ">
      
    
      <div className="flex justify-center items-center">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>

     
      <div>
        <h1 className="text-3xl font-bold pt-10 text-gray-800">{product.title}</h1>
        <p className="text-gray-600 mt-4 lg:w-[790px] text-[16px] font-medium leading-relaxed">{product.description}</p>

        <p className="text-2xl font-semibold text-hoverC mt-6">
          ${product.price}
        </p>

       
        <div className="flex gap-4 mt-8">
        <div onClick={handleAddToCart}>
 <button className="flex items-center gap-2 bg-gray-200 text-hoverC px-5 py-3 rounded-xl shadow hover:bg-gray-300 transition">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
         
          <button className="flex items-center gap-2 bg-gray-200 text-hoverC px-5 py-3 rounded-xl shadow hover:bg-gray-300 transition">
            <FaHeart /> Wishlist
          </button>
          <button className="flex items-center gap-2 bg-gray-200 text-gray-800 px-5 py-3 rounded-xl shadow hover:bg-gray-300 transition">
            <BiGitCompare /> Compare
          </button>
        </div>
      </div>
      <div className="flex justify-between pt-5">
  <h3 className='text-hoverC font-semibold font-dm'>{product.title}</h3>
  <h4 className='text-textC font-medium font-dm'>${product.price}</h4>
</div>

    </div>
    </Container>
   </div>
 x
   </>
  
   
  );
};

export default ProductDetails;

