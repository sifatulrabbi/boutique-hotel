import React from "react";
import Chip from "../components/Chip";
import {useRecoilValue} from "recoil";
import {roomsViewIndex} from "../atoms";
import RoomCardBookingSection from "./RoomCardBookingSection";

const RoomCard = ({
  index,
  name,
  description,
  cost,
  type,
  img,
  id,
  notHidden,
  showButton,
}) => {
  const roomIndex = useRecoilValue(roomsViewIndex);
  const [showBooking, setShowBooking] = React.useState(false);

  function toggleShow() {
    setShowBooking((prev) => !prev);
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
          {showButton && (
            <button
              className="btn-secondary w-full md:w-max mt-auto"
              onClick={toggleShow}
            >
              Check availability
            </button>
          )}
        </div>
      </div>
      {notHidden && <RoomCardBookingSection show={showBooking} rate={cost} />}
    </div>
  );
};

export default RoomCard;
