import React from "react";

const Switch = ({ isActive, toggleSwitch }) => {
  return (
    <div className="flex items-center justify-center">
      <input
        type="checkbox"
        className="hidden"
        checked={isActive}
        onChange={toggleSwitch}
      />
      <label
        onClick={toggleSwitch}
        className={`cursor-pointer select-none relative h-6 w-12 rounded-full transition-colors duration-300 ${
          isActive ? "bg-blue-400" : "bg-gray-300"
        }`}
      >
        <div
          className={`absolute left-0 top-0 bg-white w-6 h-6 rounded-full shadow transition-transform duration-300 transform ${
            isActive ? "translate-x-6" : ""
          }`}
        ></div>
      </label>
    </div>
  );
};

export default Switch;
