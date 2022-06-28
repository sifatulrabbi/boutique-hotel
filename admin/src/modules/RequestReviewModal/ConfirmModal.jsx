// Dependencies
import React from "react";
import {useFetchData} from "../../hooks";
import {getApiUrl} from "../../utils";
import axios from "axios";
// Components
import Modal from "../../components/Modal";

const ConfirmModal = ({show, onClose, requestId, duplicates}) => {
  const {getReservationsData, getAllData} = useFetchData();

  async function sendAcceptRequest() {
    const duplicateIds = duplicates.map((duplicate) => duplicate.id);
    console.log(duplicateIds, requestId);

    const result = await axios.post(
      getApiUrl(`/requests/accept/${requestId}`),
      {
        duplicates: duplicateIds,
      },
    );

    if (result.data.success) {
      await getAllData();
      await getReservationsData();

      onClose();
    } else {
      console.error("Unable to accept the request");
      console.error(result.data.message);
    }
  }

  return (
    <Modal show={show} onClose={onClose}>
      {/* Message */}
      <span className="text-textPrimary max-w-sm">
        Confirming this reservation will automatically cancel all the overlapped
        reservation requests
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
    </Modal>
  );
};

export default ConfirmModal;
