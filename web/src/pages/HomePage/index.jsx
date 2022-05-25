import React from 'react';
import PageMain from '../../components/PageMain';
import HeroSection from './HeroSection';
import RoomsSection from './RoomsSection';

const HomePage = () => {
  return (
    <PageMain>
      <HeroSection />
      <div className='my-[10vh]' />
      <RoomsSection />
    </PageMain>
  );
};

export default HomePage;
