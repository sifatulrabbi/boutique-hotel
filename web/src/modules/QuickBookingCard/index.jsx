import React from "react";
import {Link} from "react-router-dom";
import QuickBookingButton from "./QuickBookingButton";
import DateView from "./DateView";
import {months} from "../../utils";

/**
 * @name QuickBookingCard
 * @description Quick booking card to act as a CTA (call to action). Users can quickly select their
 * desired date of check-in and check-out and proceed to the room reservation room by clicking
 * the 'Check available rooms'.
 *
 * @param {{className?: string}} param0
 * @returns {JSX.Element}
 */
const QuickBookingCard = ({className}) => {
  const today = new Date();
  const lastDay = new Date(today.getFullYear(), today.getMonth() + 3, 0);

  return (
    <div
      className={`bg-white flex flex-col rounded-3xl w-full max-w-[90%] mx-auto lg:flex-row lg:justify-between lg:items-center p-4 ${className}`}
    >
      <QuickBookingButton
        primaryLabel={"Check-in"}
        secondaryLabel={"Select a date"}
      />
      <QuickBookingButton
        primaryLabel={"Check-out"}
        secondaryLabel={"Select a date"}
      />

      {/* from and to view section */}
      <div className="flex flex-row gap-4 justify-start items-end h-max px-4 py-4 lg:py-0 w-max mb-6 lg:mb-0">
        <DateView date={today.getDate()} month={months[today.getMonth()]} />
        <span className="text-sm text-textSecondary">to</span>
        <DateView date={lastDay.getDate()} month={months[lastDay.getMonth()]} />
      </div>

      {/* Booking button to proceed to the room booking page */}
      <Link to="/rooms">
        <button className="btn-primary w-full lg:w-max py-4">
          Check available rooms
        </button>
      </Link>
    </div>
  );
};

export default QuickBookingCard;
