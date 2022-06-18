import React from "react";
import recoil from "recoil";
import {requestsState} from "../atoms";
import PageWrapper from "../components/PageWrapper";
import ReservationCard from "../modules/RequestCard";
import {v4} from "uuid";

const Requests = () => {
  const requests = recoil.useRecoilValue(requestsState);

  return (
    <PageWrapper className="gap-6 pt-[80px]">
      {requests.map((request) => (
        <ReservationCard key={v4()} {...request} allowReview />
      ))}
    </PageWrapper>
  );
};

export default Requests;
