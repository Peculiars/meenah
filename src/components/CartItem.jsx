import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoCloseOutline } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../redux/meenahSlicer';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export const CartItem = () => {
    const productData = useSelector((state)=>state.meenah.productData);

    const dispatch = useDispatch();
  return (
    <div className='md:w-2/3 sm:w-full '>
        <div className='w-full'>
            <h2 className='font-titleFont text-2xl'>shopping cart</h2>
        </div>
        <div>
            { productData.map((item)=>(
                <div key={item.id} className='grid md:grid-cols-3 sm:grid-cols-2 mt-6'>
                    <div className=' col-span-1 mb-3'>
                        <div className='flex items-center'>
                            <p><IoCloseOutline onClick={()=> dispatch(deleteItem(item.id)) & toast.error(`${item.name} is removed`)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300'/></p>
                            <img className='w-32 h-32 object-cover mx-2' src={item.image} alt="" />
                        </div>
                        <div className='flex md:flex-row sm:flex-col mt-3 items-center md:justify-around sm:justify-center'>
                            <h2 className='text-sm'>{item.name}</h2>
                            <p className='text-sm flex items-center'><span><TbCurrencyNaira/></span>{item.price}</p>
                        </div>
                    </div>
                    
                    <div className=' md:col-span-2 sm:col-span-1 flex md:flex-row sm:flex-col items-center md:justify-evenly sm:justify-center md:gap-3 sm:gap-0'>
                    <div className='flex items-center justify-between text-gray-500 gap-4 border p-2'>
                        <p className='text-sm'>Quantity</p>
                        <div className='flex items-center gap-4 text-sm font-semibold'>
                            <button onClick={()=> dispatch(decrementQuantity(item.id))}  className='border h-5 font-normal text-lg flex items-center justify-center px-2  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=> dispatch(incrementQuantity(item.id))} className='border h-5 font-normal text-lg flex items-center justify-center px-2  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                        </div>
                    </div>
                    <p className='flex items-center w-14 text-sm mt-3'><span><TbCurrencyNaira/></span>{parseInt(item.price.replace(",", "") * item.quantity).toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=> dispatch(resetCart())& toast.error(`Your Cart is Empty!`)} className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300'>Reset Cart</button>
        <Link to='/'>
            <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'> <span><HiArrowNarrowLeft /></span>go shopping</button>
        </Link>
        <ToastContainer containerId='removeItem'
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
