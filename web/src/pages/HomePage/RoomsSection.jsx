import React from "react";
import {roomsSelector} from "../../atoms";
import {useRecoilValue} from "recoil";
import RoomCard from "../../modules/RoomCard";
import {v4} from "uuid";
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";
import {useHomePageRoomView} from "../../hooks";

const RoomsSection = () => {
  const roomsState = useRecoilValue(roomsSelector);
  const {nextRoom, prevRoom} = useHomePageRoomView();

  return (
    <div>
      <h3 className="text-xl font-bold text-textPrimary text-center mb-8">
        Pick a room that best suits your taste
      </h3>
      <div className="relative">
        {/* previous room button */}
        <button
          className="absolute lg:text-lg p-3 lg:p-5 top-[30%] left-0 -translate-x-1/2 rounded-full bg-white shadow-md text-textPrimary"
          onClick={prevRoom}
        >
          <FaChevronLeft />
        </button>
        {/* next room button */}
        <button
          className="absolute lg:text-lg p-3 lg:p-5 top-[30%] right-0 translate-x-1/2 rounded-full bg-white shadow-md text-textPrimary"
          onClick={nextRoom}
        >
          <FaChevronRight />
        </button>
        {roomsState.map((room, index) => (
          <RoomCard key={v4()} {...room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default RoomsSection;
