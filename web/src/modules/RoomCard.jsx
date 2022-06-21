import React from "react";
import RoomCardBookingSection from "./RoomCardBookingSection";
import Chip from "../components/Chip";
import recoil from "recoil";
import {roomsViewIndex, selectedRoomState} from "../atoms";
import {useBookedDates} from "../hooks";

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
  const [showBooking, setShowBooking] = React.useState(false);

  const roomIndex = recoil.useRecoilValue(roomsViewIndex);
  const setSelectedRoom = recoil.useSetRecoilState(selectedRoomState);

  const {updateBookedDates} = useBookedDates();

  function toggleShow() {
    if (!showBooking) {
      // Update the selected room's index
      setSelectedRoom(id);

      // Update the booking dates and fetch the already booked dates of the month
      updateBookedDates(id)
        .then(() => {
          // Show the booking calendar section
          setShowBooking(true);
        })
        .catch((err) => {
          console.log(err);
          // Do not show the booking calendar section if there is an error while fetching data from the server
          setShowBooking(false);
        });
    } else {
      // Remove the selected room's index
      setSelectedRoom(-1);
      setShowBooking(false);
    }
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
