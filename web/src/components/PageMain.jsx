import React from 'react';

/**
 *
 * @param {{children: React.ReactNode; className: string}} param0
 * @returns
 */
const PageMain = ({children, className}) => {
  return (
    <main
      className={`w-full min-h-screen px-container bg-gray-100 mt-[70px] ${className}`}
    >
      {children}
    </main>
  );
};

export default PageMain;
