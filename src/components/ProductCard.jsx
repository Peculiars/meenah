import React from 'react';
import {  } from '../assets/images';
import { HiOutlineArrowSmRight } from "react-icons/hi";

export const ProductCard = ({product}) => {
  console.log(product)
  return (
    <div className='group relative'>
      <div className='w-full h-60 cursor-pointer overflow-hidden'>
        <img className='w-full h-full object-cover group-hover:scale-110 duration-500' src={product.image} alt="" />
      </div>
      <div className='w-full border-[1px] px-2 py-4 flex justify-between items-center'>
        <div>
          <h2 className='font-titleFont font-bold text-sm'>{product.name}</h2>
        </div>
        <div className='flex justify-end gap-4 relative overflow-hidden w-32 text-sm'>
           <p className='font-semibold text-sm transform group-hover:translate-x-24 transition-transform duration-500'>{product.price}</p>
          <p className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 left-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 text-sm'>add to cart <span><HiOutlineArrowSmRight /></span></p>
        </div>
      </div>
      <div className='absolute top-0 right-0'>
        <p className='bg-black text-white font-semibold font-titleFont px-6 py-1'>{product.category}</p>
      </div>
    </div>
  )
}