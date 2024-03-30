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
                <div style={{transform: `translateX(-${currentSlide * 100}vw)`, width: `${images.length * 100}vw`}} className='h-full flex transition-transform duration-1000'>
                    {images.map((image, index) => (
                        <div key={index} className="w-screen h-full overflow-hidden">
                            <img className='w-full h-full object-cover' loading='priority' src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
                <div className='absolute left-0 right-0 bottom-10 flex justify-center gap-8 w-fit mx-auto'>
                    <div onClick={prevSlide} className='w-12 h-10 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <ArrowBackIcon/>
                    </div>
                    <div onClick={nextSlide} className='w-12 h-10 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                        <ArrowForwardIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
}

