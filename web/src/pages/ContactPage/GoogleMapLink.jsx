import React from 'react';
import {gmap} from '../../images';

const GoogleMapLink = () => {
  return (
    <div className='w-full relative rounded-3xl overflow-hidden before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-white/80 max-w-full'>
      <img src={gmap} alt='' className='object-cover w-full h-auto' />
      <button className='absolute bottom-4 right-4 bg-primary-100 text-primary-400 font-bold px-6 py-3 rounded-3xl hover:text-primary-700'>
        Google Map Location
      </button>
    </div>
  );
};

export default GoogleMapLink;
