import React from 'react';
import PageMain from '../../components/PageMain';
import Carousal from './Carousal';
import Description from './Description';

const AboutPage = () => {
  return (
    <PageMain>
      <Carousal />
      <Description />
    </PageMain>
  );
};

export default AboutPage;
