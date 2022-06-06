import React from 'react';
import CalendarView from './CalendarView';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {totalSelectedDatesState, showLoginModalState} from '../atoms';

const RoomCardBookingSection = ({show, rate}) => {
  const totalDays = useRecoilValue(totalSelectedDatesState);
  const setShowLoginModal = useSetRecoilState(showLoginModalState);

  return (
    <div className={`w-full px-5 ${show ? 'block' : 'hidden'}`}>
      <div className='border-t-[1px] border-gray-200 py-6 flex flex-col md:flex-row gap-8 w-full'>
        {/* Calendar view */}
        <CalendarView />
        <div className='w-full text-sm flex flex-col'>
          <span className='w-full flex flex-row justify-between border-b-[1px] border-gray-300 py-2'>
            <span className='font-bold'>Total nights: </span>
            <span>{totalDays.length}</span>
          </span>
          <span className='w-full flex flex-row justify-between py-2 border-b-[1px] border-gray-300'>
            <span className='font-bold'>
              ${rate} x {totalDays.length}
            </span>
            <span>${rate * totalDays.length}</span>
          </span>
          <span className='w-full flex flex-row justify-between py-2 border-b-[1px] border-gray-300'>
            <span className='font-bold'>Service fee:</span>
            <span>${totalDays.length * 10}</span>
          </span>
          <span className='w-full flex flex-row justify-between py-2 border-b-[1px] border-gray-300'>
            <span className='font-bold'>Cleaning fee:</span>
            <span>${totalDays.length * 5}</span>
          </span>
          <span className='w-full flex flex-row text-base text-textPrimary justify-between py-2 mb-6'>
            <span className='font-bold'>Total:</span>
            <span>
              $
              {rate * totalDays.length +
                totalDays.length * 5 +
                totalDays.length * 10}
            </span>
          </span>
          <button
            className='btn-primary w-full mt-auto disabled:bg-gray-500'
            disabled={totalDays.length < 1}
            onClick={() => setShowLoginModal((prev) => !prev)}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCardBookingSection;
