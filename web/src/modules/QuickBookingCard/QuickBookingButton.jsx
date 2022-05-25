import React from 'react';

const QuickBookingButton = ({primaryLabel, secondaryLabel, className}) => {
  return (
    <>
      <button
        className={`flex flex-col gap-1 w-full p-4 rounded-3xl hover:bg-gray-50 lg:w-max ${className}`}
      >
        <span className='font-bold text-sm'>{primaryLabel}</span>
        <span className='text-textSecondary text-xs'>{secondaryLabel}</span>
      </button>
      <div className='h-px w-[90%] mx-auto lg:mx-0 lg:h-[3rem] bg-gray-200 lg:w-px' />
    </>
  );
};

export default QuickBookingButton;
