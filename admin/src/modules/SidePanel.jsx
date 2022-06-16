import React from "react";
import {NavLink} from "react-router-dom";
import {FaPaperPlane, FaBell, FaHome, FaBars, FaTimes} from "react-icons/fa";
import {showSidePanelState} from "../atoms";
import recoil from "recoil";
import {v4} from "uuid";

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
  const [show, setShow] = recoil.useRecoilState(showSidePanelState);

  /**
   * Toggle the side panel
   */
  function toggleSidePanel() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <button
        className={`fixed top-6 bg-white text-textPrimary p-3 rounded-r-full transition-all duration-300 text-2xl z-[10] 
        ${show ? "left-[70vw]" : "left-0"}`}
        onClick={toggleSidePanel}
      >
        {show ? <FaTimes /> : <FaBars />}
      </button>

      {/* Side panel */}
      <aside
        className={`fixed p-6 left-0 top-0 bottom-0 w-[70vw] lg:w-[20vw] bg-white z-[10] lg:translate-x-0 transition-transform duration-300 
        ${show ? "transition-x-0" : "-translate-x-full"}`}
      >
        {linksButtons.map(({label, icon, path}) => (
          <NavLink
            key={v4()}
            to={path}
            className={({isActive}) =>
              `w-full text-lg flex items-center flex-row gap-6 p-4 hover:bg-gray-50 rounded-xl 
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
