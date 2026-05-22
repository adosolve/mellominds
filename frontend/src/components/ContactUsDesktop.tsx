import React from 'react';
import { Header } from './Header';
import { GlobalFooterDesktop } from './GlobalFooter';

const ContactUsDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white">
      {/* Fixed Header */}
      <Header currentPage="contact" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-44">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-mello-light mb-4">Contact Us</h1>
          <p className="text-xl text-white/70">We'd love to hear from you</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex-1 bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-mello-yellow mb-3">Email Us</h3>
              <p className="text-white/80 mb-4">For general inquiries and support</p>
              <a href="mailto:mellomindsventure@gmail.com" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold">
                mellomindsventure@gmail.com
              </a>
            </div>

            <div className="flex-1 bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-mello-yellow mb-3">Location</h3>
              <p className="text-white/80">
                Pune, Maharashtra<br />India
              </p>
            </div>

          </div>

        </div>

        {/* Footer */}
        <GlobalFooterDesktop />
      </div>
    </div>
  );
};

export default ContactUsDesktop;
