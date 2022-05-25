import React from 'react';

const QuickBookingButton = ({primaryLabel, secondaryLabel, className}) => {
  return (
    <button
      className={`flex flex-col gap-1 w-full p-4 rounded-3xl hover:bg-gray-50 ${className}`}
    >
      <span className='font-bold text-sm'>{primaryLabel}</span>
      <span className='text-textSecondary text-xs'>{secondaryLabel}</span>
    </button>
  );
};

export default QuickBookingButton;
