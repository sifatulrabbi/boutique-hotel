import React from 'react';
import {heroImg} from '../images';
import QuickBookingCard from './QuickBookingCard';

const HeroSection = () => {
  return (
    <div className='flex flex-col'>
      <img
        src={heroImg}
        alt=''
        className='rounded-3xl max-h-[80vh] w-full object-cover'
      />
      <QuickBookingCard className='-translate-y-1/4' />

      <div className='flex flex-col justify-center items-center lg:mt-[10vh]'>
        <span className='font-extrabold text-2xl lg:text-4xl text-textPrimary'>
          Make your holidays
        </span>
        <span className='font-extrabold leading-[0.9] text-[68px] lg:text-8xl text-primary-400'>
          Special
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
