import React, { useEffect, useRef } from 'react';
import '../App.css';

const InteractiveBackground = () => {
  const interactiveRef = useRef(null);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-bg">
      <svg 
        viewBox="0 0 100vw 100vw" 
        xmlns="http://www.w3.org/2000/svg" 
        className="noiseBg"
      >
        <filter id="noiseFilterBg">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.6" 
            stitchTiles="stitch" 
          />
        </filter>

        <rect
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          filter="url(#noiseFilterBg)"
        />
      </svg>

      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div ref={interactiveRef} className="interactive"></div>
      </div>
    </div>
  );
};

export default InteractiveBackground;
