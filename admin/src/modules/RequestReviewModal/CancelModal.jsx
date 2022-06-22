// Dependencies
import React from "react";
import {useFetchData} from "../../hooks";
import axios from "axios";
import {getApiUrl} from "../../utils";
// Components
import Overlay from "../../components/Overlay";

const CancelModal = ({show, onClose, requestId}) => {
  const {getRequestsData} = useFetchData();

  async function cancelRequest() {
    try {
      const resp = await axios.delete(getApiUrl(`/requests/${requestId}`));

      if (resp.data.success) {
        await getRequestsData();
        onClose();

        console.log("Request canceled");
      } else {
        console.error("Unable to cancel request");
      }
    } catch (err) {
      console.error(err);
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
          Remove the request and send the client an cancelation email?
        </span>

        {/* Actions */}
        <div className="flex flex-row gap-4 justify-between">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={cancelRequest}>
            Okay
          </button>
        </div>
      </div>
      {show && <Overlay z={25} />}
    </>
  );
};

export default CancelModal;
