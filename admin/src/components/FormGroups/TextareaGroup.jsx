import React from "react";
import _ from "lodash";

const TextareaGroup = (props) => {
  return (
    <div className={`w-full flex flex-col gap-1 ${props.className}`}>
      <label htmlFor={props.name} className="text-sm font-bold">
        {props.label}
        {props.required && <span className="text-red-400">*</span>}
      </label>
      <textarea
        className="bg-white w-full rounded-xl border-[1px] focus:border-primary-400 px-4 py-2 outline-none min-h-[100px]"
        {..._.omit(props, "className")}
        id={props.id}
      ></textarea>
    </div>
  );
};

export default TextareaGroup;
