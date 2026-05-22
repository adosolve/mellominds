import React, { useState } from 'react';

interface EnterpriseBenefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: EnterpriseBenefit[] = [
  {
    title: 'Multi-Seat Management',
    description: 'Onboard your entire team under one account. Manage practitioners, assign roles, and oversee operations from a single admin dashboard.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Clinic-Wide Analytics',
    description: 'Get a bird\u2019s-eye view of your clinic\u2019s performance with aggregated insights on sessions, revenue, client retention, and practitioner workload.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Centralized Billing',
    description: 'Consolidate invoicing and payment tracking across all practitioners. One billing dashboard for the entire organization.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Built to grow with you. Whether you have 5 practitioners or 500, the platform scales seamlessly without performance trade-offs.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Support & Onboarding',
    description: 'Enterprise clients get priority support, dedicated account management, and hands-on onboarding to ensure a smooth transition.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: 'Custom Integrations',
    description: 'Need something specific? Enterprise plans include custom API integrations, white-labeling options, and tailored workflows for your clinic.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

/** S4: Enterprise Value Proposition — Desktop (Tab-based, same style as S2) */
export const EnterpriseSectionDesktop: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-6 md:px-12" style={{backgroundColor: '#D5FFFA'}}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-medium text-mello-bg mb-4" style={{fontSize: '40px'}}>
            What&apos;s in it for Clinics & Mental Health Companies?
          </h2>
          <p className="text-lg text-mello-bg/70 max-w-2xl">
            MelloMinds scales with your organization. From small group practices to large wellness companies, we have the tools to power your growth.
          </p>
        </div>

        {/* Two-column: Left nav + Right card */}
        <div className="flex gap-10">
          {/* Left: Vertical nav */}
          <nav className="hidden md:flex flex-col gap-1 w-60 flex-shrink-0">
            {benefits.map((benefit, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-mello-bg text-white font-bold'
                    : 'text-mello-bg/50 hover:text-mello-bg hover:bg-mello-bg/5 font-medium'
                }`}
              >
                <span className="text-sm">{benefit.title}</span>
              </button>
            ))}
          </nav>

          {/* Right: Card */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl p-8 md:p-10 min-h-[400px]">
              {/* Title with icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-mello-bg/10 flex items-center justify-center text-mello-bg">
                  {benefits[activeIndex].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {benefits[activeIndex].title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">
                {benefits[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/** S4: Enterprise Value Proposition — Mobile (horizontal swipe cards) */
export const EnterpriseSectionMobile: React.FC = () => {
  return (
    <section className="py-16 px-4" style={{backgroundColor: '#D5FFFA'}}>
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="font-medium text-mello-bg mb-3" style={{fontSize: '28px'}}>
            What&apos;s in it for Clinics & Mental Health Companies?
          </h2>
          <p className="text-sm text-mello-bg/70">
            MelloMinds scales with your organization. Tools to power your growth from small practices to large companies.
          </p>
        </div>

        {/* Horizontal scrollable cards */}
        <div className="overflow-x-auto -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white rounded-2xl p-6"
                style={{ width: '300px', minHeight: '200px' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-mello-bg/10 flex items-center justify-center text-mello-bg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-xs">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
