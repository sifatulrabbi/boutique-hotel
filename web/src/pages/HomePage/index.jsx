import React from 'react';
import PageMain from '../../components/PageMain';
import HeroSection from './HeroSection';
import RoomsSection from './RoomsSection';
import FeaturesSection from './FeaturesSection';

const HomePage = () => {
  return (
    <PageMain>
      <HeroSection />
      <div className='my-[10vh]' />
      <RoomsSection />
      <div className='my-[10vh]' />
      <FeaturesSection />
    </PageMain>
  );
};

export default HomePage;
