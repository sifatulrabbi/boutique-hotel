// Dependencies
import React from "react";
import {v4} from "uuid";
// Component
import PageWrapper from "../components/PageWrapper";
import Chip from "../components/Chip";
import {BsPencil, BsPlusLg} from "react-icons/bs";
import CreateRoom from "../modules/RoomModals/CreateRoom";

// States
import recoil from "recoil";
import {roomsState} from "../atoms";

const Rooms = () => {
  const rooms = recoil.useRecoilValue(roomsState);

  const [showCreateRoom, setShowCreateRoom] = React.useState(false);
  const [showUpdateRoom, setShowUpdateRoom] = React.useState(false);

  function handleShowCreateRoom() {
    setShowCreateRoom(true);
  }

  function handleCreateRoomClose() {
    setShowCreateRoom(false);
  }

  function handleShowUpdateRoom() {
    setShowUpdateRoom(false);
  }

  function handleUpdateRoomClose() {
    setShowUpdateRoom(false);
  }

  return (
    <PageWrapper className="flex flex-col gap-6 p-5 mt-2">
      {/* Header */}
      <div className="flex flex-row items-center justify-end">
        <button
          className="btn-primary gap-4 text-sm"
          onClick={handleShowCreateRoom}
        >
          <BsPlusLg /> Add a Room
        </button>
      </div>
      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Room cards */}
        {rooms.map((room) => (
          <div
            key={v4()}
            className="grid grid-cols-1 gap-4 lg:gap-8 p-4 lg:p-6 bg-white rounded-3xl"
          >
            {/* Image */}
            <img
              src={room.img}
              alt={room.name}
              className="max-w-full h-auto object-cover rounded-xl"
            />

            {/* Content */}
            <div className="flex flex-col gap-4">
              <h4 className="flex flex-row text-lg font-extrabold text-textPrimary">
                {room.name}
              </h4>
              <p className="text-sm leading-[1.6]">{room.description}</p>
              <div className="flex flex-row gap-2 items-center">
                <span className="font-extrabold text-sm">Cost</span>
                <span className="text-xs">
                  <span className="text-primary-400 text-base font-extrabold">
                    ${room.cost}
                  </span>
                  /night
                </span>
              </div>
              {/* Bottom */}
              <div className="flex-grow" />
              <div className="flex flex-row items-center justify-between">
                <Chip label={room.type} />
                <button className="btn-primary px-3 py-3 text-sm gap-2">
                  <BsPencil />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CreateRoom show={showCreateRoom} onClose={handleCreateRoomClose} />
    </PageWrapper>
  );
};

export default Rooms;
