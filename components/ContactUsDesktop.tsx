import React from 'react';
import { Logo } from './Logo';

const ContactUsDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-[#082421]/80 backdrop-blur-md border-b border-white/5">
        <a href="/" className="inline-block">
          <Logo />
        </a>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-1 bg-white rounded-full px-2 py-2">
            <a href="/features" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Features
            </a>
            <a href="/pricing" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Pricing
            </a>
            <a href="/resources" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Resources
            </a>
            <a href="/contact" className="px-4 py-2 text-gray-700 bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Contact Us
            </a>
          </nav>
          <a 
            href="https://app.mellominds.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mello-yellow text-mello-bg px-6 py-2.5 rounded-full font-semibold hover:bg-mello-yellow/90 transition-colors shadow-lg"
          >
            Get early access →
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-28">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-mello-light mb-4">Contact Us</h1>
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

            <div className="flex-1 bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-mello-yellow mb-3">Support</h3>
              <p className="text-white/80 mb-4">Need help? Check out our support center</p>
              <a href="/resources" className="text-mello-light hover:text-mello-yellow transition-colors font-semibold">
                Visit Support Center →
              </a>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-mello-yellow/20 to-mello-light/20 rounded-2xl p-12 border border-mello-yellow/30 mb-16">
          <h2 className="text-3xl font-bold text-mello-light mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-mello-yellow mb-2">How do I get started?</h4>
              <p className="text-white/80 text-sm">
                Click "Get early access" to sign up for our platform. We'll guide you through the setup process.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-mello-yellow mb-2">Is my data secure?</h4>
              <p className="text-white/80 text-sm">
                Yes! We use enterprise-grade encryption and are fully HIPAA compliant to protect your data.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-mello-yellow mb-2">What's your pricing?</h4>
              <p className="text-white/80 text-sm">
                We offer flexible monthly and annual plans. Contact us for detailed pricing information.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-mello-yellow mb-2">Do you offer training?</h4>
              <p className="text-white/80 text-sm">
                Yes! We provide comprehensive onboarding and ongoing training resources for all users.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
            <span>© 2026 MelloMinds LLP. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="/" className="hover:text-white/70 transition-colors">Home</a>
              <span>•</span>
              <a href="https://app.mellominds.co.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">Privacy Policy</a>
              <span>•</span>
              <a href="https://app.mellominds.co.in/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUsDesktop;
