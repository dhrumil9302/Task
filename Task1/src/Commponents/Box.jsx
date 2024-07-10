import React, { useState } from "react";
import Dropdown from "./Dropdown";
import ButtonComponent from "./ButtonComponent";

const Box = ({ title, buttonLabel, textFieldPlaceholder, dropdownOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <p className="mb-4 text-center">{title}</p>
      <input
        type="text"
        placeholder={textFieldPlaceholder}
        className="border mb-4 w-full p-2 rounded-md"
      />
      <ButtonComponent
        onClick={toggleDropdown}
        className="mb-4 w-full"
      >
        {buttonLabel}
      </ButtonComponent>
      <Dropdown width="w-56" dataset={dropdownOptions} />
    </div>
  );
};

export default Box;
