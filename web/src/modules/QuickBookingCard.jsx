import React from 'react';
import QuickBookingButton from '../components/QuickBookingButton';

/**
 * @name Date
 * @description Date view mini-component only used for displaying date
 *
 * @param {{date: number; month: string}} param0
 * @returns {JSX.Element}
 */
const Date = ({date, month}) => (
  <span className='font-bold text-sm flex flex-row justify-start items-end gap-1'>
    <span className='font-extrabold text-2xl'>
      {date < 10 ? `0${date}` : date}
    </span>
    {month}
  </span>
);

/**
 * @name QuickBookingCard
 * @description Quick booking card to act as a CTA (call to action). Users can quickly select their
 * desired date of check-in and check-out and proceed to the room reservation room by clicking
 * the 'Check available rooms'.
 *
 * @param {{className?: string}} param0
 * @returns {JSX.Element}
 */
const QuickBookingCard = ({className}) => {
  return (
    <div className={`bg-white flex flex-col rounded-3xl ${className}`}>
      <QuickBookingButton
        primaryLabel={'Check-in'}
        secondaryLabel={'Click to select a date'}
      />
      <QuickBookingButton
        primaryLabel={'Check-out'}
        secondaryLabel={'Click to select a date'}
      />

      {/* from and to view section */}
      <div className='flex flex-row gap-4 justify-start items-end p-4 w-max'>
        {/* check in date TODO: this will be programmatic and dynamic */}
        <Date date={12} month={'May'} />
        <span className='text-sm text-textSecondary'>to</span>
        {/* check out date TODO: this will be programmatic and dynamic */}
        <Date date={6} month={'June'} />
      </div>

      {/* Booking button to proceed to the room booking page */}
      <div className='p-4 w-full'>
        <button className='btn-primary w-full'>Check available rooms</button>
      </div>
    </div>
  );
};

export default QuickBookingCard;
