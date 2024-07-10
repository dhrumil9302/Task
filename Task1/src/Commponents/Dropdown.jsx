import React from "react";

const Dropdown = ({ width, dataset }) => {
  return (
    <div>
      <select className={`${width} border p-2 rounded-md`}>
        {dataset.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
