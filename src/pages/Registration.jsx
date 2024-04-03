import React, { useState } from 'react'
import { registration, google, facebook } from '../assets/images';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


export const Registration = () => {

    const [userName, setUserName]=useState("")
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("")

    const [errUserName, setErrUserName]=useState("")
    const [errEmail, setErrEmail]=useState("")
    const [errPassword, setErrPassword] = useState("")

    const handleUsername=(e)=>{
        setUserName(e.target.value);
        setErrUserName("")
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value);
        setErrEmail("")
    }

    const emailValidation=(email)=>{
        return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value);
        setErrPassword("")
    }

    const handleRegistration=(e)=>{
        e.preventDefault();
        if(!userName){
            setErrUserName("Enter a username")
        }
        if(!email){
            setErrEmail("Enter email")
        }else{
            if(!emailValidation(email)){
                setErrEmail("enter a valid email address")
            }
        }
        if(!password){
            setErrPassword("enter password")
        }else{
            if(password.length<6){
                setErrPassword("password must be at least 6 characters")
            }
        }

        if(userName && email && emailValidation(email) && password && password>=6){
            console.log(userName, email, password)
            setEmail("")
            setPassword("")
            setUserName("")
        }

    }
  return (
    <div className='w-full h-screen bg-gray-200 pt-10'>
        <div className='bg-white max-w-screen-lg mx-auto h-[95%] grid lg:grid-cols-6 sm:grid-cols-1 shadow-md rounded-3xl'>
           <form className='col-span-3 flex flex-col items-center justify-center'>
                <div className='w-[60%] flex flex-col justify-center'>
                    <div className='mb-6 w-full'>
                        <h1 className='font-titleFont font-extrabold text-3xl text-center'>SIGN UP</h1>
                        <p className='text-center text-sm text-gray-500'>Welcome! Please enter your details.</p>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center relative mb-4'>
                            <input type="text" placeholder='username' onChange={handleUsername} value={userName} className='py-2 pl-6 pr-2 border-[1.5px] text-xs border-black outline-none placeholder:text-xs placeholder:text-gray-400 text-black' />
                            <span className='absolute top-2.5 left-2 text-xs text-black'><FaUser /></span>
                        { errUserName &&(
                            <p className='text-[0.65rem] text-red-600 font-bodyFont'>{errUserName}</p>
                        )}
                        </div>

                        <div className='flex flex-col relative mb-4'>
                            <input onChange={handleEmail} value={email} type="email" placeholder='email' className='py-2 pl-6 pr-2 text-xs border-[1.5px] border-black outline-none placeholder:text-xs text-black lowercase'/>
                            <span className='absolute top-3 left-2 text-xs text-black'><MdEmail /></span>
                        { errEmail &&(
                            <p className='text-[0.65rem] text-red-600 font-bodyFont'>{errEmail}</p>
                        )}
                        </div>

                        <div className='flex flex-col relative mb-4'>
                            <input type="password" placeholder='password' onChange={handlePassword} value={password} className='py-2 pl-6 pr-2 text-xs border-[1.5px] border-black outline-none placeholder:text-xs text-black'/>
                            <span className='absolute top-3 left-2 text-xs text-black'><RiLockPasswordFill /></span>
                        { errPassword &&(
                            <p className='text-[0.65rem] text-red-600 font-bodyFont'>{errPassword}</p>
                        )}
                        </div>
                    </div>
                    <button onClick={handleRegistration} type='submit' className=' bg-black text-white py-2'>Sign up</button>
                    <div className='flex flex-col justify-center gap-3 mt-5'>
                        <button className='border-[1.5px] border-gray-500 mt-3 rounded-3xl flex items-center justify-center py-1'>
                            <img className='w-5' src={google} alt="" />
                            <span className='text-xs'>Sign up with Google</span>
                        </button>
                        <button className='border-[1.5px] border-gray-500 rounded-3xl flex items-center justify-center py-1'>
                            <img className='w-5' src={facebook} alt="" />
                            <span className='text-xs pl-1'>Sign up with Facebook</span>
                        </button>
                    </div>
                    <p className='text-xs text-gray-500 mt-10 text-center'>Already have an account? 
                        <Link to='/login'>
                            <span className='font-bold text-black cursor-pointer pl-1'>Login</span>
                        </Link>
                    </p>
                </div>
                
           </form>
            <div className='lg:col-span-3 sm:hidden lg:inline-flex bg-black flex items-center justify-center rounded-tr-3xl rounded-br-3xl'>
                <img className='w-80 h-80 object-cover rounded-tr-3xl rounded-bl-3xl' src={registration} alt="" />
            </div>
        </div>
    </div>
  )
}
