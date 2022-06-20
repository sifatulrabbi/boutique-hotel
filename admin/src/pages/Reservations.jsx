// Dependencies
import React from "react";
import {v4} from "uuid";
// Components
import PageWrapper from "../components/PageWrapper";
import RequestCard from "../modules/RequestCard";
// State
import recoil from "recoil";
import {reservationsState} from "../atoms";

const Reservations = () => {
  const reservations = recoil.useRecoilValue(reservationsState);

  return (
    <PageWrapper className="gap-6 mt-[60px]">
      {reservations.map((reservation) => (
        <RequestCard key={v4()} {...reservation} />
      ))}
    </PageWrapper>
  );
};

export default Reservations;
