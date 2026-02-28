import React, { useState, useEffect } from 'react';
import TermsOfServiceDesktop from './TermsOfServiceDesktop';
import TermsOfServiceMobile from './TermsOfServiceMobile';
import { SEO } from './SEO';

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

  return (
    <>
      <SEO 
        title="Terms of Service | MelloMinds"
        description="Read MelloMinds terms of service including user responsibilities, subscription details, HIPAA compliance requirements, and platform usage guidelines."
        path="/terms-of-service"
      />
      {isMobile ? <TermsOfServiceMobile /> : <TermsOfServiceDesktop />}
    </>
  );
};

export default TermsOfService;
