import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { shopping } from '../assets/images';                                  
import { CartItem } from '../components/CartItem';
import { TbCurrencyNaira } from "react-icons/tb";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { toast, ToastContainer } from 'react-toastify';
import { PaystackCheckout } from '../components/PaystackCheckout';
import { Link } from 'react-router-dom';


export const Cart = () => {
  const productData = useSelector((state)=>state.meenah.productData);
  const userinfo = useSelector((state)=> state.meenah.userinfo)
  const [totalAmount, setTotalAmount] = useState(0);
  const [payNow, setPayNow] = useState(false)

  const handleCheckout=()=>{
    if(userinfo){
      setPayNow(true)
    }else{
      toast.error("Please login to Checkout")
    }
  }

  useEffect(() => {
    if (productData) {
        let totalPrice = 0;
        productData.forEach((item) => {
            const price = parseInt(item.price.replace(",", ""));
            const quantity = item.quantity;
            totalPrice += price * quantity;
        });
        setTotalAmount(totalPrice);
    }
}, [productData]);

    const totalAmnt = totalAmount.toLocaleString();
    const properAmnt = totalAmount;
  
  return (
    <div className='mb-10'>
      <img className='w-full h-60 object-cover' src={shopping} alt=''/>
      <div className='max-w-screen-lg mx-auto py-20 md:flex sm:block justify-between relative mb-10'>
        { productData.length > 0 ? (
          <>
            <CartItem/>
            <div className='md:w-1/3 sm:w-full my-7 bg-[#fafafa] py-6 px-4 relative'>
              <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
                <h2 className='text-2xl font-medium'>Cart total</h2>
                <p className='flex items-center gap-4 text-base'>Subtotal <span className='font-titleFont font-bold text-lg flex items-center'><TbCurrencyNaira/>{(totalAmnt)}</span></p>
                <p className='flex items-start gap-4 text-sm'>Shipping address <span>Enter your shipping address at checkout point.</span></p>
              </div>
              <p className='font-titleFont font-semibold flex justify-between mt-6'>Total <span className='text-xl font-bold flex items-center'><TbCurrencyNaira/>{(totalAmnt)}</span></p>
              <button onClick={handleCheckout} className='bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>proceed to checkout</button>
              <div className='absolute w-full pr-8'>
              {payNow && (
              <PaystackCheckout properAmnt={properAmnt} />
            )}
              </div>
              
            </div>
          </>
        ): (
          <div className='flex flex-col items-center justify-center w-full'>
              <p className='text-base text-yellow-600'>Your Cart is Empty. Plese go back to Shopping and add products to Cart</p>
          <Link to='/'>
            <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'> <span><HiArrowNarrowLeft /></span>go shopping</button>
          </Link>
          </div>
        )}
      </div>
      <ToastContainer containerId='cart'
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'/>
    </div>
  )
}
