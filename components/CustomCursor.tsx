import React, { useState, useEffect } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrame: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setIsVisible(true);
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'SPAN' || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 rounded-full bg-mello-yellow transition-all duration-150 ease-out will-change-transform"
      style={{
        left: position.x,
        top: position.y,
        width: isHovering ? 40 : 20,
        height: isHovering ? 40 : 20,
        opacity: 0.7,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.2 : 1})`,
        backfaceVisibility: 'hidden',
        perspective: 1000,
      }}
    />
  );
};