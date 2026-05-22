import React, { useState, useEffect } from 'react';
import PrivacyPolicyDesktop from './PrivacyPolicyDesktop';
import PrivacyPolicyMobile from './PrivacyPolicyMobile';
import { SEO } from './SEO';

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

  return (
    <>
      <SEO 
        title="Privacy Policy | MelloMinds"
        description="Learn how MelloMinds protects your data. Our privacy policy covers HIPAA compliance, data security, encryption, and your rights as a user."
        path="/privacy-policy"
      />
      {isMobile ? <PrivacyPolicyMobile /> : <PrivacyPolicyDesktop />}
    </>
  );
};

export default PrivacyPolicy;
