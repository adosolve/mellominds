import React from 'react';
import { Header } from './Header';
import { Mascot } from './Mascot';
import { FeaturesSectionDesktop } from './FeaturesSection';
import { SecuritySectionDesktop } from './SecuritySection';
import { EnterpriseSectionDesktop } from './EnterpriseSection';
import { PricingSectionDesktop } from './PricingSection';
import { ContactSection } from './ContactSection';
import { GlobalFooterDesktop } from './GlobalFooter';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-[#082421]">

      {/* Fixed Header */}
      <Header currentPage="home" />

      {/* S1: Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center h-screen px-6 md:px-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dp7pklmjk/image/upload/v1779898669/mellominds/ydkcthpfoxqc2dgolxk7.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark overlay gradient from bottom up */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>

        {/* Greeting */}
        <h2 className="relative z-10 font-medium text-white flex items-center justify-center gap-3 md:gap-4 mb-2" style={{fontSize: '30px'}}>
          Say <span className="animate-pulse" style={{fontSize: '22px'}}>👋</span> hello to <span className="text-mello-yellow font-bold">mello!</span>
        </h2>

        {/* H1: Core Message */}
        <div className="relative z-10 flex flex-col items-center mb-4">
          <div className="flex flex-wrap justify-center items-baseline gap-x-4 md:gap-x-6">
            <span className="leading-none font-medium tracking-tight text-white uppercase" style={{fontSize: '70px'}}>
              FUTURE OF
            </span>
            <span className="leading-none font-medium tracking-tight text-white uppercase" style={{fontSize: '70px'}}>
              THERAPY
            </span>
          </div>
          <h1 className="leading-none font-medium tracking-tight text-white uppercase mt-2 md:mt-4" style={{fontSize: '70px'}}>
            PRACTICE MANAGEMENT
          </h1>
        </div>

        {/* Subheading / Supporting Description */}
        <p className="relative z-10 text-white/80 max-w-2xl leading-relaxed mb-8" style={{fontSize: '18px'}}>
          We believe that therapists deserve the same care and support they give their clients.
        </p>

        {/* CTA Button */}
        <a
          href="https://app.mellominds.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-20 bg-mello-yellow text-mello-bg px-8 py-3 rounded-full font-semibold text-base hover:bg-mello-yellow/90 transition-colors shadow-lg"
        >
          Get Started for Free
        </a>

        {/* Trust badges — pinned to bottom of S1 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-mello-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className="text-white" style={{fontSize: '16px'}}>256-bit AES Encryption</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-mello-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-white" style={{fontSize: '16px'}}>99.9% Uptime SLA</span>
          </div>
        </div>

        {/* Mascot — fixed bottom-left, stays pinned on scroll */}
        <div className="fixed bottom-0 left-6 md:left-12 z-50 scale-[0.25] origin-bottom-left">
          <Mascot />
        </div>

      </section>

      {/* S2: Features Section */}
      <div id="features">
        <FeaturesSectionDesktop />
      </div>

      {/* S3: Security & Compliance */}
      <SecuritySectionDesktop />

      {/* S4: Enterprise Value Proposition */}
      <EnterpriseSectionDesktop />

      {/* S5: Pricing */}
      <div id="pricing">
        <PricingSectionDesktop />
      </div>

      {/* S6: Contact Us */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Global Footer */}
      <GlobalFooterDesktop />

    </div>
  );
};

export default LandingPage;
