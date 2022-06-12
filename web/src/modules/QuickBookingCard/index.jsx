import React from "react";
import QuickBookingButton from "./QuickBookingButton";
import DateView from "./DateView";

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
  return (
    <div
      className={`bg-white flex flex-col rounded-3xl w-full max-w-[90%] mx-auto lg:flex-row lg:justify-between lg:items-center p-4 ${className}`}
    >
      <QuickBookingButton
        primaryLabel={"Check-in"}
        secondaryLabel={"Click to select a date"}
      />
      <QuickBookingButton
        primaryLabel={"Check-out"}
        secondaryLabel={"Click to select a date"}
      />

      {/* from and to view section */}
      <div className="flex flex-row gap-4 justify-start items-end h-max px-4 py-4 lg:py-0 w-max mb-6 lg:mb-0">
        {/* check in date TODO: this will be programmatic and dynamic */}
        <DateView date={12} month={"May"} />
        <span className="text-sm text-textSecondary">to</span>
        {/* check out date TODO: this will be programmatic and dynamic */}
        <DateView date={6} month={"June"} />
      </div>

      {/* Booking button to proceed to the room booking page */}
      <button className="btn-primary w-full lg:w-max py-4">
        Check available rooms
      </button>
    </div>
  );
};

export default QuickBookingCard;
