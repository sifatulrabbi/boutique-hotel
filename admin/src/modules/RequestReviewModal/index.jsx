import React from "react";
import {BsXLg} from "react-icons/bs";
import {v4} from "uuid";
import {useOverlappedRequests} from "../../hooks";
import SmallRequestView from "./SmallRequestView";
import ConfirmModal from "./ConfirmModal";
import CancelModal from "./CancelModal";

const ReviewRequestModal = ({
  id,
  onClose,
  clientName,
  clientEmail,
  cost,
  total,
  checkIn,
  checkOut,
}) => {
  const {overlaps} = useOverlappedRequests(id);
  const [confirm, setConfirm] = React.useState(false);
  const [cancel, setCancel] = React.useState(false);

  function showConfirmState() {
    setConfirm(true);
  }

  function showCancelState() {
    setCancel(true);
  }

  return (
    <>
      <div className="z-[21] fixed flex flex-col gap-4 w-[90%] lg:w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl bg-white shadow-lg">
        <button
          className="fixed top-4 right-4 text-red-500 text-lg"
          onClick={onClose}
        >
          <BsXLg />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr] gap-4">
          {/* Details view */}
          <div className="flex flex-col gap-8 border-b-[1px] md:border-b-0 md:border-r-[1px] border-gray-200 pb-4">
            <div className="flex flex-col">
              <span className="font-extrabold text-textPrimary">
                {clientName}
              </span>
              <span className="text-sm">{clientEmail}</span>
            </div>

            <span className="text-sm">
              <span className="font-extrabold text-lg text-textPrimary">
                ${cost}
              </span>
              /day
            </span>

            <div className="flex flex-col gap-4 text-sm">
              <span>
                Check in
                <br />
                <span className="text-base font-bold text-textPrimary">
                  {checkIn.toDateString()}
                </span>
              </span>
              <span>
                Check out
                <br />
                <span className="text-base font-bold text-textPrimary">
                  {checkOut.toDateString()}
                </span>
              </span>
            </div>

            <span className="text-textPrimary">
              Total
              <br />
              <span className="text-lg font-extrabold">${total}</span>
            </span>
          </div>

          {/* Overlaps view */}
          <div className="flex flex-col">
            <span className="inline-block mb-4 text-lg text-textPrimary font-bold">
              Overlaps
            </span>
            {/* Overlaps cards */}
            {overlaps.length < 1 ? (
              <div>No overlaps.</div>
            ) : (
              overlaps.map((item) => <SmallRequestView key={v4(0)} {...item} />)
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-row justify-between items-center">
          <button className="btn-secondary" onClick={showCancelState}>
            Remove
          </button>
          <button className="btn-primary" onClick={showConfirmState}>
            Accept
          </button>
        </div>
      </div>
      <div className="fixed z-[20] top-0 left-0 right-0 bottom-0 bg-black/50" />

      <ConfirmModal show={confirm} onClose={onClose} />
      <CancelModal show={cancel} onClose={onClose} />
    </>
  );
};

export default ReviewRequestModal;
