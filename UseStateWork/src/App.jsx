import { useState } from 'react';
import { StateMode } from './Components/StateMode/StateMode';
import { StateLikes } from './Components/StateLikes/StateLikes';
import { ColorGenerator } from './Components/ColorGenerator/ColorGenerator';
import './App.css';
import { Counter } from './Components/Counter/Counter';

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'app-container dark-mode' : 'app-container light-mode'}>
      <StateMode darkMode={darkMode} setDarkMode={setDarkMode} />
      <StateLikes darkMode={darkMode} />
      <ColorGenerator />
      <Counter/>
    </div>
  );
};