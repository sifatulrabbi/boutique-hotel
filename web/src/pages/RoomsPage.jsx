import React from "react";
import RoomCard from "../modules/RoomCard";
import {roomsSelector} from "../atoms";
import {useRecoilValue} from "recoil";
import {v4} from "uuid";

const RoomsPage = () => {
  const rooms = useRecoilValue(roomsSelector);

  return (
    <div className="w-full min-h-screen bg-gray-100 mt-[70px] flex flex-col gap-6 py-5 px-3 lg:px-[12vw] mb-12">
      <h3 className="text-2xl font-bold text-textPrimary">Chose your room</h3>
      {/* Rooms */}
      {rooms.map((room) => (
        <RoomCard key={v4()} notHidden showButton {...room} />
      ))}
    </div>
  );
};

export default RoomsPage;
