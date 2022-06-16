import React from "react";
import {NavLink} from "react-router-dom";
import {BsHouseFill} from "react-icons/bs";
import {FaPaperPlane} from "react-icons/fa";

const linkButtons = [
  {
    label: "Requests",
    icon: <FaPaperPlane />,
    path: "/admin/requests",
  },
  {
    label: "Reservations",
    icon: <BsHouseFill />,
    path: "/admin/reservations",
  },
  {
    label: "Rooms",
    icon: <BsHouseFill />,
    path: "/admin/rooms",
  },
];

const SideBar = () => {
  return (
    <aside className="fixed top-[70px] left-0 bottom-0 w-[20vw] bg-white p-6 pr-0">
      {linkButtons.map(({icon, label, path}) => (
        <NavLink
          to={path}
          className={({isActive}) =>
            `flex flex-row items-center gap-6 text-lg 
            ${isActive ? "text-textPrimary font-bold" : ""}`
          }
        >
          {icon} {label}
        </NavLink>
      ))}
    </aside>
  );
};

export default SideBar;
