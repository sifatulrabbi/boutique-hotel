import React from "react";
import Card from "../components/Card";
import {months} from "../utils";
import recoil from "recoil";
import {roomsState} from "../atoms";
import Chip from "../components/Chip";
import ReviewRequestModal from "./RequestReviewModal";

const ReservationCard = ({
  id,
  clientEmail,
  clientName,
  checkIn,
  checkOut,
  roomId,
  cost,
  total,
  allowReview,
  accepted,
  canceled,
}) => {
  // Recoil states
  const rooms = recoil.useRecoilValue(roomsState);
  // React states
  const [room, setRoom] = React.useState();
  const [showModal, setShowModal] = React.useState(false);

  function closeModal() {
    setShowModal(false);
  }

  /**
   * Find the room with the Id to show the information about the room
   */
  function getRoomById(id) {
    const r = rooms.find((room) => room.id === id);
    setRoom(r);
  }

  React.useEffect(() => {
    getRoomById(roomId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rooms, roomId]);

  return (
    <Card className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr_1fr_1fr] items-center p-0">
      {/* Rooms information */}
      {room && (
        <div className="flex flex-col gap-2 text-textPrimary p-4 pb-0 md:pb-4">
          <span>{room.name}</span>
          <Chip label={room.type} />
        </div>
      )}

      {/* Client info section */}
      <div className="flex flex-col gap-1 items-start border-b-[1px] borer-gray-100 h-full md:border-r-[1px] md:border-b-0 p-4 pt-0 md:pt-4">
        <span className="text-textPrimary font-bold">{clientName}</span>
        <span className="text-sm">{clientEmail}</span>
      </div>

      {/* Dates */}
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="flex flex-col justify-center items-center h-full py-1 w-[62px] bg-gray-100">
          <span className="font-bold">
            {new Date(checkIn).getDate() < 10
              ? `0${new Date(checkIn).getDate()}`
              : new Date(checkIn).getDate()}
          </span>
          <span className="uppercase text-xs tracking-wider">
            {months[new Date(checkIn).getMonth()]}
          </span>
        </div>
        <span>To</span>
        <div className="flex flex-col justify-center items-center h-full py-1 w-[62px] bg-gray-100">
          <span className="font-bold">
            {new Date(checkOut).getDate() < 10
              ? `0${new Date(checkOut).getDate()}`
              : new Date(checkOut).getDate()}
          </span>
          <span className="uppercase text-xs tracking-wider">
            {months[new Date(checkOut).getMonth()]}
          </span>
        </div>
      </div>

      {/* Order details (Cost, duration, and total) */}
      <div className="flex flex-col gap-2 items-center  pb-4 lg:p-0">
        <span className="text-sm flex flex-row gap-1 items-center">
          Cost
          <strong className="font-black text-textPrimary">${cost}</strong>/
          <small>night</small>
        </span>
        <span className="text-sm flex flex-row gap-1 items-center">
          Total
          <strong className="text-base font-black text-textPrimary">
            ${total}
          </strong>
          <small>Inc VAT</small>
        </span>
      </div>

      {/* Action button */}
      {allowReview && (
        <div className="flex lg:justify-end p-4">
          <button
            className={`btn-primary w-full md:w-max disabled:bg-transparent 
            ${canceled ? "text-red-600" : "disabled:text-primary-400"}`}
            onClick={() => setShowModal(true)}
            disabled={accepted || canceled}
          >
            {canceled ? "Canceled" : accepted ? "Resolved" : "Review"}
          </button>
          {showModal && (
            <ReviewRequestModal
              onClose={closeModal}
              id={id}
              clientEmail={clientEmail}
              clientName={clientName}
              checkIn={new Date(checkIn)}
              checkOut={new Date(checkOut)}
              roomId={roomId}
              cost={cost}
              total={total}
            />
          )}
        </div>
      )}
    </Card>
  );
};

export default ReservationCard;
