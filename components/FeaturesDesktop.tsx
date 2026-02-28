import React from 'react';
import { Logo } from './Logo';

const FeaturesDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white px-6 py-8 md:px-12 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center justify-between mb-12">
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
                className="bg-mello-yellow text-mello-bg px-6 py-2.5 rounded-full font-semibold hover:bg-mello-yellow/90 transition-colors shadow-lg"
              >
                Get early access →
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-black text-mello-light mb-4">Features</h1>
            <p className="text-xl text-white/70">Everything you need to manage your therapy practice</p>
          </div>
        </header>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Smart Scheduling</h3>
            <p className="text-white/80 leading-relaxed">
              Effortlessly manage appointments with intelligent scheduling, automated reminders, and calendar sync. Never miss a session again.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Digital Intake Forms</h3>
            <p className="text-white/80 leading-relaxed">
              Streamline client onboarding with customizable digital intake forms. Collect and organize information securely before the first session.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">HIPAA-Compliant Notes</h3>
            <p className="text-white/80 leading-relaxed">
              Create, store, and manage session notes with enterprise-grade security. Full HIPAA compliance ensures client confidentiality.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Billing & Payments</h3>
            <p className="text-white/80 leading-relaxed">
              Simplify invoicing and payment processing. Accept payments online, track outstanding balances, and generate financial reports.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Analytics & Insights</h3>
            <p className="text-white/80 leading-relaxed">
              Track practice growth with detailed analytics. Monitor client retention, session trends, and revenue metrics at a glance.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors">
            <div className="text-4xl mb-4">🔔</div>
            <h3 className="text-2xl font-bold text-mello-yellow mb-3">Automated Reminders</h3>
            <p className="text-white/80 leading-relaxed">
              Reduce no-shows with automated email and SMS reminders. Keep clients informed and engaged with timely notifications.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-mello-yellow/20 to-mello-light/20 rounded-2xl p-12 text-center border border-mello-yellow/30">
          <h2 className="text-3xl font-bold text-mello-light mb-4">Ready to transform your practice?</h2>
          <p className="text-white/80 mb-8 text-lg">Join therapists who are already using MelloMinds to streamline their workflow.</p>
          <a 
            href="https://app.mellominds.co.in" 
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
