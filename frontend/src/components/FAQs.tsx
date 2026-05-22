import React, { useState, useEffect } from 'react';
import FAQsDesktop from './FAQsDesktop';
import FAQsMobile from './FAQsMobile';
import { SEO } from './SEO';

const FAQs: React.FC = () => {
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
        title="FAQs | MelloMinds - Therapy Practice Management Software"
        description="Find answers to frequently asked questions about MelloMinds therapy practice management platform. Learn about features, pricing, security, and more."
        path="/faqs"
      />
      {isMobile ? <FAQsMobile /> : <FAQsDesktop />}
    </>
  );
};

export default FAQs;