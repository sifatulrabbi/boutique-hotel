// Dependencies
import React from "react";
import {useFetchData} from "../../hooks";
import {getApiUrl} from "../../utils";
import axios from "axios";
// Components
import Overlay from "../../components/Overlay";

const ConfirmModal = ({show, onClose, requestId, duplicates}) => {
  const {getReservationsData} = useFetchData();

  async function sendAcceptRequest() {
    const duplicateIds = duplicates.map((duplicate) => duplicate.id);

    const result = await axios.post(
      getApiUrl(`/requests/accept/${requestId}`),
      {
        duplicates: duplicateIds,
      },
    );

    if (result.data.success) {
      console.log("Request accepted");
      console.log(result.data.data);

      await getReservationsData();

      onClose();
    } else {
      console.error("Unable to accept the request");
      console.error(result.data.message);
    }
  }

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
          <button className="btn-primary" onClick={sendAcceptRequest}>
            Okay
          </button>
        </div>
      </div>
      {show && <Overlay z={25} />}
    </>
  );
};

export default ConfirmModal;
