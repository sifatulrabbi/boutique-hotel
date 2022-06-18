// Dependencies
import React from "react";
// Components
import Overlay from "../../components/Overlay";
// States

const ConfirmModal = ({show, onClose}) => {
  return (
    <>
      <div
        className={`z-[30] flex-col gap-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg 
        ${show ? "flex" : "hidden"}`}
      >
        {/* Message */}
        <span className="text-textPrimary max-w-sm">
          Confirming this reservation will automatically cancel all the
          overlapped reservation requests
        </span>

        {/* Actions */}
        <div className="flex flex-row gap-4 w-full justify-between">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={onClose}>
            Okay
          </button>
        </div>
      </div>
      {show && <Overlay z={25} />}
    </>
  );
};

export default ConfirmModal;
