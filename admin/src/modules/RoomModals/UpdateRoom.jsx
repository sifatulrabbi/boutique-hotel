import React from "react";
import {useRoomsCrud} from "../../hooks";

import FormWrapper from "../../components/FormWrapper";
import InputGroup from "../../components/FormGroups/InputGroup";
import SelectGroup from "../../components/FormGroups/SelectGroup";
import TextareaGroup from "../../components/FormGroups/TextareaGroup";
import Modal from "../../components/Modal";

const UpdateRoom = ({show, onClose}) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [cost, setCost] = React.useState("");
  const [type, setType] = React.useState("");

  const {createRoom} = useRoomsCrud();

  async function handleSubmit(e) {
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
          placeholder="Room's name/title"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <TextareaGroup
          label="Description"
          name="description"
          placeholder="Room's description"
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
        <InputGroup
          label="Image URL"
          name="imageUrl"
          placeholder="Room's image URL"
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.currentTarget.value)}
        />
        <InputGroup
          label="Cost (USD/night)"
          name="cost"
          type="number"
          placeholder="Room's cost (per night)"
          value={cost}
          onChange={(e) => setCost(e.currentTarget.value)}
        />
        <SelectGroup
          label="Type"
          name="type"
          options={[
            {name: "single", value: "single"},
            {name: "double", value: "double"},
          ]}
          value={type}
          onChange={(e) => setType(e.currentTarget.value)}
        />
        <button type="submit" className="btn-primary w-full text-sm mt-2">
          Add
        </button>
      </FormWrapper>
    </Modal>
  );
};

export default UpdateRoom;
