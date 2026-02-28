import React, { useState, useEffect } from 'react';
import PrivacyPolicyDesktop from './PrivacyPolicyDesktop';
import PrivacyPolicyMobile from './PrivacyPolicyMobile';

const PrivacyPolicy: React.FC = () => {
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

  return isMobile ? <PrivacyPolicyMobile /> : <PrivacyPolicyDesktop />;
};

export default PrivacyPolicy;
