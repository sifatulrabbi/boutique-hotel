import React from "react";
import _ from "lodash";

const InputGroup = (props) => {
  return (
    <div className={`w-full flex flex-col gap-1 ${props.className}`}>
      <label
        htmlFor={props.name}
        className="text-sm flex flex-row items-start font-bold"
      >
        {props.label}
        {props.required && <span className="text-red-400">*</span>}
      </label>
      <input
        className="bg-white w-full rounded-xl border-[1px] focus:border-primary-400 px-4 py-2 outline-none"
        {..._.omit(props, "className")}
        id={props.id}
      />
    </div>
  );
};

export default InputGroup;
