import React from 'react';
import { logoLight, paystack, visa, mastercard, verve } from '../assets/images';
import { FaTiktok } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineHelpOutline } from "react-icons/md";
import { FaHome } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
        <div className='max-w-screen-lg mx-auto md:grid md:px-10 lg:px-0 sm:flex sm:flex-col sm:items-center sm:gap-10 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col gap-3'>
                <img className='w-32' src={logoLight} alt="" />
                <p>© Meenah Fashion Room inc.</p>
                <div className='flex gap-2'>
                  <img className='w-10' src={visa} alt="" />
                  <img className='w-10' src={mastercard} alt="" />
                  <img className='w-10' src={verve} alt="" />
                  <img className='w-10' src={paystack} alt="" />
                </div>
                <div className='flex gap-5 text-lg text-gray-400'>
                    <FaTiktok className='hover:text-white duration-300 cursor-pointer' />
                    <FaFacebookSquare className='hover:text-white duration-300 cursor-pointer'/>
                    <FaInstagramSquare className='hover:text-white duration-300 cursor-pointer'/>
                    <FaSquareXTwitter className='hover:text-white duration-300 cursor-pointer'/>
                    <FaWhatsappSquare className='hover:text-white duration-300 cursor-pointer'/>
                </div>
            </div>
            <div>
              <h2 className='text-2xl font-semibold text-white mb-4'>Locate us </h2>
              <p>Balogun market, lagos island</p>
              <p>09025802364</p>
              <p>08060995158</p>
              <p>meenahfashionroom@gmail.com</p>
            </div>
            <div>
              <h2 className='text-2xl font-semibold text-white mb-4'>Profile </h2>
              <p className='flex items-center gap-3 hover:text-white cursor-pointer duration-300'><span><IoPerson /></span>my account</p>
              <p className='flex items-center gap-3 hover:text-white cursor-pointer duration-300'><span><IoBagCheckOutline /></span> checkout</p>
              <p className='flex items-center gap-3 hover:text-white cursor-pointer duration-300'><span><FaHome /></span> Order tracking</p>
              <p className='flex items-center gap-3 hover:text-white cursor-pointer duration-300'><span><MdOutlineHelpOutline /></span> help and support</p>
            </div>
            <div className='flex flex-col justify-center'>
              <input className='bg-trsnsparent border px-4 py-2 text-sm outline-none lowercase' placeholder='e-mail' type="text" />
              <button className='text-sm border text-white border-t-0 py-2 hover:bg-gray-900 active:bg-white'>Subscribe</button>
            </div>
            
         </div>
    </div>
  )
}
