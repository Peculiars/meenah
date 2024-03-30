import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logoDark } from '../assets/images';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='w-full h-20 bg-white border border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-lg h-full mx-auto flex items-center justify-between'>
            <Link to='/'>
                <div>
                    <img className='w-28' src={logoDark} alt="Meenah logo" />
                </div>
            </Link>
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='headerListItem'>Home</li>
                    <li  className='headerListItem'>Pages</li>
                    <li  className='headerListItem'>Shop</li>
                    <li  className='headerListItem'>Element</li>
                    <li  className='headerListItem'>Blog</li>
                </ul>
                <div className='relative'>
                    <p><ShoppingBagOutlinedIcon/> <span className='absolute -top-1.5 -left-1 font-bold font-titleFont text-sm'>0</span></p>
                </div>
                <p><AccountCircleIcon/></p>
            </div>
        </div>
        
    </div>
  )
}
