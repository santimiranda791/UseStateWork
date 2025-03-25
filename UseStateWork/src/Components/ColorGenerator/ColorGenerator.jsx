import React, { useState } from 'react';
import './ColorGenerator.css';

const coloresAbsolutos = [
  "#FF0000", // Rojo
  "#00FF00", // Verde
  "#0000FF", // Azul
  "#FFFF00", // Amarillo
  "#FF00FF", // Magenta
  "#00FFFF", // Cian
  "#000000", // Negro
  "#FFFFFF", // Blanco
  "#808080", // Gris
  "#800000", // Marrón oscuro
  "#808000", // Oliva
  "#800080", // Púrpura
  "#008080", // Verde azulado
  "#C0C0C0", // Plata
  "#FFA500", // Naranja
  "#A52A2A"  // Marrón
];

export const ColorGenerator = () => {
  const [color, setColor] = useState("#FFFFFF");
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje

  const generarColor = () => {
    const randomIndex = Math.floor(Math.random() * coloresAbsolutos.length);
    const nuevoColor = coloresAbsolutos[randomIndex];
    setColor(nuevoColor);
    setMensaje(`El color generado es: ${nuevoColor}`); 
  };

  return (
    <div className="color-generator" style={{ backgroundColor: color }}>
      <button onClick={generarColor}>Generar Color</button>
      <span>{mensaje}</span> 
    </div>
  );
};