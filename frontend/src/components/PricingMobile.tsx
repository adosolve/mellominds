import React, { useState } from 'react';
import { MobileHeader } from './MobileHeader';
import { GlobalFooterMobile } from './GlobalFooter';

const freeFeatures: { category: string; items: string[] }[] = [
  { category: 'Booking & Calendars', items: ['Create booking calendars (one-on-one, group, couples)', 'Public booking page with shareable link', 'Customizable booking slug per calendar', 'Set session duration, description, and type', 'Custom intake form questions', 'Multi-location support (Google Meet / in-person)', 'Automatic Google Meet link generation'] },
  { category: 'Availability', items: ['Weekly availability schedule', 'Google Calendar free/busy sync', 'Real-time slot availability for clients'] },
  { category: 'Client Management', items: ['Client database (name, email, phone, demographics)', 'Manual client creation', 'Client transfer system', 'Client activity tracking', 'Session history per client'] },
  { category: 'Session Notes', items: ['Session notes per appointment', 'Customizable note templates', 'Clinical profile per client'] },
  { category: 'Appointments', items: ['View, create, cancel, and reschedule appointments', 'Appointment status tracking', 'Booking confirmation with cancel/reschedule token'] },
  { category: 'Dashboard & Analytics', items: ['Dashboard stats: sessions, cancellations, no-shows', 'Date filtering (all-time, current month, custom range)', 'Profile completion tracker'] },
  { category: 'Integrations', items: ['Google OAuth login', 'Google Calendar integration', 'Cloudinary profile picture upload'] },
  { category: 'Notifications', items: ['Real-time notification bell', 'Unread count badge', 'Mark as read (individual or all)'] },
  { category: 'Email Notifications', items: ['Booking confirmation email', 'Cancellation & reschedule emails', 'Booking link invitation email', 'Forgot password email', 'Client transfer emails'] },
  { category: 'Payments', items: ['Offline payment (Cash / UPI / manual)', 'Payment status tracking', 'Payments & Invoice dashboard', 'Receipt generation', 'CSV export of payment records'] },
];

const enterpriseFeatures: { category: string; items: string[] }[] = [
  { category: 'Platform Customization', items: ['Custom domain & white-label branding', 'Custom platform appearance', 'Dedicated branded booking experience'] },
  { category: 'Payment Gateway', items: ['Cashfree payment gateway integration', 'Razorpay integration', 'Sandbox & production environment support', 'Webhook-based payment status sync', 'Automated refund management'] },
  { category: 'Custom Profile Link', items: ['Custom username/URL for public profile'] },
  { category: 'Reminders — Full Control', items: ['Configure email reminder schedules', 'WhatsApp reminders to clients'] },
  { category: 'Advanced', items: ['Unlimited calendars & bookings', 'Advanced analytics & reporting', 'Team management (multi-therapist)', 'API access & webhook integrations', 'Dedicated account manager', 'Priority support'] },
];

const PricingMobile: React.FC = () => {
  const [openFree, setOpenFree] = useState<string | null>(null);
  const [openEnt, setOpenEnt] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#082421] text-white px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <MobileHeader currentPage="pricing" />

        <header className="mb-10 mt-24 text-center">
          <h1 className="text-4xl font-black text-mello-light mb-3">Pricing</h1>
          <p className="text-lg text-white/70">Simple, transparent pricing.</p>
        </header>

        {/* Free Tier */}
        <div className="bg-white/5 rounded-3xl p-6 border border-white/10 mb-6">
          <span className="inline-block bg-mello-yellow/20 text-mello-yellow text-xs font-bold px-3 py-1 rounded-full mb-4">EARLY ACCESS</span>
          <h2 className="text-2xl font-black text-mello-light mb-1">Free Tier</h2>
          <div className="flex items-end gap-1 mb-3">
            <span className="text-4xl font-black text-mello-yellow">₹0</span>
            <span className="text-white/50 mb-1">/ forever</span>
          </div>
          <p className="text-white/60 text-sm mb-6">Everything you need to run your practice. No credit card required.</p>

          <a href="https://app.mellominds.co.in" target="_blank" rel="noopener noreferrer"
            className="block w-full text-center bg-mello-yellow text-mello-bg px-6 py-3 rounded-full font-bold hover:bg-mello-yellow/90 transition-colors shadow-lg mb-6">
            Get Started Free
          </a>

          <div className="space-y-2">
            {freeFeatures.map((section) => (
              <div key={section.category} className="border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFree(openFree === section.category ? null : section.category)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm font-semibold text-mello-yellow">{section.category}</span>
                  <span className="text-white/40 text-lg">{openFree === section.category ? '−' : '+'}</span>
                </button>
                {openFree === section.category && (
                  <ul className="px-4 pb-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-mello-yellow mt-0.5">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 border-t border-white/10">
            <p className="text-xs text-white/40 font-semibold uppercase mb-2">Not included</p>
            <ul className="space-y-1">
              {['Custom profile link', 'Online payment gateway', 'Configurable reminder schedules'].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/40">
                  <span>✕</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-gradient-to-b from-mello-yellow/10 to-white/5 rounded-3xl p-6 border border-mello-yellow/30 mb-10">
          <span className="inline-block bg-mello-yellow text-mello-bg text-xs font-black px-3 py-1 rounded-full mb-4">ENTERPRISE</span>
          <h2 className="text-2xl font-black text-mello-light mb-1">Enterprise</h2>
          <div className="flex items-end gap-1 mb-3">
            <span className="text-4xl font-black text-mello-yellow">Custom</span>
          </div>
          <p className="text-white/60 text-sm mb-6">For clinics, organizations, and teams that need more power.</p>

          <a href="mailto:mellomindsventure@gmail.com"
            className="block w-full text-center bg-white/10 border border-mello-yellow/50 text-mello-yellow px-6 py-3 rounded-full font-bold hover:bg-mello-yellow hover:text-mello-bg transition-colors shadow-lg mb-6">
            Contact us for pricing →
          </a>

          <p className="text-xs text-white/50 mb-3">Everything in Free Tier, plus:</p>
          <div className="space-y-2">
            {enterpriseFeatures.map((section) => (
              <div key={section.category} className="border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenEnt(openEnt === section.category ? null : section.category)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm font-semibold text-mello-yellow">{section.category}</span>
                  <span className="text-white/40 text-lg">{openEnt === section.category ? '−' : '+'}</span>
                </button>
                {openEnt === section.category && (
                  <ul className="px-4 pb-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-mello-yellow mt-0.5">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <GlobalFooterMobile />
      </div>
    </div>
  );
};

export default PricingMobile;
