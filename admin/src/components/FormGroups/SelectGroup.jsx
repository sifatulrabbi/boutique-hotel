import React from "react";
import {v4} from "uuid";
import _ from "lodash";

const SelectGroup = (props) => {
  return (
    <div className={`w-full flex flex-col gap-1 ${props.className}`}>
      <label htmlFor={props.name} className="text-sm">
        {props.label}
      </label>
      <select
        className="bg-white w-full rounded-xl border-[1px] focus:border-primary-400 px-4 py-2 outline-none"
        {..._.omit(props, "className", "options")}
        id={props.id}
      >
        <option value="">Select one</option>
        {props.options.map(({name, value}) => (
          <option key={v4()} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGroup;
