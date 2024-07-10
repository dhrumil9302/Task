import React from 'react';

const TextComponent = ({ children, darkMode, className }) => {
  return (
    <span className={`text-${darkMode ? 'white' : 'black'} ${className}`}>
      {children}
    </span>
  );
};

export default TextComponent;
