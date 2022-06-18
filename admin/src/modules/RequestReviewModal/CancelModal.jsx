// Dependencies
import React from "react";
// Components
import Overlay from "../../components/Overlay";

const CancelModal = ({show, onClose}) => {
  return (
    <>
      <div
        className={`z-[30] flex-col gap-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg 
        ${show ? "flex" : "hidden"}`}
      >
        {/* Message */}
        <span className="text-textPrimary max-w-sm">
          Remove the request and send the client an cancelation email?
        </span>

        {/* Actions */}
        <div className="flex flex-row gap-4 justify-between">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <div className="flex flex-row items-center gap-4">
            <button className="btn-primary" onClick={onClose}>
              Custom Email
            </button>
            <button className="btn-primary" onClick={onClose}>
              Okay
            </button>
          </div>
        </div>
      </div>
      {show && <Overlay z={25} />}
    </>
  );
};

export default CancelModal;
