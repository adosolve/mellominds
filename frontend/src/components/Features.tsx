import React, { useState, useEffect } from 'react';
import FeaturesDesktop from './FeaturesDesktop';
import FeaturesMobile from './FeaturesMobile';
import { SEO } from './SEO';

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

  return (
    <>
      <SEO 
        title="Features | MelloMinds - Smart Tools for Therapy Practice Management"
        description="Discover MelloMinds features: smart scheduling, HIPAA-compliant notes, digital intake forms, automated billing, and analytics. Everything therapists need in one platform."
        path="/features"
      />
      {isMobile ? <FeaturesMobile /> : <FeaturesDesktop />}
    </>
  );
};

export default Features;
