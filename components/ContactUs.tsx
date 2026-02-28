import React, { useState, useEffect } from 'react';
import ContactUsDesktop from './ContactUsDesktop';
import ContactUsMobile from './ContactUsMobile';

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

  return isMobile ? <ContactUsMobile /> : <ContactUsDesktop />;
};

export default ContactUs;
