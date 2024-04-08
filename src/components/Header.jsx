import React, { useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { logoDark } from '../assets/images';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import {  signOut, getAuth } from 'firebase/auth';
import { removeUser } from '../redux/meenahSlicer';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showSignOut, setShowSignOut]=useState(false)

    const auth = getAuth()
    const handleLogout=()=>{
        signOut(auth).then(()=>{
            toast.success("you are outta!")
            dispatch(removeUser());
            setTimeout(()=>{
                navigate("/login")
            },1500)
        })
        .catch((error)=>{
            console.log(error);
        })
    }

        

    const productData = useSelector((state)=>state.meenah.productData);
    const userinfo = useSelector((state)=> state.meenah.userinfo)
  return (
    <div className='w-full h-20 bg-white border border-b-gray-800 font-titleFont sticky top-0 z-50'>
        <div className='sm:w-full sm:px-5 md:max-w-screen-lg h-full mx-auto flex items-center justify-between'>
            <Link to='/'>
                <div>
                    <img className='w-28' src={logoDark} alt="Meenah logo" />
                </div>
            </Link>
            <div className='flex items-center gap-8'>
            <ul className='flex item-center gap-8 sm:hidden md:inline-flex'>
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
                    <div>
                    <img onClick={()=> setShowSignOut(!showSignOut)} className='w-8 h-8 rounded-full cursor-pointer relative' src={userinfo ?userinfo.image :<AccountCircleIcon/> } alt="" />
                    { showSignOut && (
                            <button onClick={handleLogout} className='absolute '>log out</button>
                        
                    )}
                    </div>


                {userinfo && <p className='sm:hidden md:block font-titleFont font-semibold underline underline-offset-2 text-base'>{userinfo.name}</p>}
                <div className='sm:block md:hidden'>
                <MobileMenu/>
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
