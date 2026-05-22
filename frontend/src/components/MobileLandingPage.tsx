import React from 'react';
import { Logo } from './Logo';
import { Mascot } from './Mascot';
import { MobileHeader } from './MobileHeader';
import { FeaturesSectionMobile } from './FeaturesSection';
import { SecuritySectionMobile } from './SecuritySection';
import { EnterpriseSectionMobile } from './EnterpriseSection';
import { PricingSectionMobile } from './PricingSection';
import { GlobalFooterMobile } from './GlobalFooter';

const MobileLandingPage: React.FC = () => {
  return (
    <div className="bg-[#082421]">
      
      {/* Fixed Header */}
      <MobileHeader currentPage="home" />

      {/* S1: Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen px-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Images/therapy-practice-management.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>

        {/* Greeting */}
        <h2 className="relative z-10 font-medium text-white flex items-center justify-center gap-2 mb-2" style={{fontSize: '22px'}}>
          Say <span className="animate-pulse" style={{fontSize: '18px'}}>👋</span> hello to <span className="text-mello-yellow font-bold">mello!</span>
        </h2>

        {/* H1: Core Message */}
        <div className="relative z-10 flex flex-col items-center mb-3">
          <h1 className="leading-none font-medium tracking-tight text-white uppercase text-center" style={{fontSize: '38px'}}>
            FUTURE OF THERAPY
          </h1>
          <h1 className="leading-none font-medium tracking-tight text-white uppercase text-center mt-1" style={{fontSize: '38px'}}>
            PRACTICE MANAGEMENT
          </h1>
        </div>

        {/* Subheading */}
        <p className="relative z-10 text-white/80 text-center max-w-sm leading-relaxed mb-6" style={{fontSize: '14px'}}>
          We believe that therapists deserve the same care and support they give their clients.
        </p>

        {/* CTA Button */}
        <a
          href="https://app.mellominds.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 bg-mello-yellow text-mello-bg px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-mello-yellow/90 transition-colors shadow-lg"
        >
          Get Started for Free
        </a>

        {/* Trust badges — bottom of S1 */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-mello-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className="text-white text-xs">256-bit AES Encryption</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-mello-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white text-xs">99.9% Uptime SLA</span>
          </div>
        </div>
      </section>

      {/* S2: Features Section */}
      <FeaturesSectionMobile />

      {/* S3: Security & Compliance */}
      <SecuritySectionMobile />

      {/* S4: Enterprise Value Proposition */}
      <EnterpriseSectionMobile />

      {/* S5: Pricing */}
      <PricingSectionMobile />

      {/* Global Footer */}
      <GlobalFooterMobile />

      {/* Mascot — fixed bottom-right */}
      <div className="fixed bottom-0 right-4 z-50 scale-[0.2] origin-bottom-right">
        <Mascot />
      </div>

    </div>
  );
};

export default MobileLandingPage;
