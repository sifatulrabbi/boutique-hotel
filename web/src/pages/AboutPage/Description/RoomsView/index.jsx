import React from 'react';
import {useRecoilValue} from 'recoil';
import {roomsSelector} from '../../../../atoms';
import RoomCard from './RoomCard';
import {v4} from 'uuid';

const RoomsView = () => {
  const rooms = useRecoilValue(roomsSelector);

  return (
    <div className='flex flex-col gap-6 items-end'>
      {rooms.map((room) => (
        <RoomCard key={v4()} {...room} />
      ))}
    </div>
  );
};

export default RoomsView;
