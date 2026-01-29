import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={className}>
      <img 
        src="/Images/Frame 2 1.png" 
        alt="MelloMinds" 
        className="h-12 md:h-16 w-auto object-contain"
      />
    </div>
  );
};