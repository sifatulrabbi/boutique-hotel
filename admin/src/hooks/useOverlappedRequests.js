import React from "react";
import recoil from "recoil";
import {requestsState} from "../atoms";

/**
 * This hook will find all the overlapped requests. In other words this will find the requests that has the same date.
 * @param {number} id Id of the selected request
 */
export function useOverlappedRequests(id) {
  // Recoil states
  const allRequests = recoil.useRecoilValue(requestsState);
  // React states
  const [selectedRequest, setSelectedRequest] = React.useState(null);
  const [overlaps, setOverlaps] = React.useState([]);

  /**
   * This function finds the currently selected request and updates the state.
   * @param {number} id  id of the selected request
   */
  function findSelectedRequest(id) {
    const requestDoc = allRequests.find((req) => req.id === id);
    setSelectedRequest(requestDoc);
  }

  /**
   * This function finds all the overlapped requests
   */
  function findOverlaps() {
    if (!selectedRequest) return;

    const requests = allRequests.filter((req) => {
      const start = req.checkIn.getTime();
      const end = req.checkOut.getTime();
      const selectedStart = selectedRequest.checkIn.getTime();
      const selectedEnd = selectedRequest.checkOut.getTime();

      if (selectedStart >= start && selectedStart <= end && req.id !== id) {
        return true;
      } else if (selectedEnd >= start && selectedEnd <= end && req.id !== id) {
        return true;
      }

      return false;
    });

    setOverlaps(requests);
  }

  React.useEffect(() => {
    findSelectedRequest(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, allRequests]);

  React.useEffect(() => {
    findOverlaps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRequest]);

  return {overlaps};
}
