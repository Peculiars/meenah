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
    <div className='w-2/3 pr-10'>
        <div className='w-full'>
            <h2 className='font-titleFont text-2xl'>shopping cart</h2>
        </div>
        <div>
            { productData.map((item)=>(
                <div key={item.id} className='flex items-center justify-between gap-6 mt-6'>
                    <div className='flex items-center'>
                        <p><IoCloseOutline onClick={()=> dispatch(deleteItem(item.id)) & toast.error(`${item.name} is removed`)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300'/></p>
                        <img className='w-32 h-32 object-cover mx-5' src={item.image} alt="" />
                    </div>
                    <div className=' w-40 flex items-center justify-between'>
                        <h2 className='w-40 text-sm'>{item.name}</h2>
                        <p className='w-10 text-sm flex items-center'><span><TbCurrencyNaira/></span>{item.price}</p>
                    </div>
                    <div className='w-52 flex items-center justify-between text-gray-500 gap-4 border p-3'>
                        <p className='text-sm'>Quantity</p>
                        <div className='flex items-center gap-4 text-sm font-semibold'>
                            <button onClick={()=> dispatch(decrementQuantity(item.id))}  className='border h-5 font-normal text-lg flex items-center justify-center px-2  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=> dispatch(incrementQuantity(item.id))} className='border h-5 font-normal text-lg flex items-center justify-center px-2  hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                        </div>
                    </div>
                    <p className='flex items-center w-14 text-sm'><span><TbCurrencyNaira/></span>{parseInt(item.price.replace(",", "") * item.quantity).toLocaleString()}</p>
                </div>
            ))}
        </div>
        <button onClick={()=> dispatch(resetCart())& toast.error(`Your Cart is Empty!`)} className='bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300'>Reset Cart</button>
        <Link to='/'>
            <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'> <span><HiArrowNarrowLeft /></span>go shopping</button>
        </Link>
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
