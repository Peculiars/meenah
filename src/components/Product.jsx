import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TbCurrencyNaira } from "react-icons/tb";
import { IoIosStar } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/meenahSlicer';
import { ToastContainer, toast } from 'react-toastify';

export const Product = () => {
    const [productDetails, setProductDetails]=useState({})
    const location = useLocation();

    useEffect(()=>{
        setProductDetails(location.state.item);
    },[]);

    let [baseQty, setBaseQty]=useState(1);

    const dispatch = useDispatch();
  return (
    <div>
        <div className='max-w-screen-lg mx-auto my-10 flex gap-10'>
            <div className='relative w-2/5'>
                <img className='w-full h-[450px] object-cover' src={`/${productDetails.image}`} alt="" />
                <div className='absolute top-0 right-0'>
                    <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>{productDetails.category}</p>
                </div>
            </div>
            <div className='w-3/5 flex flex-col justify-center gap-12'>
                <div>
                    <h2 className='text-4xl font-semibold'>{productDetails.name}</h2>
                    <p className='font-medium text-2xl flex items-center mt-3'><span><TbCurrencyNaira/></span> {productDetails.price}</p>
                </div>
                <div className='flex items-center -mt-5 text-base'>
                    <div className='flex'>
                        <IoIosStar />
                        <IoIosStar />
                        <IoIosStar />
                    </div>
                    <p className='text-xs text-gray-500'>(3 Customers review)</p>
                </div>
                <p className='text-sm text-gray-500 -mt-5'>{productDetails.description}</p>
                <div className='flex gap-5'>
                    <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                        <p className='text-sm'>Quantity</p>
                        <div className='flex items-center gap-4 text-sm font-semibold'>
                            <button onClick={()=> setBaseQty(baseQty === 1 ? baseQty = 1 : baseQty - 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                            <span>{baseQty}</span>
                            <button onClick={()=> setBaseQty(baseQty + 1)} className='border h-5 font-normal text-lg flex items-center justify-center px-2  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                        </div>
                    </div>
                    <button onClick={()=> dispatch(addToCart({
                        id: productDetails.id,
                        name: productDetails.name,
                        image: productDetails.image,
                        price: productDetails.price,
                        quantity: baseQty,
                        description: productDetails.description,
                    })) & toast.success(`${productDetails.name} is added to cart`)} className='bg-black text-white px-6 py-3 active:bg-gray-800'>add to cart</button>
                </div>
            </div>
        </div>
        <ToastContainer
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
