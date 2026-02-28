import React from 'react';
import { Logo } from './Logo';

const PrivacyPolicyDesktop: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#082421] text-white px-6 py-8 md:px-12 md:py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-start justify-between mb-8">
            <a href="/" className="inline-block hover:opacity-80 transition-opacity">
              <Logo />
            </a>
            <a 
              href="https://app.mellominds.co.in" 
              className="bg-mello-yellow text-mello-bg px-6 py-2.5 rounded-full font-semibold hover:bg-mello-yellow/90 transition-colors shadow-lg"
            >
              Get early access →
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-mello-light mb-4">Privacy Policy</h1>
          <p className="text-white/70">Last updated: February 28, 2026</p>
        </header>

        {/* Content */}
        <div className="space-y-8 text-white/90 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">1. Introduction</h2>
            <p>
              Welcome to MelloMinds. We provide a therapy practice management platform designed to streamline operations for mental health professionals. We are committed to protecting the privacy of both our Users (Therapists/Practices) and their Clients. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information that allows us to provide a secure and efficient service:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="font-semibold text-mello-light">Account Data:</span> Names, email addresses, billing information, and professional credentials of therapists.</li>
              <li><span className="font-semibold text-mello-light">Client Data (Sensitive Personal Information):</span> As a "Data Processor," we store information provided by therapists about their clients, including intake forms, session notes, and treatment plans.</li>
              <li><span className="font-semibold text-mello-light">Usage Data:</span> IP addresses, browser types, and activity logs to ensure platform security and performance.</li>
              <li><span className="font-semibold text-mello-light">Communication Data:</span> Records of support requests or feedback provided to us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">3. Legal Basis for Processing</h2>
            <p className="mb-4">We process data under the following legal frameworks:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="font-semibold text-mello-light">Consent:</span> Explicit consent obtained from users at the time of sign-up.</li>
              <li><span className="font-semibold text-mello-light">Contractual Necessity:</span> To fulfill our service agreement with you.</li>
              <li><span className="font-semibold text-mello-light">Legal Obligation:</span> To comply with healthcare regulations and tax laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">4. Data Security and HIPAA/GDPR Compliance</h2>
            <p className="mb-4">MelloMinds employs industry-leading security measures to protect sensitive health data:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="font-semibold text-mello-light">Encryption:</span> All data is encrypted at rest (AES-256) and in transit (TLS 1.2+).</li>
              <li><span className="font-semibold text-mello-light">Access Controls:</span> Role-based access ensures only authorized personnel can view specific data.</li>
              <li><span className="font-semibold text-mello-light">Data Silos:</span> Client records are logically separated to prevent cross-account access.</li>
              <li><span className="font-semibold text-mello-light">Audit Logs:</span> We maintain immutable logs of who accessed what data and when.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">5. Data Sharing and Third Parties</h2>
            <p className="mb-4">
              We do not sell your data. We only share information with third-party service providers (e.g., AWS for hosting, Stripe for payments) who are contractually bound to the same privacy standards.
            </p>
            <p>
              <span className="font-semibold text-mello-light">Legal Disclosure:</span> We may disclose data if required by law (e.g., a court order).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">6. Your Rights</h2>
            <p className="mb-4">Depending on your location, you have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><span className="font-semibold text-mello-light">Access & Portability:</span> Request a copy of your data in a structured format.</li>
              <li><span className="font-semibold text-mello-light">Correction:</span> Update inaccurate or incomplete information.</li>
              <li><span className="font-semibold text-mello-light">Erasure ("Right to be Forgotten"):</span> Request deletion of your data, subject to medical record retention laws (e.g., HIPAA requires 6-year retention).</li>
              <li><span className="font-semibold text-mello-light">Withdrawal of Consent:</span> You may withdraw consent for data processing at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">7. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary to provide our services or as required by law. Therapist account data is typically deleted 30 days after account termination, while clinical records may be archived longer to meet healthcare compliance standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">8. Contact Information</h2>
            <p className="mb-4">
              If you have any questions or wish to exercise your data rights, please contact our Data Protection Officer:
            </p>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <p className="font-semibold text-mello-light mb-2">MelloMinds</p>
              <p>Email: mellomindsventure@gmail.com</p>
              <p>Address: Pune, Maharashtra, India</p>
            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
            <span>© 2026 MelloMinds. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="/" className="hover:text-white/70 transition-colors">Home</a>
              <span>•</span>
              <a href="/terms-of-service" className="hover:text-white/70 transition-colors underline">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicyDesktop;
