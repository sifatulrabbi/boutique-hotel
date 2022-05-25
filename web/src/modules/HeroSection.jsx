import React from 'react';
import {heroImg} from '../images';
import QuickBookingCard from './QuickBookingCard';

const HeroSection = () => {
  return (
    <div className=''>
      <img
        src={heroImg}
        alt=''
        className='rounded-3xl max-h-[80vh] w-full object-cover'
      />
      <QuickBookingCard className='-translate-y-1/4' />
    </div>
  );
};

export default HeroSection;
