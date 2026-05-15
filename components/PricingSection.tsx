import React, { useState } from 'react';

const freeFeatures: { category: string; items: string[] }[] = [
  {
    category: 'Booking & Calendars',
    items: [
      'Create booking calendars (one-on-one, group, couples)',
      'Public booking page with shareable link',
      'Set session duration, description, and type',
      'Custom intake form questions on booking page',
      'Automatic Google Meet link generation',
    ],
  },
  {
    category: 'Client Management',
    items: [
      'Client database (name, email, phone, demographics)',
      'Client transfer system (send/receive clients)',
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
    category: 'Payments',
    items: [
      'Offline payment option (Cash / UPI / manual)',
      'Payment status tracking',
      'Payments & Invoice dashboard',
      'Receipt generation',
    ],
  },
  {
    category: 'Integrations',
    items: [
      'Google Calendar integration',
      'Google Meet auto-generated links',
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
      'Custom platform appearance (colors, logo)',
      'Dedicated branded booking experience',
    ],
  },
  {
    category: 'Payment Gateway',
    items: [
      'Cashfree / Razorpay integration',
      'Automated refund management',
    ],
  },
  {
    category: 'Advanced',
    items: [
      'Unlimited calendars & bookings',
      'Team management (multi-therapist)',
      'Advanced analytics & reporting',
      'API access & webhook integrations',
      'Priority support & dedicated account manager',
    ],
  },
];

/** S5: Pricing Section — Desktop */
export const PricingSectionDesktop: React.FC = () => {
  const [openFree, setOpenFree] = useState<string | null>(null);
  const [openEnt, setOpenEnt] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 md:px-12" style={{backgroundColor: '#27413C'}}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-medium text-mello-light mb-4" style={{fontSize: '40px'}}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-white/70 max-w-2xl">
            Start free, scale when you're ready. No hidden fees, no surprises.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Free Tier */}
          <div className="bg-white rounded-3xl p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-mello-bg/10 text-mello-bg text-xs font-medium px-3 py-1 rounded-full mb-4">EARLY ACCESS</span>
              <h3 className="text-3xl font-medium text-gray-900 mb-1">Free Tier</h3>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-medium text-mello-bg">&#8377;0</span>
                <span className="text-gray-500 mb-2">/ forever</span>
              </div>
              <p className="text-gray-600 text-sm">Everything you need to run your practice. No credit card required.</p>
            </div>

            <a href="https://app.mellominds.co.in" target="_blank" rel="noopener noreferrer"
              className="w-full text-center bg-mello-bg text-white px-6 py-3 rounded-full font-medium hover:bg-mello-bg/90 transition-colors mb-8">
              Get Started Free
            </a>

            <div className="space-y-2 flex-1">
              {freeFeatures.map((section) => (
                <div key={section.category} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFree(openFree === section.category ? null : section.category)}
                    className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-900">{section.category}</span>
                    <span className="text-gray-400 text-lg">{openFree === section.category ? '−' : '+'}</span>
                  </button>
                  {openFree === section.category && (
                    <ul className="px-4 pb-4 space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-mello-bg mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-3xl p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-mello-bg text-white text-xs font-medium px-3 py-1 rounded-full mb-4">ENTERPRISE</span>
              <h3 className="text-3xl font-medium text-gray-900 mb-1">Enterprise</h3>
              <div className="flex items-end gap-1 mb-3">
                <span className="text-5xl font-medium text-mello-bg">Custom</span>
              </div>
              <p className="text-gray-600 text-sm">For clinics, organizations, and teams that need more power and control.</p>
            </div>

            <a href="mailto:mellomindsventure@gmail.com"
              className="w-full text-center bg-gray-100 border border-gray-300 text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-mello-bg hover:text-white hover:border-mello-bg transition-colors mb-8">
              Contact us for pricing &rarr;
            </a>

            <div className="space-y-2 flex-1">
              {enterpriseFeatures.map((section) => (
                <div key={section.category} className="border border-gray-200 rounded-xl overflow-hidden">
                  {section.items.length > 0 ? (
                    <>
                      <button
                        onClick={() => setOpenEnt(openEnt === section.category ? null : section.category)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-900">{section.category}</span>
                        <span className="text-gray-400 text-lg">{openEnt === section.category ? '−' : '+'}</span>
                      </button>
                      {openEnt === section.category && (
                        <ul className="px-4 pb-4 space-y-2">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="text-mello-bg mt-0.5">✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <div className="px-4 py-3">
                      <span className="text-sm font-medium text-gray-900">{section.category}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/** S5: Pricing Section — Mobile */
export const PricingSectionMobile: React.FC = () => {
  const [openFree, setOpenFree] = useState<string | null>(null);
  const [openEnt, setOpenEnt] = useState<string | null>(null);

  return (
    <section className="py-16 px-4" style={{backgroundColor: '#27413C'}}>
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-medium text-mello-light mb-3" style={{fontSize: '28px'}}>
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm text-white/70">
            Start free, scale when you're ready. No hidden fees.
          </p>
        </div>

        {/* Free Tier */}
        <div className="bg-white rounded-3xl p-6 mb-6">
          <span className="inline-block bg-mello-bg/10 text-mello-bg text-xs font-medium px-3 py-1 rounded-full mb-3">EARLY ACCESS</span>
          <h3 className="text-2xl font-medium text-gray-900 mb-1">Free Tier</h3>
          <div className="flex items-end gap-1 mb-2">
            <span className="text-4xl font-medium text-mello-bg">&#8377;0</span>
            <span className="text-gray-500 mb-1 text-sm">/ forever</span>
          </div>
          <p className="text-gray-600 text-xs mb-4">Everything you need. No credit card required.</p>
          <a href="https://app.mellominds.co.in" target="_blank" rel="noopener noreferrer"
            className="w-full text-center block bg-mello-bg text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-mello-bg/90 transition-colors mb-4">
            Get Started Free
          </a>
          <div className="space-y-2">
            {freeFeatures.map((section) => (
              <div key={section.category} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFree(openFree === section.category ? null : section.category)}
                  className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xs font-medium text-gray-900">{section.category}</span>
                  <span className="text-gray-400">{openFree === section.category ? '−' : '+'}</span>
                </button>
                {openFree === section.category && (
                  <ul className="px-3 pb-3 space-y-1">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-mello-bg mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-white rounded-3xl p-6">
          <span className="inline-block bg-mello-bg text-white text-xs font-medium px-3 py-1 rounded-full mb-3">ENTERPRISE</span>
          <h3 className="text-2xl font-medium text-gray-900 mb-1">Enterprise</h3>
          <div className="flex items-end gap-1 mb-2">
            <span className="text-4xl font-medium text-mello-bg">Custom</span>
          </div>
          <p className="text-gray-600 text-xs mb-4">For clinics and teams that need more.</p>
          <a href="mailto:mellomindsventure@gmail.com"
            className="w-full text-center block bg-gray-100 border border-gray-300 text-gray-900 px-5 py-2.5 rounded-full font-medium text-sm hover:bg-mello-bg hover:text-white hover:border-mello-bg transition-colors mb-4">
            Contact us for pricing &rarr;
          </a>
          <div className="space-y-2">
            {enterpriseFeatures.map((section) => (
              <div key={section.category} className="border border-gray-200 rounded-xl overflow-hidden">
                {section.items.length > 0 ? (
                  <>
                    <button
                      onClick={() => setOpenEnt(openEnt === section.category ? null : section.category)}
                      className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xs font-medium text-gray-900">{section.category}</span>
                      <span className="text-gray-400">{openEnt === section.category ? '−' : '+'}</span>
                    </button>
                    {openEnt === section.category && (
                      <ul className="px-3 pb-3 space-y-1">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                            <span className="text-mello-bg mt-0.5">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <div className="px-3 py-2">
                    <span className="text-xs font-medium text-gray-900">{section.category}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
