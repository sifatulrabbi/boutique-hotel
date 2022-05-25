import React from 'react';
// import {heroImg} from '../../images';
import QuickBookingCard from '../../modules/QuickBookingCard';

const HeroSection = () => {
  return (
    <div className='flex flex-col'>
      <img
        src='https://unsplash.com/photos/b_79nOqf95I/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjB8fGd1ZXN0JTIwaG91c2V8ZW58MHx8fHwxNjUzNDg0NjEw&force=true'
        alt=''
        className='rounded-3xl h-[80vh] w-full object-cover'
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
