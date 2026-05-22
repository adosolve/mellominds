import React, { useState } from 'react';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: 'Schedule & Manage Calendars',
    description: 'Set your availability, create event types, and let clients book through your public booking page. Automated reminders cut no-shows — no back-and-forth needed.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Client Management',
    description: 'Full CRM-style client profiles with session history, notes, and everything you need to manage your caseload in one place.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Session Notes Management',
    description: 'Write session notes tied to client profiles with fully customizable templates. Spend less time on paperwork, more time with clients.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Transfer Clients Safely',
    description: 'Securely transfer clients between practitioners with full history intact — ensuring continuity of care without compromising privacy.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'Bills & Payments',
    description: 'Integrated payment collection and invoicing. Require upfront payment at booking and track every transaction to keep your cash flow healthy.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

/** S2: Features Section — Desktop */
export const FeaturesSectionDesktop: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <h2 className="font-medium text-gray-900 mb-4" style={{fontSize: '40px'}}>
            Built for Therapists, by Design
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Everything an individual practitioner needs to run a seamless, secure, and professional practice.
          </p>
        </div>

        {/* Two-column: Left nav + Right card */}
        <div className="flex gap-10">
          {/* Left: Vertical nav */}
          <nav className="hidden md:flex flex-col gap-1 w-60 flex-shrink-0">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-mello-bg text-white font-bold'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100 font-medium'
                }`}
              >
                <span className="text-sm">{feature.title}</span>
              </button>
            ))}
          </nav>

          {/* Right: Card */}
          <div className="flex-1 min-w-0">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 min-h-[400px]">
              {/* Title with icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-mello-bg/10 flex items-center justify-center text-mello-bg">
                  {features[activeIndex].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {features[activeIndex].title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base">
                {features[activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/** S2: Features Section — Mobile */
export const FeaturesSectionMobile: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="font-medium text-gray-900 mb-3" style={{fontSize: '28px'}}>
            Built for Therapists, by Design
          </h2>
          <p className="text-sm text-gray-600">
            Everything an individual practitioner needs to run a seamless, secure, and professional practice.
          </p>
        </div>

        {/* Horizontal scrollable cards */}
        <div className="overflow-x-auto -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-50 border border-gray-200 rounded-2xl p-6"
                style={{ width: '300px', minHeight: '200px' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-mello-bg/10 flex items-center justify-center text-mello-bg">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-xs">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
