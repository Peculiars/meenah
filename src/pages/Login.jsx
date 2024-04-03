import React, { useState } from 'react'
import {  google, facebook, login } from '../assets/images';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


export const Login = () => {

    const [email, setEmail]=useState("");
    const [errEmail, setErrEmail]=useState("")

    const handleEmail=(e)=>{
        setEmail(e.target.value);
        setErrEmail("");
    }

    const emailValidation=(email)=>{
        return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }

    const handlelogin=(e)=>{
        e.preventDefault();
        if(!email){
            setErrEmail("enter your email address")
        }else{
            if(!emailValidation(email)){
                setErrEmail("enter a valid email")
            }
        }
    }



    console.log(email)
  return (
    <div className='w-full h-screen bg-gray-200 pt-10'>
        <div className='bg-white max-w-screen-lg mx-auto h-[95%] grid grid-cols-6 shadow-md rounded-3xl'>
           <form className='col-span-3 flex flex-col items-center justify-center'>
                <div className='w-[60%] flex flex-col justify-center'>
                    <div className='mb-6 w-full'>
                        <h1 className='font-titleFont font-extrabold text-3xl text-center'>LOGIN</h1>
                        <p className='text-center text-sm text-gray-500'>Welcome back! Please enter your details.</p>
                    </div>
                    <div>
                        <div className='flex flex-col relative mb-4'>
                            <input type="email" placeholder='email' onChange={handleEmail} value={email} className='py-2 pl-6 pr-2 text-xs border-[1.5px] border-black outline-none placeholder:text-xs text-black lowercase'/>
                            <span className='absolute top-3 left-2 text-xs text-black'><MdEmail /></span>
                        { errEmail &&(
                            <p className='text-[0.65rem] text-red-600 font-bodyFont'>{errEmail}</p>
                        )}
                        </div>

                        <div className='flex flex-col relative'>
                            <input type="password" placeholder='password' className='mb-4 py-2 pl-6 pr-2 text-xs border-[1.5px] border-black outline-none placeholder:text-xs text-black'/>
                            <span className='absolute top-3 left-2 text-xs text-black'><RiLockPasswordFill /></span>
                        </div>
                    </div>
                    <button onClick={handlelogin} className=' bg-black text-white py-2'>Login</button>
                    <div className='flex flex-col justify-center gap-3 mt-5'>
                        <button className='border-[1.5px] border-gray-500 mt-3 rounded-3xl flex items-center justify-center py-1'>
                            <img className='w-5' src={google} alt="" />
                            <span className='text-xs'>Log in with Google</span>
                        </button>
                        <button className='border-[1.5px] border-gray-500 rounded-3xl flex items-center justify-center py-1'>
                            <img className='w-5' src={facebook} alt="" />
                            <span className='text-xs pl-1'>Log in with Facebook</span>
                        </button>
                    </div>
                    <p className='text-xs text-gray-500 mt-10'>Don't have an account?
                    <Link to='/registration'>
                        <span className='font-bold text-black cursor-pointer pl-1'>Sign up</span>
                    </Link>
                    </p>
                </div>
                
           </form>
            <div className='col-span-3 bg-black flex items-center justify-center rounded-3xl'>
                <img className='w-80 h-80 object-cover rounded-tl-3xl rounded-br-3xl' src={login} alt="" />
            </div>
        </div>
    </div>
  )
}
