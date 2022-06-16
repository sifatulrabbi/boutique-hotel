import React from "react";
import Card from "../../components/Card";

const RequestsCard = ({
  clientEmail,
  clientName,
  checkIn,
  checkOut,
  roomId,
  cost,
  total,
}) => {
  return (
    <Card className="flex-row items-center">
      {/* Client info section */}
      <div className="flex flex-col gap-2 items-start border-b-[1px] borer-gray-100 md:border-l-[1px] md:border-b-0">
        <span className="text-textPrimary font-bold">{clientName}</span>
        <span className="text-sm">{clientEmail}</span>
      </div>
    </Card>
  );
};

export default RequestsCard;
