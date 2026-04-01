import React from 'react';
import { MobileHeader } from './MobileHeader';

const ContactUsMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <MobileHeader currentPage="contact" />
        
        <header className="mb-12 mt-20">
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

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Support</h3>
            <p className="text-white/80 text-sm mb-3">
              Need help? Check out our support center
            </p>
            <a href="/resources" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold text-sm">
              Visit Support Center →
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-mello-yellow/20 to-mello-light/20 rounded-2xl p-8 border border-mello-yellow/30 mb-12">
          <h2 className="text-2xl font-bold text-mello-light mb-6 text-center">FAQ</h2>
          <div className="space-y-5">
            <div>
              <h4 className="text-base font-semibold text-mello-yellow mb-2">How do I get started?</h4>
              <p className="text-white/80 text-sm">
                Click "Get early access" to sign up. We'll guide you through setup.
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-mello-yellow mb-2">Is my data secure?</h4>
              <p className="text-white/80 text-sm">
                Yes! We use enterprise-grade encryption and are fully HIPAA compliant.
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-mello-yellow mb-2">What's your pricing?</h4>
              <p className="text-white/80 text-sm">
                We offer flexible plans. Contact us for detailed pricing information.
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-mello-yellow mb-2">Do you offer training?</h4>
              <p className="text-white/80 text-sm">
                Yes! We provide comprehensive onboarding and training resources.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-4 text-xs text-white/50 text-center">
            <span>© 2026 MelloMinds LLP. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <a href="/" className="hover:text-white/70 transition-colors">Home</a>
              <span>•</span>
              <a href="/privacy-policy" className="hover:text-white/70 transition-colors underline">Privacy Policy</a>
              <span>•</span>
              <a href="/terms-of-service" className="hover:text-white/70 transition-colors underline">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUsMobile;
