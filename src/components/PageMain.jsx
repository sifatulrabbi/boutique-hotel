import React from 'react';

const PageMain = ({children}) => {
  return (
    <main className='w-full min-h-screen px-container bg-gray-100'>
      {children}
    </main>
  );
};

export default PageMain;
