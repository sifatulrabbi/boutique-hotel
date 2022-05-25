import React from 'react';
import {v4} from 'uuid';
import Chip from '../../../components/Chip';
import {useRecoilValue} from 'recoil';
import {roomsViewIndex} from '../../../atoms';

/**
 * @name RoomCard
 * @description Rooms view card for the home page
 *
 * @param {{index: number; title: string; desc: string[]; rate: number; img: string}} param0
 * @returns
 */
const RoomCard = ({index, title, desc, rate, type, img}) => {
  const roomIndex = useRecoilValue(roomsViewIndex);

  return (
    <div
      className={`flex-col bg-white rounded-3xl gap-2 transition-all duration-300 lg:flex-row 
      ${index === roomIndex ? 'opacity-100 flex' : 'opacity-0 hidden'}`}
    >
      {/* image part */}
      <img
        src={img}
        alt=''
        className='rounded-3xl object-cover h-[280px] md:w-[50vw]'
      />
      {/* content part */}
      <div className='flex flex-col justify-start lg:justify-between items-start gap-4 p-5'>
        <h4 className='font-bold text-textPrimary text-lg'>{title}</h4>
        <p className='text-sm leading-6'>
          {desc.map((str) => (
            <React.Fragment key={v4()}>
              <span>{str}</span>
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className='flex flex-row justify-start items-center gap-4'>
          <Chip label={type} />
          <Chip label={`$${rate}/night`} />
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
