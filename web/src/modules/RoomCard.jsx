import React from "react";
import {selectedRoomsBookedDates} from "../utils";

import RoomCardBookingSection from "./RoomCardBookingSection";
import Chip from "../components/Chip";

import recoil from "recoil";
import {
  roomsViewIndex,
  selectedRoomState,
  selectedRoomAndDateInfo,
} from "../atoms";

const RoomCard = ({
  index,
  name,
  description,
  cost,
  type,
  img,
  id,
  notHidden,
}) => {
  const [showBooking, setShowBooking] = React.useState(false);
  const [bookedDates, setBookedDates] = React.useState([]);

  const roomIndex = recoil.useRecoilValue(roomsViewIndex);
  const setSelectedRoom = recoil.useSetRecoilState(selectedRoomState);
  const selectedRoomInfo = recoil.useSetRecoilState(selectedRoomAndDateInfo);

  async function toggleShow() {
    if (showBooking) {
      // Remove the selected room's index
      setSelectedRoom(null);
      setShowBooking(false);
      return;
    }

    const bookedDates = await selectedRoomsBookedDates(id);
    setBookedDates(bookedDates);
    // Update the selected room's index
    setSelectedRoom({id, name, description, cost, type, img});
    selectedRoomInfo((prev) => ({
      ...prev,
      roomId: id,
    }));
    setShowBooking(true);
  }

  return (
    <div className="bg-white rounded-3xl flex flex-col gap-6">
      <div
        className={`flex-col gap-6 transition-all duration-300 md:flex-row p-5 
      ${
        !notHidden
          ? index === roomIndex
            ? "opacity-100 flex"
            : "opacity-0 hidden"
          : "opacity-100 flex"
      }`}
      >
        {/* image part */}
        <img
          src={img}
          alt=""
          className="rounded-2xl object-cover h-[250px] md:h-[315px] md:w-[40vw]"
        />
        {/* content part */}
        <div className="flex flex-col justify-start items-start gap-4">
          <h4 className="font-bold text-textPrimary text-lg">{name}</h4>
          <p className="text-sm leading-6">{description}</p>
          <div className="flex flex-row justify-start items-center gap-4 mb-4">
            <Chip label={type} />
            <Chip label={`$${cost}/night`} />
          </div>

          {/* Optional button for rooms page only */}
          <button
            className="btn-secondary w-full md:w-max mt-auto"
            onClick={toggleShow}
          >
            Check availability
          </button>
        </div>
      </div>
      <RoomCardBookingSection
        show={showBooking}
        rate={cost}
        bookedDates={bookedDates}
      />
    </div>
  );
};

export default RoomCard;
