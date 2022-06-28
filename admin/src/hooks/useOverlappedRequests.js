import React from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import recoil from "recoil";
import {requestsState} from "../atoms";

dayjs.extend(isBetween);

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
      if (req.id === selectedRequest.id) return false;
      if (req.roomId !== selectedRequest.roomId) return false;

      const selectedCheckIn = dayjs(selectedRequest.checkIn);
      const selectedCheckOut = dayjs(selectedRequest.checkOut);

      const reqCheckIn = dayjs(req.checkIn);
      const reqCheckOut = dayjs(req.checkOut);

      // If the requests start date is in between the currently selected request's dates
      if (
        selectedCheckIn.isBetween(reqCheckIn, reqCheckOut, "day") ||
        selectedCheckIn.isSame(reqCheckIn, "day") ||
        selectedCheckIn.isSame(reqCheckOut, "day") ||
        selectedCheckOut.isSame(reqCheckIn, "day") ||
        selectedCheckOut.isSame(reqCheckOut, "day") ||
        selectedCheckOut.isBetween(reqCheckIn, reqCheckOut, "day") ||
        reqCheckIn.isBetween(selectedCheckIn, selectedCheckOut, "day") ||
        reqCheckOut.isBetween(selectedCheckIn, selectedCheckOut, "day") ||
        reqCheckOut.isSame(selectedCheckIn, "day") ||
        reqCheckOut.isSame(selectedCheckOut, "day") ||
        reqCheckIn.isSame(selectedCheckIn, "day") ||
        reqCheckIn.isSame(selectedCheckOut, "day")
      ) {
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
