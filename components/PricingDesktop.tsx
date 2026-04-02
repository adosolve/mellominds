import React, { useState } from 'react';
import { Logo } from './Logo';

const freeFeatures: { category: string; items: string[] }[] = [
  {
    category: 'Booking & Calendars',
    items: [
      'Create booking calendars (one-on-one, group, couples)',
      'Public booking page with shareable link',
      'Customizable booking slug per calendar',
      'Set session duration, description, and type',
      'Custom intake form questions on booking page',
      'Multi-location support (Google Meet / in-person)',
      'Automatic Google Meet link generation',
    ],
  },
  {
    category: 'Availability',
    items: [
      'Weekly availability schedule (day/time ranges)',
      'Google Calendar free/busy sync',
      'Real-time slot availability for clients',
    ],
  },
  {
    category: 'Client Management',
    items: [
      'Client database (name, email, phone, demographics)',
      'Manual client creation',
      'Client transfer system (send/receive clients)',
      'Client activity tracking (homework, action items)',
      'Session history per client',
    ],
  },
  {
    category: 'Session Notes',
    items: [
      'Session notes per appointment',
      'Customizable note templates',
      'Clinical profile per client',
    ],
  },
  {
    category: 'Appointments',
    items: [
      'View, create, cancel, and reschedule appointments',
      'Appointment status tracking',
      'Booking confirmation with cancel/reschedule token',
    ],
  },
  {
    category: 'Dashboard & Analytics',
    items: [
      'Dashboard stats: sessions, cancellations, no-shows, pending notes',
      'Date filtering (all-time, current month, custom range)',
      'Profile completion tracker',
    ],
  },
  {
    category: 'Integrations',
    items: [
      'Google OAuth login',
      'Google Calendar integration (event sync + Meet links)',
      'Cloudinary profile picture upload',
    ],
  },
  {
    category: 'Notifications',
    items: [
      'Real-time notification bell (bookings, cancellations, transfers)',
      'Unread count badge',
      'Mark as read (individual or all)',
    ],
  },
  {
    category: 'Email Notifications',
    items: [
      'Booking confirmation email to client',
      'Cancellation & reschedule notification emails',
      'Booking link invitation email',
      'Forgot password email',
      'Client transfer request/approval/rejection emails',
    ],
  },
  {
    category: 'Payments',
    items: [
      'Offline payment option (Cash / UPI / manual)',
      'Payment status tracking (Pending, Paid, Refunded, Cancelled)',
      'Payments & Invoice dashboard',
      'Receipt generation',
      'CSV export of payment records',
    ],
  },
];

const enterpriseFeatures: { category: string; items: string[] }[] = [
  {
    category: 'Everything in Free Tier, plus',
    items: [],
  },
  {
    category: 'Platform Customization',
    items: [
      'Custom domain & white-label branding',
      'Custom platform appearance (colors, logo, branding)',
      'Dedicated branded booking experience',
    ],
  },
  {
    category: 'Payment Gateway',
    items: [
      'Cashfree payment gateway integration',
      'Razorpay integration',
      'Sandbox & production environment support',
      'Webhook-based payment status sync',
      'Automated refund management',
    ],
  },
  {
    category: 'Custom Profile Link',
    items: [
      'Custom username/URL for public profile and booking pages',
    ],
  },
  {
    category: 'Reminders — Full Control',
    items: [
      'Configure email reminder schedules (timing, content)',
      'WhatsApp reminders to clients',
    ],
  },
  {
    category: 'Advanced',
    items: [
      'Unlimited calendars & bookings',
      'Advanced analytics & reporting',
      'Team management (multi-therapist organization)',
      'API access & webhook integrations',
      'Dedicated account manager',
      'Priority support',
    ],
  },
];

