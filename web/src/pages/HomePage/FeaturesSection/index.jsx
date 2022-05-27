import React from 'react';
import {v4} from 'uuid';
import FeatureCard from './FeatureCard';
import {AiOutlineWifi, AiOutlineCar} from 'react-icons/ai';
import {MdOutlinePool} from 'react-icons/md';
import {GiDesk} from 'react-icons/gi';
import {Link} from 'react-router-dom';

const features = [
  {title: 'Free Wifi', Icon: AiOutlineWifi},
  {title: 'Free Parking', Icon: AiOutlineCar},
  {title: 'Private Pool', Icon: MdOutlinePool},
  {title: 'Dedicated Workspace', Icon: GiDesk},
];

const FeaturesSection = () => {
  return (
    <section className='w-full flex flex-col'>
      <h3 className='text-xl text-textPrimary font-bold text-center mb-8'>
        Our Features
      </h3>
      {/* Cards */}
      <div className='flex flex-col justify-center gap-6 items-center md:flex-row flex-wrap mb-6'>
        {features.map((item) => (
          <FeatureCard key={v4()} {...item} />
        ))}
      </div>
      <span className='flex flex-row w-full justify-center items-center text-textPrimary font-bold text-lg'>
        Learn more
        <Link to='/about' className='text-primary-400 block ml-2'>
          about us
        </Link>
      </span>
    </section>
  );
};

export default FeaturesSection;
