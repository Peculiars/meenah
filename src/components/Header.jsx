import React from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logoDark } from '../assets/images';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Header = () => {
    const productData = useSelector((state)=>state.meenah.productData);
    const userinfo = useSelector((state)=> state.meenah.userinfo)
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
                    <li className='headerListItem'><Link to='/'>Home</Link></li>
                    <li  className='headerListItem'><Link to='/sneakers'>Sneakers</Link></li>
                    <li  className='headerListItem'><Link to='/boots'>Boots</Link></li>
                    <li  className='headerListItem'><Link to='/slippers'>Flat Slippers</Link></li>
                    <li  className='headerListItem'><Link to='/sandals'>Sandals</Link></li>
                </ul>
                <Link to='/cart'>
                    <div className='relative'>
                        <p><ShoppingBagOutlinedIcon/> <span className='absolute -top-1.5 -left-1 font-bold font-titleFont text-sm'>{productData.length > 0 ? productData.length : 0}</span></p>
                    </div>
                </Link>

                <Link to='/login'>
                    <img className='w-8 h-8 rounded-full' src={userinfo ?userinfo.image :<AccountCircleIcon/> } alt="" />
                </Link>

                {userinfo && <p className='font-titleFont font-semibold underline underline-offset-2 text-base'>{userinfo.name}</p>}
            </div>
        </div>
    </div>
  )
}
