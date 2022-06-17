import React from "react";
import recoil from "recoil";
import {requestsState} from "../atoms";

/**
 * This hook will find all the overlapped requests. In other words this will find the requests that has the same date.
 * @param {number} id Id of the selected request
 */
export function useOverlappedRequests(id) {
  // Recoil states
  const allRequests = recoil.useRecoilState(requestsState);
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
      return true;
    });
  }

  React.useEffect(() => {
    findSelectedRequest(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, allRequests]);

  React.useEffect(() => {}, [selectedRequest]);
}
