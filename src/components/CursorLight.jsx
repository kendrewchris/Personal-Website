import React, { useState, useEffect } from 'react';

const CursorLight = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorLightStyle = {
    position: 'fixed',
    top: cursorPosition.y,
    left: cursorPosition.x,
    width: '200px',
    height: '200px',
    borderRadius: '200%',
    backgroundColor: 'lightblue',
    boxShadow: '0px 0px 30px 10px rgba(0, 0, 0, 0.2)',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    opacity: 0.1,
    zIndex: 0,
  };

  return <div style={cursorLightStyle}></div>;
};

export default CursorLight;


