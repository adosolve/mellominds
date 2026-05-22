import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={className}>
      <img 
        src="/Images/mellomindslogo.svg" 
        alt="MelloMinds" 
        className="h-8 md:h-10 w-auto object-contain"
      />
    </div>
  );
};