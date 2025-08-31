
import Container from '../Container'
import { IoIosArrowForward } from "react-icons/io";
import Flex from '../Flex';
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { removeFromCart, addtocart, decreaseQuantity } from "../../slices/addtocartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.addtocart.value);
  const dispatch = useDispatch();

   const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  
  return (
   <>
   <div className="py-[100px] pt-[200px]">
  <Container>

<h3 className="text-hoverC font-bold font-dm text-[35px]">Cart</h3>
      <p className='text-textC font-dm text-[12px] mt-5 font-bold flex items-center'>
        Home <IoIosArrowForward/> Cart 
      </p>

      <div className=' lg:w-[1300px] sm:w-[665px] border-2 border-[#F5F5F3] mt-10'>
         
        <div className="h-[70px] bg-[#F5F5F3]">
          <Flex className={"justify-between items-center "}>
            <h3 className="text-[#262626] w-[400px] font-dm text-[16px] font-bold pl-20 pt-5">Product</h3>
            <h3 className="text-[#262626] font-dm text-[16px] font-bold  pt-5">Price</h3>
            <h3 className="text-[#262626] font-dm text-[16px] font-bold  pt-5">Quantity</h3>
            <h3 className="text-[#262626] font-dm text-[16px] font-bold  pt-5">Total</h3>
          </Flex>
        </div>

       {cartItems.map((item, i) => (
        <div key={i} className="flex justify-between items-center gap-5 border-b border-b-gray-300 py-3">
         <div className='flex gap-x-0.5 items-center w-[400px]'>
           <RxCross2
            className="cursor-pointer"
            onClick={() => dispatch(removeFromCart(item))}
          />

          {/* <img src={item.thumbnail} alt={item.title} className="w-5 h-5" /> */}

          <h3 className='font-medium'>{item.title}</h3>
         </div>
          <p className='font-medium'>${item.price}</p>

          <div className="flex justify-between items-center font-medium  gap-2">
            <button
              className="px-2 border-2 hover hover:bg-gray-200 border-textC "
              onClick={() => dispatch(decreaseQuantity(item))}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="px-2 border-2  hover hover:bg-gray-200  border-textC"
              onClick={() => dispatch(addtocart(item))}
            >
              +
            </button>
          </div>

          <p className=" font-bold">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
        
      ))}


      
          <div className="mt-5 text-right">
            <h3 className="text-lg font-bold">
              Subtotal: ${subtotal.toFixed(2)}
            </h3>
          </div>
      </div>








  

    
   </Container>
   </div>
 
   
   </>
  )
}

export default Cart
