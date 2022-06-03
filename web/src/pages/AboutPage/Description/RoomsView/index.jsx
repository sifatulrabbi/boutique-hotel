import React from 'react';
import {useRecoilValue} from 'recoil';
import {roomsSelector} from '../../../../atoms';
import RoomCard from './RoomCard';
import {v4} from 'uuid';
import {Link} from 'react-router-dom';

const RoomsView = () => {
  const rooms = useRecoilValue(roomsSelector);

  return (
    <div className='flex flex-col gap-6 items-end'>
      <RoomCard key={v4()} {...rooms[0]} />
      <RoomCard key={v4()} {...rooms[1]} />
      <Link to='/rooms' className='btn-secondary text-sm w-full max-w-[350px]'>
        View all rooms
      </Link>
    </div>
  );
};

export default RoomsView;
