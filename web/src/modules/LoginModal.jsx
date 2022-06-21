import React from "react";
import {useRecoilState} from "recoil";
import {showLoginModalState} from "../atoms";
import {useSendBookingRequest} from "../hooks";

const LoginModal = () => {
  const [showModal, setShowModal] = useRecoilState(showLoginModalState);

  const {sendBookingRequest, handleEmail, handleName, name, email} =
    useSendBookingRequest();

  function hideModal() {
    setShowModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    sendBookingRequest()
      .then(() => {
        hideModal();
      })
      .catch((err) => {
        console.log(err);
        hideModal();
      });
  }

  return (
    <>
      <div
        className={`flex-col rounded-3xl p-4 bg-white shadow-md z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] min-w-[300px] 
      ${showModal ? "flex" : "hidden"}`}
      >
        <form
          action="submit"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Enter your name"
            className="p-3 rounded-2xl text-textPrimary placeholder:text-textLight w-full bg-gray-100 focus:outline-primary-400"
          />
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email address"
            className="p-3 rounded-2xl text-textPrimary placeholder:text-textLight w-full bg-gray-100 focus:outline-primary-400"
          />
          <button className="btn-primary w-full">Next</button>
        </form>
      </div>
      <div
        className={`bg-black/30 fixed top-0 left-0 right-0 bottom-0 z-[30] ${
          showModal ? "block" : "hidden"
        }`}
      />
    </>
  );
};

export default LoginModal;
