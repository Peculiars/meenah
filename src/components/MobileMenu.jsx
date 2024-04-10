import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from "framer-motion"

export const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    return (
        <div className="w-full relative">
            <HiMenuAlt2 className="cursor-pointer w-7 h-7" onClick={() => setIsMenuOpen(!isMenuOpen)} />
            {isMenuOpen && (
                <div className="bg-black bg-opacity-50 w-full h-screen fixed left-0 top-0">
                    <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:.5}} className="w-[250px] px-7 pt-7 h-screen bg-white left-0 top-0">
                      <div>
                          <span onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl "><AiOutlineClose /></span>
                      </div>
                        <ul className="flex flex-col items-start gap-7 py-12">
                            <li className="headerListItem text-xl">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="headerListItem text-xl">
                                <Link to="/sneakers">Sneakers</Link>
                            </li>
                            <li className="headerListItem text-xl">
                                <Link to="/boots">Boots</Link>
                            </li>
                            <li className="headerListItem text-xl">
                                <Link to="/slippers">Flat Slippers</Link>
                            </li>
                            <li className="headerListItem text-xl">
                                <Link to="/sandals">Sandals</Link>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            )}
        </div>
    );
};
