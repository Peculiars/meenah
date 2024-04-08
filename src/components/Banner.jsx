import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { image2, image3, image4, image5, image10 } from '../assets/images';

export const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 : currentSlide - 1);
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : currentSlide + 1);
    }

    const images = [image4, image5, image3, image2, image10];

    return (
        <div className='w-full h-auto overflow-x-hidden'>
            <div className='w-screen sm:h-[200px] md:h-[450px] relative'>
                <div style={{ transform: `translateX(-${currentSlide * 100}vw)`, width: `${images.length * 100}vw` }} className='h-full flex transition-transform duration-1000'>
                    <div className="w-screen h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover' loading='priority' src={images[0]} alt="Slide 0" />
                        <p className='absolute sm:top-5 md:top-24 sm:left-5 md:left-24 flex flex-col text-sm'>Dont Miss Out! <span className='sm:text-sm md:text-4xl bg-black text-white font-bold sm:px-1 md:px-3 py-3 '>Score BIG with our 50% off sale!</span> <span className='bg-red-400 p-3 sm:text-sm md:text-lg'>Grab your favorite pairs now <br/> before they're gone!</span></p>
                    </div>
                    <div className="w-screen h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover' loading='priority' src={images[1]} alt="Slide 1" />
                        <p className='absolute sm:top-5 md:top-10 sm:left-5 md:left-10 bg-red-300 sm:text-sm md:text-xl font-semibold p-3'>Style That Sizzles!</p>
                        <p className='absolute sm:bottom-5 md:bottom-10 sm:right-5 md:right-10 sm:text-sm md:text-xl p-3 font-semibold bg-yellow-300'>Embrace the season with our trend</p>
                    </div>
                    <div className="w-screen h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover' loading='priority' src={images[2]} alt="Slide 2" />
                        <p className='absolute sm:top-20 md:top-40 sm:left-20 md:left-60 bg-black text-white sm:text-sm md:text-xl font-medium p-3'>Elevate Your Fashion Sense with</p>
                        <p className='absolute sm:top-28 md:top-52 sm:left-40 md:left-80 font-bold sm:text-sm md:text-2xl p-3 bg-yellow-300'>Meenah Fashion Room</p>
                    </div>
                    <div className="w-screen h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover' loading='priority' src={images[3]} alt="Slide 3" />
                        <p className='absolute sm:top-10 md:top-40 sm:left-10 md:left-40 sm:text-sm md:text-3xl font-bold p-3 sm:w-40 md:w-80 text-white bg-black'>Step up your swag game with our dope colection of kicks!</p>
                    </div>
                    <div className="w-screen h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover' loading='priority' src={images[4]} alt="Slide 4" />
                        <p className='absolute p-3 sm:text-xs md:text-2xl font-semibold sm:top-16 md:top-32 sm:left-14 md:left-20 bg-black text-white'>A Sole Brand to Remember</p>
                        <p className='absolute sm:top-24 md:top-44 md:left-40 bg-red-400 p-3 sm:text-xs md:text-2xl font-semibold'>Your Number 1 Best Shopper</p>
                    </div>
                </div>
                <div className='absolute left-0 right-0 sm:bottom-2 md:bottom-10 flex justify-center gap-8 w-fit mx-auto'>
                    <div onClick={prevSlide} className='w-12 h-10 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <ArrowBackIcon />
                    </div>
                    <div onClick={nextSlide} className='w-12 h-10 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <ArrowForwardIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}
