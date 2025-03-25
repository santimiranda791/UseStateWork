import React from 'react';

export const StateMode = ({ darkMode, setDarkMode }) => {
  return (
    <div>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};