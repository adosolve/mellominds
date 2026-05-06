import React from 'react';
import { MobileHeader } from './MobileHeader';
import { FooterMobile } from './FooterMobile';

const ContactUsMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <MobileHeader currentPage="contact" />
        
        <header className="mb-12 mt-44">
          <div className="text-center">
            <h1 className="text-4xl font-black text-mello-light mb-3">Contact Us</h1>
            <p className="text-lg text-white/70">We'd love to hear from you</p>
          </div>
        </header>

        {/* Contact Information */}
        <div className="space-y-6 mb-12">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Email Us</h3>
            <p className="text-white/80 text-sm mb-3">
              For general inquiries and support
            </p>
            <a href="mailto:mellomindsventure@gmail.com" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold text-sm">
              mellomindsventure@gmail.com
            </a>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Location</h3>
            <p className="text-white/80 text-sm">
              Pune, Maharashtra<br />
              India
            </p>
          </div>

        </div>

        {/* Footer */}
        <FooterMobile />
      </div>
    </div>
  );
};

export default ContactUsMobile;
