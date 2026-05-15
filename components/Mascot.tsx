import React, { useState, useEffect } from 'react';

export const Mascot: React.FC = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Calculate relative position from center of viewport
      const centerX = viewportWidth / 2;
      const centerY = viewportHeight / 2;
      
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      
      // Scale movement based on viewport size
      const maxDistance = 8;
      const scaleX = deltaX / (viewportWidth / 2);
      const scaleY = deltaY / (viewportHeight / 2);
      
      const eyeX = Math.max(-maxDistance, Math.min(maxDistance, scaleX * maxDistance));
      const eyeY = Math.max(-maxDistance, Math.min(maxDistance, scaleY * maxDistance));
      
      setEyePosition({ x: eyeX, y: eyeY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full flex justify-center items-end pointer-events-none select-none mascot-container">
      
      {/* The Head (Yellow Semi-Circle) */}
      <div className="relative w-[300px] h-[150px] md:w-[600px] md:h-[300px] bg-mello-yellow rounded-t-full z-10 flex justify-center items-center overflow-hidden">
        
        {/* Face Container */}
        <div className="absolute bottom-[-20px] md:bottom-[-40px] flex gap-12 md:gap-24">
          
          {/* Left Eye */}
          <div className="w-12 h-16 md:w-20 md:h-28 bg-mello-bg rounded-t-full relative animate-blink overflow-hidden">
            <div 
              className="absolute top-2 left-2 md:top-4 md:left-4 w-3 h-3 md:w-5 md:h-5 bg-white rounded-full opacity-90 transition-transform duration-100"
              style={{
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
              }}
            ></div>
          </div>

          {/* Right Eye */}
          <div className="w-12 h-16 md:w-20 md:h-28 bg-mello-bg rounded-t-full relative animate-blink overflow-hidden" style={{ animationDelay: '0.1s' }}>
            <div 
              className="absolute top-2 left-2 md:top-4 md:left-4 w-3 h-3 md:w-5 md:h-5 bg-white rounded-full opacity-90 transition-transform duration-100"
              style={{
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`
              }}
            ></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};