import React, { useState } from 'react';
import './index.css';

export const StateLikes = ({ darkMode }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const resetCounters = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className={darkMode ? 'likes-container dark-mode' : 'likes-container light-mode'}>
      <button onClick={() => setLikes(likes + 1)}>👍</button>
      <p>Likes: {likes}</p>
      <button onClick={() => setDislikes(dislikes + 1)}>👎</button>
      <p>Dislikes: {dislikes}</p>
      <button onClick={resetCounters}>🔄 Reiniciar</button>
    </div>
  );
};