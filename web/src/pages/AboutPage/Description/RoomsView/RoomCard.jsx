import React from "react";
import {Link} from "react-router-dom";

const RoomCard = ({title, type, rate, id, img}) => {
  return (
    <div className="flex flex-row rounded-3xl bg-white p-4 gap-4 w-full max-w-[350px]">
      <img
        src={img}
        alt=""
        className="w-[80px] min-h-full object-cover rounded-xl"
      />

      {/* Contents */}
      <div className="flex flex-col">
        <h6 className="text-sm font-bold text-textPrimary mb-2">{title}</h6>
        <span className="text-sm">{type}</span>
        <span className="text-sm flex flex-row">
          Starting from <span className="font-bold">${rate}/night</span>
        </span>
        <Link
          to={`/rooms`}
          className="mt-2 text-primary-400 text-left text-sm font-bold"
        >
          View Room
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
