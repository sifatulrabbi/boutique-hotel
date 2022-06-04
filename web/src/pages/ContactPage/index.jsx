import React from 'react';
import PageMain from '../../components/PageMain';
import Chip from '../../components/Chip';
import {GrLocation} from 'react-icons/gr';
import ContactForm from './ContactForm';
import GoogleMapLink from './GoogleMapLink';

const ContactPage = () => {
  return (
    <PageMain className='pt-5 mb-12'>
      {/* Top part */}
      <div className='mb-12'>
        <h4 className='text-3xl font-bold text-textPrimary mb-4'>
          Boutique Hotel
        </h4>
        <div className='flex flex-row justify-start items-center gap-2'>
          <Chip label={<GrLocation className='text-lg fill-textSecondary' />} />
          <Chip label='Area, City, Location' />
        </div>
      </div>

      {/* Contents */}
      <div className='flex flex-col lg:flex-row gap-12'>
        <ContactForm />
        <GoogleMapLink />
      </div>
    </PageMain>
  );
};

export default ContactPage;
