import React from 'react';
import {  } from '../assets/images';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/meenahSlicer';
import { ToastContainer, toast } from 'react-toastify';

export const ProductCard = ({product}) => {

  const navigate = useNavigate();

  const _id = product.id;

  const handleDetails=()=>{
    navigate(`/product/${_id}`, {
      state: {item: product}
    });
  }

  const dispatch = useDispatch();
  return (
    <div className='group relative'>
      <div onClick={handleDetails} className='w-full sm:h-40 md:h-60 cursor-pointer overflow-hidden'>
        <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={product.image} alt="" />
      </div>
      <div className='w-full border-[1px] px-2 py-4 flex justify-between items-center'>
        <div>
          <h2 className='font-titleFont font-bold text-xs'>{product.name}</h2>
        </div>
        <div className='flex justify-end gap-4 relative overflow-hidden w-32 text-sm'>
           <p className='font-semibold text-xs transform group-hover:translate-x-24 transition-transform duration-500 flex items-center'><span><TbCurrencyNaira/></span>{product.price}</p>
          <p onClick={()=> dispatch(addToCart({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: 1,
            description: product.description,
          }))&& toast.success(`${product.name} is added to cart`) } 
          className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 left-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 text-xs'>add to cart <span><HiOutlineArrowSmRight /></span></p>
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>{product.category}</p>
      </div>
      <ToastContainer containerId='productCard'
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
