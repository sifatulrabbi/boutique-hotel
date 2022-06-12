import React from "react";

const Chip = ({label}) => {
  return (
    <div className="rounded-3xl bg-gray-200 text-textSecondary font-bold text-sm px-3 py-1 w-max">
      {label}
    </div>
  );
};

export default Chip;
