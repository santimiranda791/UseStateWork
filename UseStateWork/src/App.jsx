import { useState } from 'react';
import { StateMode } from './Components/StateMode/StateMode';
import { StateLikes } from './Components/StateLikes/StateLikes';
import { ColorGenerator } from './Components/ColorGenerator/ColorGenerator';
import './App.css';
import { Counter } from './Components/Counter/Counter';

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  return (
    <div
      className="app-container"
      style={{
        backgroundColor: darkMode ? '#000000' : backgroundColor, 
        color: darkMode ? '#ffffff' : '#000000', 
      }}
    >
      <StateMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <StateLikes darkMode={darkMode} />
      <ColorGenerator setBackgroundColor={setBackgroundColor} /> {}
      <Counter />
    </div>
  );
};