import React from "react";
import axios from "axios";
import {getApiUrl} from "../utils";

import recoil from "recoil";
import {selectedRoomAndDateInfo} from "../atoms";

export function useSendBookingRequest() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const roomAndDateInfo = recoil.useRecoilValue(selectedRoomAndDateInfo);

  function handleEmail(e) {
    setEmail(e.currentTarget.value);
  }

  function handleName(e) {
    setName(e.currentTarget.value);
  }

  async function sendBookingRequest() {
    const payload = {
      roomId: roomAndDateInfo.roomId,
      checkIn: roomAndDateInfo.startDate,
      checkOut: roomAndDateInfo.endDate,
      clientName: name,
      clientEmail: email,
    };
    const resp = await axios.post(getApiUrl("/requests"), payload);

    if (resp.data.success) {
      console.log(resp.data.data);

      window.location.href = "/";
      return true;
    }

    return false;
  }

  return {
    sendBookingRequest,
    handleName,
    handleEmail,
    name,
    email,
  };
}
