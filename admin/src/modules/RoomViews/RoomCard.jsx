import React from "react";
import UpdateRoom from "./UpdateRoom";
import {useRoomsCrud} from "../../hooks";

import Chip from "../../components/Chip";
import {BsPencil, BsTrash} from "react-icons/bs";

const RoomCard = ({room}) => {
  const [showModal, setShowModal] = React.useState(false);

  const {removeRoomById} = useRoomsCrud();

  function handleShowModal() {
    setShowModal(true);
  }

  function handleHideModal() {
    setShowModal(false);
  }

  return (
    <div className="flex flex-col justify-start gap-4 lg:gap-8 p-4 lg:p-6 bg-white rounded-3xl">
      {/* Image */}
      <img
        src={room.img}
        alt={room.name}
        height={500}
        width={500}
        className="max-w-full min-h-[150px] h-[150px] object-cover rounded-xl"
      />

      {/* Content */}
      <div className="flex flex-col gap-4 justify-start h-full">
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
        <div className="flex flex-row items-center justify-between mt-auto">
          <Chip label={room.type} />
          <div className="flex flex-row items-center gap-4">
            <button
              className="btn-primary bg-red-400 hover:bg-red-600 px-3 py-3 text-sm gap-2"
              onClick={() => removeRoomById(room.id)}
            >
              <BsTrash />
            </button>
            <button
              className="btn-primary px-3 py-3 text-sm gap-2"
              onClick={handleShowModal}
            >
              <BsPencil />
            </button>
          </div>
        </div>
      </div>

      {/* Update modal */}
      <UpdateRoom
        id={room.id}
        roomData={room}
        show={showModal}
        onClose={handleHideModal}
      />
    </div>
  );
};

export default RoomCard;
