import React, { useState, useEffect } from 'react';
import FeaturesDesktop from './FeaturesDesktop';
import FeaturesMobile from './FeaturesMobile';

const Features: React.FC = () => {
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

  return isMobile ? <FeaturesMobile /> : <FeaturesDesktop />;
};

export default Features;
