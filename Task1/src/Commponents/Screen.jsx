
import React, { useState } from 'react';
import Box from './Box';
import ButtonComponent from './ButtonComponent';

function Screen() {
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex justify-center items-center min-h-screen ${darkMode ? 'bg-bg-dark text-white' : 'bg-bg-light text-black'}`}>
      <div className="fixed top-4 right-4">
        <input
          type="checkbox"
          id="darkModeSwitch"
          className="hidden"
          checked={darkMode}
          onChange={() => setDarkMode(prevMode => !prevMode)}
        />
        <label
          htmlFor="darkModeSwitch"
          className={`bg-gray-200 relative inline-block w-14 h-8 rounded-full transition duration-300 ${darkMode ? 'bg-gray-700' : 'bg-gray-400'}`}
        >
          <span className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mt-20">
        <Box
          title="This is Box 1."
          buttonLabel="Submit"
          textFieldPlaceholder="Enter text"
          dropdownOptions={dropdownOptions}
        />
        <Box
          title="This is Box 2."
          buttonLabel="Submit"
          textFieldPlaceholder="Enter text"
          dropdownOptions={dropdownOptions}
        />
        <Box
          title="This is Box 3."
          buttonLabel="Submit"
          textFieldPlaceholder="Enter text"
          dropdownOptions={dropdownOptions}
        />
      </div>
    </div>
  );
}

export default Screen;
