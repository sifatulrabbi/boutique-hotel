import React from "react";
import {NavLink} from "react-router-dom";
import {FaPaperPlane, FaBell, FaHome} from "react-icons/fa";

const linksButtons = [
  {
    label: "Requests",
    path: "/",
    icon: <FaPaperPlane />,
  },
  {
    label: "Reservations",
    path: "/reservations",
    icon: <FaBell />,
  },
  {
    label: "Rooms",
    path: "/rooms",
    icon: <FaHome />,
  },
];

const SidePanel = () => {
  return (
    <>
      <button className={`fixed`}></button>
      <aside className="fixed p-6 pr-0 left-0 top-0 bottom-0 w-[50vw] lg:w-[20vw] shadow-lg md:shadow-none bg-white z-[10] -translate-x-full lg:translate-x-0">
        {linksButtons.map(({label, icon, path}) => (
          <NavLink
            to={path}
            className={({isActive}) =>
              `w-full text-lg flex items-center flex-row gap-6 p-4 hover:bg-gray-50 rounded-l-xl 
        ${isActive ? "text-textPrimary font-bold bg-gray-100" : ""}`
            }
          >
            <span className="text-xl">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </aside>
    </>
  );
};

export default SidePanel;
