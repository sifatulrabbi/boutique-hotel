import React from "react";
import {BsXLg} from "react-icons/bs";
import Overlay from "./Overlay";

const Modal = ({children, show, onClose, className}) => {
  return (
    <>
      <div
        className={`bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-3xl shadow-lg z-[20] flex-col gap-4 w-full max-w-[90vw] md:max-w-md 
        ${show ? "flex" : "hidden"} 
        ${className}`}
      >
        {children}
        <button
          className="absolute top-2 right-2 text-base text-red-500 hover:bg-gray-100 p-2 rounded-full"
          onClick={onClose}
        >
          <BsXLg />
        </button>
      </div>
      <Overlay show={show} />
    </>
  );
};

export default Modal;
