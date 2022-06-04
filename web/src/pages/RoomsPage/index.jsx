import React from 'react';
import PageMain from '../../components/PageMain';
import RoomCard from '../../modules/RoomCard';
import {roomsSelector} from '../../atoms';
import {useRecoilValue} from 'recoil';
import {v4} from 'uuid';

const RoomsPage = () => {
  const rooms = useRecoilValue(roomsSelector);

  return (
    <PageMain className='flex flex-col gap-6 py-5 mb-12'>
      <h3 className='text-2xl font-bold text-textPrimary'>Chose your room</h3>
      {rooms.map((room) => (
        <RoomCard key={v4()} notHidden showButton {...room} />
      ))}
    </PageMain>
  );
};

export default RoomsPage;
