import React, { useState } from 'react';

const coloresAbsolutos = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
  "#000000", "#FFFFFF", "#808080", "#800000", "#808000", "#800080",
  "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

export const ColorGenerator = ({ setBackgroundColor }) => {
  const [mensaje, setMensaje] = useState(""); 

  const generarColor = () => {
    const randomIndex = Math.floor(Math.random() * coloresAbsolutos.length);
    const nuevoColor = coloresAbsolutos[randomIndex];
    setBackgroundColor(nuevoColor);
    setMensaje(`El color generado es: ${nuevoColor}`);
  };

  return (
    <div className="color-generator">
      <button onClick={generarColor}>Generar Color</button>
      <span>{mensaje}</span> {}
    </div>
  );
};