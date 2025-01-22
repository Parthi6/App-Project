import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* Hero Left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <p className='font-medium text-sm md:text-base'>
              OUR EXCLUSIVE COLLECTION
            </p>
          </div>
          <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>
            Style with Our Latest Arrivals
          </h1>
          <p className='text-sm md:text-base mt-3'>
            Discover unique fashion pieces crafted for your perfect style.
          </p>
          <div className='flex items-center gap-2 mt-4'>
            <Link to='/collection' className='bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800'>
              Shop Now
            </Link>
            <p className='w-8 md:w-11 h-[1px] bg-[#414141]' ></p>
          </div>
        </div>
      </div>

      {/* Hero Right side */}
      <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Latest Collection" />
    </div>
  );
};

export default Hero;