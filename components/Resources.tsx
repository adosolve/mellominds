import React, { useState, useEffect } from 'react';
import ResourcesDesktop from './ResourcesDesktop';
import ResourcesMobile from './ResourcesMobile';

const Resources: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile ? <ResourcesMobile /> : <ResourcesDesktop />;
};

export default Resources;
