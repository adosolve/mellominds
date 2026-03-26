import React from 'react';
import { Logo } from './Logo';

const FeaturesDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white px-6 py-8 md:px-12 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="w-full mb-16 flex items-center justify-between">
          <a href="/" className="inline-block">
            <Logo />
          </a>
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-1 bg-white rounded-full px-2 py-2">
              <a href="/features" className="px-4 py-2 text-gray-700 bg-gray-100 rounded-full transition-colors font-medium text-sm">
                Features
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
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-mello-light mb-4">Features</h1>
          <p className="text-xl text-white/70">Everything you need to manage your therapy practice</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/2-2.png" alt="Security & Compliance" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Security & Compliance</h3>
              <h4 className="text-lg font-semibold text-white/90">Zero-Knowledge Encryption & ABDM Compliance</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              Rest assured that your practice meets the highest digital safety standards. We utilize Zero-Knowledge encryption, which means your client data is encrypted before it touches our servers our tech team ensure its mathematically impossible for us or anyone else to view it. Full ABDM compliance further establishes your credibility within the digital health ecosystem.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/3-3071.png" alt="Clinical Workflow" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Clinical Workflow</h3>
              <h4 className="text-lg font-semibold text-white/90">Comprehensive Client Management & Clinical Notes</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              Access a dedicated workspace for every client, featuring case histories, session logs, and an activity suggestion engine that automatically notifies clients of new tasks. Speed up your documentation by using our standardized industry-compliant note templates, or create your own custom templates to match your therapy style.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/5-137477988.png" alt="Finance & Billing" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Finance & Billing</h3>
              <h4 className="text-lg font-semibold text-white/90">Integrated Payments & Automated Invoicing</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              Generate professional invoices instantly and integrate your preferred payment gateway directly into the platform, allowing for seamless, secure transaction tracking that keeps your practice's cash flow healthy.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/4-7589.png" alt="Scheduling" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Scheduling</h3>
              <h4 className="text-lg font-semibold text-white/90">Smart Multi-Service Calendar & Google Sync</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              Organize your time effectively by creating distinct calendar resources for specific services (e.g. Individual Therapy, Couples Counseling, ADHD Assessment). Full two-way synchronization with Google Calendar ensures your personal and professional schedules never conflict.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/6-333899.png" alt="Client Acquisition" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Client Acquisition</h3>
              <h4 className="text-lg font-semibold text-white/90">Sharable Booking Profile</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              Eliminate the back-and-forth of scheduling. You get a professional, sharable profile link that showcases your expertise and real-time availability, allowing existing and potential clients to book sessions with you instantly and securely.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/9.png" alt="Automation" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Automation</h3>
              <h4 className="text-lg font-semibold text-white/90">Appointment Command Center & Reminders</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              Reduce no-shows and keep your day running smoothly. Manage all upcoming sessions from a single view where the system automatically handles the busy work of sending timely appointment reminders to your clients on your behalf.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="w-full rounded-[20px] mb-4 overflow-hidden">
              <img src="/Images/1-1.png" alt="Ease of Use" className="w-full h-auto" />
            </div>
            <div className="bg-mello-yellow/10 rounded-xl p-4 mb-4">
              <h3 className="text-2xl font-bold text-mello-yellow">Ease of Use</h3>
              <h4 className="text-lg font-semibold text-white/90">Zero-Tech Control Center</h4>
            </div>
            <p className="text-white/80 leading-relaxed">
              You are a therapist, not an IT manager. MelloMinds is designed with a "No-Code" philosophy, giving you a centralized dashboard that is intuitive and easy to navigate, allowing you to operate your entire digital practice without any technical knowledge.
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
            <span>© 2026 MelloMinds. All rights reserved.</span>
            <div className="flex items-center gap-4">
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

export default FeaturesDesktop;
