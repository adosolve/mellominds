import React, { useState, useEffect } from 'react';
import ContactUsDesktop from './ContactUsDesktop';
import ContactUsMobile from './ContactUsMobile';
import { SEO } from './SEO';

const ContactUs: React.FC = () => {
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
        title="Contact Us | MelloMinds - Get in Touch"
        description="Have questions about MelloMinds? Contact our team for support, pricing information, or demo requests. We're here to help therapists succeed."
        path="/contact"
      />
      {isMobile ? <ContactUsMobile /> : <ContactUsDesktop />}
    </>
  );
};

export default ContactUs;
