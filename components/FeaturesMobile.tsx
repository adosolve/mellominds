import React from 'react';
import { MobileHeader } from './MobileHeader';

const FeaturesMobile: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white px-6 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <MobileHeader currentPage="features" />
        
        <header className="mb-12 mt-20">
          <div className="text-center">
            <h1 className="text-4xl font-black text-mello-light mb-3">Features</h1>
            <p className="text-lg text-white/70">Everything you need to manage your therapy practice</p>
          </div>
        </header>

        {/* Features List */}
        <div className="space-y-6 mb-12">
          
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Smart Scheduling</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Effortlessly manage appointments with intelligent scheduling, automated reminders, and calendar sync.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Digital Intake Forms</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Streamline client onboarding with customizable digital intake forms. Collect information securely.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">HIPAA-Compliant Notes</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Create and manage session notes with enterprise-grade security. Full HIPAA compliance guaranteed.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">💳</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Billing & Payments</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Simplify invoicing and payment processing. Accept payments online and track balances easily.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Analytics & Insights</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Track practice growth with detailed analytics. Monitor client retention and revenue metrics.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🔔</div>
            <h3 className="text-xl font-bold text-mello-yellow mb-2">Automated Reminders</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Reduce no-shows with automated email and SMS reminders. Keep clients informed and engaged.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-mello-yellow/20 to-mello-light/20 rounded-2xl p-8 text-center border border-mello-yellow/30 mb-12">
          <h2 className="text-2xl font-bold text-mello-light mb-3">Ready to transform your practice?</h2>
          <p className="text-white/80 mb-6">Join therapists using MelloMinds to streamline their workflow.</p>
          <a 
            href="https://app.mellominds.co.in" 
            className="inline-block bg-mello-yellow text-mello-bg px-6 py-3 rounded-full font-bold hover:bg-mello-yellow/90 transition-colors shadow-lg"
          >
            Get early access →
          </a>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/10">
          <div className="flex flex-col items-center gap-4 text-xs text-white/50 text-center">
            <span>© 2026 MelloMinds. All rights reserved.</span>
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

export default FeaturesMobile;
