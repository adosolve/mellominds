import React, { useState, useEffect } from 'react';
import ResourcesDesktop from './ResourcesDesktop';
import ResourcesMobile from './ResourcesMobile';
import { SEO } from './SEO';

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

  return (
    <>
      <SEO 
        title="Resources | MelloMinds - Guides & Support for Therapists"
        description="Access free guides, video tutorials, documentation, and best practices for therapy practice management. Learn how to optimize your workflow with MelloMinds."
        path="/resources"
      />
      {isMobile ? <ResourcesMobile /> : <ResourcesDesktop />}
    </>
  );
};

export default Resources;
