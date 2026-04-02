import React from 'react';
import { Logo } from './Logo';

const FeaturesDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-[#082421]/80 backdrop-blur-md border-b border-white/5">
        <a href="/" className="inline-block">
          <Logo />
        </a>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-1 bg-white rounded-full px-2 py-2">
            <a href="/features" className="px-4 py-2 text-gray-700 bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Features
            </a>
            <a href="/pricing" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Pricing
            </a>
            <a href="/resources" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Resources
            </a>
            <a href="/contact" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
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
          <h1 className="text-5xl md:text-6xl font-black text-mello-light mb-4">Features</h1>
          <p className="text-xl text-white/70">Everything you need to manage your therapy practice</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/Booking & Calendar Management.webp" alt="Booking & Calendar Management" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Booking & Calendar Management</h3>
              <h4 className="text-lg font-semibold text-white/90">Event Types, Availability & Public Booking Pages</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              Create event types, set your availability, and share booking links with clients. Clients book slots through a public booking page with a smooth slot-picking and confirmation flow — no back-and-forth needed.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/Client Management.webp" alt="Client Management" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Client Management</h3>
              <h4 className="text-lg font-semibold text-white/90">Full CRM-Style Client Profiles & Session History</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              A full CRM-style client list with individual profiles, session history, notes, and the ability to transfer clients between practitioners — everything you need to manage your caseload in one place.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/Notes and Templates.webp" alt="Notes & Templates" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Notes & Templates</h3>
              <h4 className="text-lg font-semibold text-white/90">Session Notes with Reusable Templates</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              Write session notes tied directly to client profiles, with reusable note templates to speed up documentation. Spend less time on paperwork and more time with your clients.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/Payments & Invoicing.webp" alt="Payments & Invoicing" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Payments & Invoicing</h3>
              <h4 className="text-lg font-semibold text-white/90">Cashfree-Integrated Payment Collection & Invoicing</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              Integrated with Cashfree for seamless payment collection. Require upfront payment at booking and track all transactions through a dedicated invoicing view — keeping your practice's cash flow healthy.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/Google Calendar & Meet Integration.webp" alt="Google Calendar & Meet Integration" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Google Calendar & Meet Integration</h3>
              <h4 className="text-lg font-semibold text-white/90">OAuth Sync & Auto-Generated Meet Links</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              OAuth-based Google Calendar sync ensures every booking reflects on your personal calendar. Google Meet links are auto-generated for virtual sessions, so clients always have what they need to join.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/Multi-tier Plans & Enterprise.webp" alt="Multi-tier Plans & Enterprise" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Multi-tier Plans & Enterprise</h3>
              <h4 className="text-lg font-semibold text-white/90">Free, Paid & Enterprise Tiers for Every Practice</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              A flexible plan and upgrade system with an enterprise lead capture flow — designed for solo practitioners, growing practices, and large wellness organizations alike. Start free and scale as you grow.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-mello-yellow/20 to-mello-light/20 rounded-2xl p-12 text-center border border-mello-yellow/30">
          <h2 className="text-3xl font-bold text-mello-light mb-4">Ready to transform your practice?</h2>
          <p className="text-white/80 mb-8 text-lg">Join therapists who are already using MelloMinds to streamline their workflow.</p>
          <a 
            href="https://app.mellominds.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mello-yellow text-mello-bg px-8 py-4 rounded-full font-bold text-lg hover:bg-mello-yellow/90 transition-colors shadow-lg"
          >
            Get early access →
          </a>
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

export default FeaturesDesktop;
