import React from 'react';

interface SecurityMethod {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TrustMetric {
  value: string;
  label: string;
}

const securityMethods: SecurityMethod[] = [
  {
    title: 'Zero-Knowledge Encryption',
    description: 'Your client data is encrypted end-to-end. Even we cannot access your session notes or client records — only you hold the keys.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: 'Data Residency in India',
    description: 'All data is stored on servers located in India, ensuring compliance with local data protection regulations and minimal latency.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: 'Role-Based Access Control',
    description: 'Granular permissions ensure that only authorized personnel can access sensitive information — protecting both practitioners and clients.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Encrypted Data Transfer',
    description: 'All communication between your browser and our servers uses TLS 1.3 encryption — the same standard used by banks and healthcare systems.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

const trustMetrics: TrustMetric[] = [
  { value: '256-bit', label: 'AES Encryption' },
  { value: '99.9%', label: 'Uptime SLA' },
];

const complianceBadges = [
  { label: 'DPDP Act', description: 'India Data Protection' },
  { label: 'ISO 27001', description: 'Information Security' },
  { label: 'HIPAA', description: 'Healthcare Privacy' },
  { label: 'SSL/TLS', description: 'Secure Connection' },
];

/** S3: Security & Compliance Section — Desktop */
export const SecuritySectionDesktop: React.FC = () => {
  return (
    <section className="bg-[#082421] py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-medium text-mello-light mb-4" style={{fontSize: '40px'}}>
            Your Data, Fort Knox Level Security
          </h2>
          <p className="text-lg text-white/70 max-w-2xl">
            We take data protection seriously. Your clients trust you with their most vulnerable moments — we ensure that trust is never compromised.
          </p>
        </div>

        {/* Security Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {securityMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-mello-yellow/50 transition-colors group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-mello-yellow/10 flex items-center justify-center text-mello-yellow flex-shrink-0 group-hover:bg-mello-yellow/20 transition-colors">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mello-light mb-2">{method.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-10">
          <h3 className="text-center text-lg font-semibold text-white/60 uppercase tracking-wider mb-8">Trust Numbers</h3>
          <div className="flex justify-center gap-16">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="font-medium text-mello-yellow mb-1" style={{fontSize: '40px'}}>{metric.value}</div>
                <div className="text-sm text-white/60">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/** S3: Security & Compliance Section — Mobile */
export const SecuritySectionMobile: React.FC = () => {
  return (
    <section className="bg-[#082421] py-16 px-4 border-t border-white/5">
      <div className="max-w-lg mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-medium text-mello-light mb-3" style={{fontSize: '28px'}}>
            Your Data, Fort Knox Level Security
          </h2>
          <p className="text-sm text-white/70">
            We take data protection seriously. Your clients trust you — we ensure that trust is never compromised.
          </p>
        </div>

        {/* Security Methods */}
        <div className="space-y-4 mb-10">
          {securityMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl p-5 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-mello-yellow/10 flex items-center justify-center text-mello-yellow flex-shrink-0">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-mello-light mb-1">{method.title}</h3>
                  <p className="text-white/70 leading-relaxed text-xs">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Metrics */}
        <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
          <h3 className="text-center text-xs font-semibold text-white/60 uppercase tracking-wider mb-6">Trust Numbers</h3>
          <div className="flex justify-center gap-10">
            {trustMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="font-medium text-mello-yellow mb-1" style={{fontSize: '32px'}}>{metric.value}</div>
                <div className="text-xs text-white/60">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
