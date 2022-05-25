import React from 'react';

/**
 * @name Chip
 * @description Chip component
 *
 * @param {{label: string}} param0
 * @returns
 */
const Chip = ({label}) => {
  return (
    <div className='rounded-3xl bg-gray-200 text-textPrimary font-bold text-sm px-3 py-1'>
      {label}
    </div>
  );
};

export default Chip;
