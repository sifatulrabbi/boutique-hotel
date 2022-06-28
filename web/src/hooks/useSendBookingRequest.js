import React from "react";
import recoil from "recoil";
import {
  startDateState,
  endDateState,
  selectedMonthState,
  selectedRoomState,
} from "../atoms";
import axios from "axios";
import {getApiUrl} from "../utils";

export function useSendBookingRequest() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [checkInDate, setCheckInDate] = recoil.useRecoilState(startDateState);
  const [checkOutDate, setCheckOutDate] = recoil.useRecoilState(endDateState);
  const [selectedRoomId, setSelectedRoomId] =
    recoil.useRecoilState(selectedRoomState);
  const [selectedMonthIndex, setSelectedMonthIndex] =
    recoil.useRecoilState(selectedMonthState);

  function handleEmail(e) {
    setEmail(e.currentTarget.value);
  }

  function handleName(e) {
    setName(e.currentTarget.value);
  }

  async function sendBookingRequest() {
    if (selectedMonthState < 0 || selectedRoomId < 0) {
      console.error(
        "No month or room selected. Please select your room and booking date before submitting booking request",
      );
      return false;
    }

    const today = new Date();
    const checkIn = new Date(
      today.getFullYear(),
      selectedMonthIndex,
      checkInDate,
    );
    const checkOut = new Date(
      today.getFullYear(),
      selectedMonthIndex,
      checkOutDate,
    );

    const resp = await axios.post(getApiUrl("/requests"), {
      roomId: selectedRoomId,
      monthIndex: selectedMonthIndex,
      checkIn: checkIn,
      checkOut: checkOut,
      clientName: name,
      clientEmail: email,
    });

    if (resp.data.success) {
      console.log(resp.data.data);

      // Clear selection
      setSelectedMonthIndex(-1);
      setCheckInDate(0);
      setCheckOutDate(0);
      setSelectedRoomId(-1);
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
