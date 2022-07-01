import React from "react";

import {Link} from "react-router-dom";
import Chip from "../components/Chip";

const SmallRoomCard = ({type, cost, img}) => {
  return (
    <Link
      to="/rooms"
      className="flex flex-row rounded-3xl bg-white p-4 gap-4 w-full max-w-[350px]"
    >
      <img
        src={img}
        alt=""
        height={120}
        width={120}
        className="w-[100px] min-h-full object-cover rounded-xl"
      />

      {/* Contents */}
      <div className="flex flex-col gap-2 text-sm md:text-base">
        <Chip label={type} />
        <span className="text-sm flex flex-col md:flex-row flex-wrap gap-1">
          Starting from
          <strong className="font-bold text-sm inline-block">
            ${cost}/night
          </strong>
        </span>
        <button className="text-primary-400 text-left text-sm font-bold">
          View Room
        </button>
      </div>
    </Link>
  );
};

export default SmallRoomCard;
