import React from "react";
import axios from "axios";
import {getApiUrl} from "../utils";

export function useSendBookingRequest() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleEmail(e) {
    setEmail(e.currentTarget.value);
  }

  function handleName(e) {
    setName(e.currentTarget.value);
  }

  async function sendBookingRequest(roomId, checkIn, checkOut) {
    const resp = await axios.post(getApiUrl("/requests"), {
      roomId: roomId,
      checkIn: checkIn,
      checkOut: checkOut,
      clientName: name,
      clientEmail: email,
    });

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
