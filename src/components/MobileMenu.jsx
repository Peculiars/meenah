import { useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";



export const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);

    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (e) => {
          if (ref.current && !ref.current.contains(e.target)) {
              setIsMenuOpen(false);
          }
      };

      document.addEventListener('click', handleClickOutside);

      return () => {
          document.removeEventListener('click', handleClickOutside);
      };
  }, []);
  return (
    <div className='w-full relative'>
        <HiMenuAlt2 className='cursor-pointer w-7 h-7' onClick={()=> setIsMenuOpen(!isMenuOpen)}/>
        {isMenuOpen && (
            <div ref={ref} className='w-[300px] h-[400px] absolute bg-white mt-10 right-0'>
              <div>
              <ul className='flex flex-col items-center gap-6 py-10'>
                <li className='headerListItem'><Link to='/'>Home</Link></li>
                <li  className='headerListItem'><Link to='/sneakers'>Sneakers</Link></li>
                <li  className='headerListItem'><Link to='/boots'>Boots</Link></li>
                <li  className='headerListItem'><Link to='/slippers'>Flat Slippers</Link></li>
                <li  className='headerListItem'><Link to='/sandals'>Sandals</Link></li>
            </ul>
              </div>
            
            <span onClick={()=> setIsMenuOpen(!isMenuOpen)} className='absolute top-0 -left-14 bg-black p-4 text-white'><AiOutlineClose /></span>
            </div>
        )}
        
        </div>
  )
}
