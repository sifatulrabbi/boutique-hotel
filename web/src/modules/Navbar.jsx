import React, {useState} from "react";
import Logo from "../components/Logo";
import {NavLink} from "react-router-dom";
import {v4} from "uuid";
import {showLoginModalState} from "../atoms";
import {useSetRecoilState} from "recoil";

const navLinks = [
  {name: "Home", path: "/", type: "link"},
  {name: "About", path: "/about", type: "link"},
  {name: "Rooms", path: "/rooms", type: "link"},
  {name: "Contact", path: "/contact", type: "link"},
  {name: "Locations", path: "/locations", type: "link"},
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const setLoginModal = useSetRecoilState(showLoginModalState);

  function menuToggler() {
    setOpen((prev) => !prev);
  }

  return (
    <header className="z-[1000] fixed top-0 right-0 left-0 h-[70px] bg-white px-container flex flex-row justify-between items-center border-b-[1px] border-gray-100">
      {/* Logo */}
      <Logo />
      {/* nav menu button */}
      <button
        className="relative w-[35px] h-[35px] flex flex-col justify-center items-center gap-1 lg:hidden"
        onClick={menuToggler}
      >
        <div
          className={`w-full h-1 rounded-3xl bg-black absolute left-1/2 -translate-x-1/2 top-1/2 
          transition-transform duration-300 
          ${
            open
              ? "rotate-45 -translate-y-1/2"
              : "rotate-0 -translate-y-[-0.3rem]"
          }`}
        />
        <div
          className={`w-full h-1 rounded-3xl bg-black absolute left-1/2 -translate-x-1/2 top-1/2 
          transition-transform duration-300 
           ${
             open
               ? "-rotate-45 -translate-y-1/2"
               : "rotate-0 -translate-y-[0.5rem]"
           }`}
        />
      </button>
      {/* Menu */}
      <div
        className={`fixed top-[60px] right-0 left-0 bottom-0 flex justify-start items-start 
        bg-white w-full transition-transform duration-300 
        ${open ? "-translate-x-0" : "-translate-x-full"}
        lg:relative lg:items-center lg:-translate-x-0 lg:top-0 lg:w-max`}
      >
        {/* First part | menu buttons */}
        <div className="flex flex-col justify-start items-start w-full px-6 gap-4 mt-12 lg:flex-row lg:mt-0 lg:gap-8 lg:items-center">
          {navLinks.map((link) => (
            <NavLink
              key={v4()}
              to={link.path}
              className={({isActive}) =>
                link.type === "button"
                  ? "px-6 py-3 text-white bg-primary-400 font-bold rounded-3xl w-full text-center hover:bg-primary-700 transition-colors duration-300"
                  : `w-full py-2 font-bold hover:text-primary-400 transition-colors duration-300  
              ${isActive ? "text-textPrimary" : "text-textLight"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            className="px-6 py-3 text-white bg-primary-400 font-bold rounded-3xl w-full text-center hover:bg-primary-700 transition-colors duration-300"
            onClick={() => setLoginModal(true)}
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
