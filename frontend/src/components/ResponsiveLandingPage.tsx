import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import MobileLandingPage from './MobileLandingPage';
import { SEO } from './SEO';

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

  return (
    <>
      <SEO 
        title="MelloMinds | Therapy Practice Management Software for Indian Professionals"
        description="Streamline your mental health practice with MelloMinds. An all-in-one platform for appointments, billing, and therapy notes designed for Indian therapists."
        path="/"
      />
      {isMobile ? <MobileLandingPage /> : <LandingPage />}
    </>
  );
};

export default ResponsiveLandingPage;