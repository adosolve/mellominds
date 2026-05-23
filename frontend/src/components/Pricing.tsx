import React, { useState, useEffect } from 'react';
import PricingDesktop from './PricingDesktop';
import PricingMobile from './PricingMobile';
import { SEO } from './SEO';

const Pricing: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <SEO
        title="Pricing | MelloMinds"
        description="MelloMinds is free forever for therapists. Explore our Free Tier and Enterprise plans."
        path="/pricing"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Pricing', url: '/pricing' }
        ]}
        includeLocalBusinessSchema={true}
      />
      {isMobile ? <PricingMobile /> : <PricingDesktop />}
    </>
  );
};

export default Pricing;
