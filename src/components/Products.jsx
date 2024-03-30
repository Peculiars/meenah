import React from 'react';
import { ProductCard } from './ProductCard';
import productData from '../api/productData.json'

export const Products = () => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4 pb-10'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>shopping everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>Find the perfect combo of elegance and comfort in our shoe collection, tailored to match your unique vibe. From chill vibes to glam looks, explore our collection of kicks that fit any mood or occasion. </p>
        </div>
        <div className='max-w-screen-lg mx-auto grid grid-cols-4 gap-10'>
            {
              productData.map((item)=>(
                <ProductCard key={item.id} product={item}/>
              ))
            }
        </div>
    </div>
  )
}
