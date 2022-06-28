// Dependencies
import React from "react";
import {v4} from "uuid";
// Component
import PageWrapper from "../components/PageWrapper";
import {BsPlusLg} from "react-icons/bs";
import CreateRoom from "../modules/RoomViews/CreateRoom";

// States
import recoil from "recoil";
import {roomsState} from "../atoms";
import RoomCard from "../modules/RoomViews/RoomCard";

const Rooms = () => {
  const rooms = recoil.useRecoilValue(roomsState);

  const [showCreateRoom, setShowCreateRoom] = React.useState(false);

  function handleShowCreateRoom() {
    setShowCreateRoom(true);
  }

  function handleCreateRoomClose() {
    setShowCreateRoom(false);
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
          <RoomCard key={v4()} room={room} />
        ))}
      </div>

      <CreateRoom show={showCreateRoom} onClose={handleCreateRoomClose} />
    </PageWrapper>
  );
};

export default Rooms;
