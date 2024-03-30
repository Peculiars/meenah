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
            <div className='w-screen h-[450px] relative'>
                <div style={{ transform: `translateX(-${currentSlide * 100}vw)`, width: `${images.length * 100}vw` }} className='h-full flex transition-transform duration-1000'>
                    <div className="w-screen h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover' loading='priority' src={images[0]} alt="Slide 0" />
                        <p className='absolute top-24 left-24 flex flex-col text-sm'>Dont Miss Out! <span className='text-4xl bg-black text-white font-bold px-3 py-3 '>Score BIG with our 50% off sale!</span> <span className='bg-red-400 p-3 text-lg'>Grab your favorite pairs now before they're gone!</span></p>
                    </div>
                    <div className="w-screen h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover' loading='priority' src={images[1]} alt="Slide 1" />
                        <p className='absolute top-10 left-10 bg-red-300 text-xl font-semibold p-3'>Style That Sizzles!</p>
                        <p className='absolute bottom-10 right-10 text-xl p-3 font-semibold bg-yellow-300'>Embrace the season with our trend</p>
                    </div>
                    <div className="w-screen h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover' loading='priority' src={images[2]} alt="Slide 2" />
                        <p className='absolute top-40 left-60 bg-black text-white text-xl font-medium p-3'>Elevate Your Fashion Sense with</p>
                        <p className='absolute top-52 left-80 font-bold text-2xl p-3 bg-yellow-300'>Meenah Fashion Room</p>
                    </div>
                    <div className="w-screen h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover' loading='priority' src={images[3]} alt="Slide 3" />
                        <p className='absolute top-40 left-40 text-3xl font-bold p-3 w-80 text-white bg-black'>Step up your swag game with our dope colection of kicks!</p>
                    </div>
                    <div className="w-screen h-full overflow-hidden relative">
                        <img className='w-full h-full object-cover' loading='priority' src={images[4]} alt="Slide 4" />
                        <p className='absolute p-3 text-2xl font-semibold top-32 left-20 bg-black text-white'>A Sole Brand to Remember</p>
                        <p className='absolute top-44 left-40 bg-red-400 p-3 text-2xl font-semibold'>Your Number 1 Best Shopper</p>
                    </div>
                </div>
                <div className='absolute left-0 right-0 bottom-10 flex justify-center gap-8 w-fit mx-auto'>
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
