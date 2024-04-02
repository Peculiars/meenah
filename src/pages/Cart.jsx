import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { shopping } from '../assets/images';                                  
import { CartItem } from '../components/CartItem';
import { TbCurrencyNaira } from "react-icons/tb";

export const Cart = () => {
  const productData = useSelector((state)=>state.meenah.productData);
  const [totalAmount, setTotalAmount] = useState(0)

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
  
  return (
    <div>
      <video className='w-full h-60 object-cover' src={shopping}></video>
      <div className='max-w-screen-lg mx-auto py-20 flex justify-between'>
        <CartItem/>
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart total</h2>
            <p className='flex items-center gap-4 text-base'>Subtotal <span className='font-titleFont font-bold text-lg flex items-center'><TbCurrencyNaira/>{(totalAmount.toLocaleString())}</span></p>
            <p className='flex items-start gap-4 text-sm'>Shipping address <span>25, Ondo street, Apapa road, Oyingbo, Lagos state.</span></p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>Total <span className='text-xl font-bold flex items-center'><TbCurrencyNaira/>{(totalAmount.toLocaleString())}</span></p>
          <button className='bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'>proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}