const PricingDesktop: React.FC = () => {
  const [openFree, setOpenFree] = useState<string | null>(null);
  const [openEnt, setOpenEnt] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#082421] text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-[#082421]/80 backdrop-blur-md border-b border-white/5">
        <a href="/" className="inline-block">
          <Logo />
        </a>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-1 bg-white rounded-full px-2 py-2">
            <a href="/features" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">Features</a>
            <a href="/pricing" className="px-4 py-2 text-gray-700 bg-gray-100 rounded-full transition-colors font-medium text-sm">Pricing</a>
            <a href="/resources" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">Resources</a>
            <a href="/contact" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">Contact Us</a>
          </nav>
          <a href="https://app.mellominds.co.in" target="_blank" rel="noopener noreferrer"
            className="bg-mello-yellow text-mello-bg px-6 py-2.5 rounded-full font-semibold hover:bg-mello-yellow/90 transition-colors shadow-lg">
            Get early access →
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-16">

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-mello-light mb-4">Pricing</h1>
          <p className="text-xl text-white/70">Simple, transparent pricing. Start free, scale when you're ready.</p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">

          {/* Free Tier */}
          <div className="relative bg-white/5 rounded-3xl p-8 border border-white/10 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-mello-yellow/20 text-mello-yellow text-xs font-bold px-3 py-1 rounded-full mb-4">EARLY ACCESS</span>
              <h2 className="text-3xl font-black text-mello-light mb-1">Free Tier</h2>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-black text-mello-yellow">₹0</span>
                <span className="text-white/50 mb-2">/ forever</span>
              </div>
              <p className="text-white/60 text-sm">Everything you need to run your practice. No credit card required.</p>
            </div>

            <a href="https://app.mellominds.co.in" target="_blank" rel="noopener noreferrer"
              className="w-full text-center bg-mello-yellow text-mello-bg px-6 py-3 rounded-full font-bold hover:bg-mello-yellow/90 transition-colors shadow-lg mb-8">
              Get started for free →
            </a>

            {/* Feature accordion */}
            <div className="space-y-2 flex-1">
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
                          <span className="text-mello-yellow mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Not included */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/40 font-semibold uppercase mb-3">Not included</p>
              <ul className="space-y-1">
                {['Custom profile link (custom URL)', 'Online payment gateway (Cashfree / Razorpay)', 'Configurable reminder schedules'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/40">
                    <span className="mt-0.5">✕</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise */}
          <div className="relative bg-gradient-to-b from-mello-yellow/10 to-white/5 rounded-3xl p-8 border border-mello-yellow/30 flex flex-col">
            <div className="absolute top-4 right-4">
              <span className="bg-mello-yellow text-mello-bg text-xs font-black px-3 py-1 rounded-full">ENTERPRISE</span>
            </div>
            <div className="mb-6">
              <span className="inline-block bg-white/10 text-white/60 text-xs font-bold px-3 py-1 rounded-full mb-4">CUSTOM PRICING</span>
              <h2 className="text-3xl font-black text-mello-light mb-1">Enterprise</h2>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-black text-mello-yellow">Custom</span>
              </div>
              <p className="text-white/60 text-sm">For clinics, organizations, and teams that need more power and control.</p>
            </div>

            <a href="mailto:mellomindsventure@gmail.com"
              className="w-full text-center bg-white/10 border border-mello-yellow/50 text-mello-yellow px-6 py-3 rounded-full font-bold hover:bg-mello-yellow hover:text-mello-bg transition-colors shadow-lg mb-8">
              Contact us for pricing →
            </a>

            {/* Feature accordion */}
            <div className="space-y-2 flex-1">
              {enterpriseFeatures.map((section) => (
                <div key={section.category} className="border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenEnt(openEnt === section.category ? null : section.category)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm font-semibold text-mello-yellow">{section.category}</span>
                    <span className="text-white/40 text-lg">{openEnt === section.category ? '−' : '+'}</span>
                  </button>
                  {openEnt === section.category && section.items.length > 0 && (
                    <ul className="px-4 pb-4 space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                          <span className="text-mello-yellow mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-mello-yellow/20 to-mello-light/10 rounded-3xl p-12 border border-mello-yellow/30 text-center mb-16">
          <h2 className="text-3xl font-black text-mello-light mb-3">Ready to get started?</h2>
          <p className="text-white/60 mb-6">Join therapists already using MelloMinds to streamline their practice.</p>
          <a href="https://app.mellominds.co.in" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-mello-yellow text-mello-bg px-8 py-4 rounded-full font-bold text-lg hover:bg-mello-yellow/90 transition-colors shadow-lg">
            Start for free →
          </a>
        </div>

        {/* Footer */}
        <footer className="pt-8 border-t border-white/10">
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

export default PricingDesktop;
