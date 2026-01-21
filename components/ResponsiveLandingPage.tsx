import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import MobileLandingPage from './MobileLandingPage';

const ResponsiveLandingPage: React.FC = () => {
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

  return isMobile ? <MobileLandingPage /> : <LandingPage />;
};

export default ResponsiveLandingPage;