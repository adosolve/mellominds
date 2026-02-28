import React, { useState, useEffect } from 'react';
import TermsOfServiceDesktop from './TermsOfServiceDesktop';
import TermsOfServiceMobile from './TermsOfServiceMobile';

const TermsOfService: React.FC = () => {
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

  return isMobile ? <TermsOfServiceMobile /> : <TermsOfServiceDesktop />;
};

export default TermsOfService;
