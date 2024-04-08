import { useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";



export const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);

    const ref = useRef();

    
  return (
    <div className='w-full relative'>
        <HiMenuAlt2 className='cursor-pointer w-7 h-7' onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
        {isMenuOpen && (
          <div className='bg-black bg-opacity-50 w-full h-screen fixed left-0 top-0'>
              <div ref={ref} className='w-[300px] h-[400px] absolute bg-white mt-10 left-10 top-5'>
              <ul className='flex flex-col items-center gap-6 py-10'>
                <li className='headerListItem'><Link to='/'>Home</Link></li>
                <li  className='headerListItem'><Link to='/sneakers'>Sneakers</Link></li>
                <li  className='headerListItem'><Link to='/boots'>Boots</Link></li>
                <li  className='headerListItem'><Link to='/slippers'>Flat Slippers</Link></li>
                <li  className='headerListItem'><Link to='/sandals'>Sandals</Link></li>
            </ul>
            
            <span onClick={()=> setIsMenuOpen(!isMenuOpen)} className='absolute -bottom-20 left-0 right-0 bg-black p-4 w-10 mx-auto text-white'><AiOutlineClose /></span>
            </div>
          </div>
        )}
        
        </div>
  )
}
