import React from "react";

import FormWrapper from "../../components/FormWrapper";
import InputGroup from "../../components/FormGroups/InputGroup";
import SelectGroup from "../../components/FormGroups/SelectGroup";
import Modal from "../../components/Modal";

const UpdateRoom = ({show, onClose}) => {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Modal show={show} onClose={onClose}>
      <h6 className="block font-bold w-full text-center text-textPrimary">
        Add a room
      </h6>
      <FormWrapper onSubmit={handleSubmit}>
        <InputGroup
          label="Name/title"
          name="roomName"
          id="roomName"
          placeholder="Room's name/title"
          required
        />
        <InputGroup
          label="Description"
          name="description"
          id="description"
          placeholder="Room's description"
          required
        />
        <InputGroup
          label="Cost (USD/night)"
          name="cost"
          id="cost"
          type="number"
          placeholder="Room's cost (per night)"
          required
        />
        <SelectGroup
          label="Type"
          name="type"
          id="type"
          required
          options={[
            {name: "single", value: "single"},
            {name: "double", value: "double"},
          ]}
        />
        <button type="submit" className="btn-primary w-full text-sm mt-2">
          Add
        </button>
      </FormWrapper>
    </Modal>
  );
};

export default UpdateRoom;
