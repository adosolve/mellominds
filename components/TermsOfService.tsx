import React from 'react';
import { Logo } from './Logo';

const TermsOfService: React.FC = () => {
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
              Login / Sign Up
            </a>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-mello-light mb-4">Terms of Service</h1>
          <p className="text-white/70">Effective Date: February 28, 2026</p>
        </header>

        {/* Content */}
        <div className="space-y-8 text-white/90 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">1. Acceptance of Terms</h2>
            <p>
              By creating an account or using the MelloMinds platform, you ("the User," "the Therapist," or "the Practice") agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a company or legal entity, you represent that you have the authority to bind such entity to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">2. Description of Service</h2>
            <p className="mb-4">
              MelloMinds provides a software-as-a-service (SaaS) platform for therapy practice management, including but not limited to scheduling, intake forms, session notes, and billing.
            </p>
            <div className="bg-mello-yellow/10 border-l-4 border-mello-yellow p-4 rounded">
              <p className="font-semibold text-mello-yellow mb-2">Important Disclosure:</p>
              <p>
                MelloMinds is a technology provider. We do not provide mental health services, medical advice, or crisis intervention. We are not responsible for the clinical outcomes or the professional conduct of the therapists using our platform.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">3. User Accounts and Security</h2>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <span className="font-semibold text-mello-light">Eligibility:</span> You must be a licensed mental health professional (or an authorized administrative representative) to use the platform for clinical purposes.
              </li>
              <li>
                <span className="font-semibold text-mello-light">Account Responsibility:</span> You are responsible for maintaining the confidentiality of your login credentials. You must notify us immediately of any unauthorized use of your account.
              </li>
              <li>
                <span className="font-semibold text-mello-light">Accuracy:</span> You agree to provide accurate, current, and complete information during the registration process.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">4. Professional Responsibility and Compliance</h2>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <span className="font-semibold text-mello-light">Clinical Judgment:</span> The User retains sole responsibility for their clinical decisions, treatment plans, and patient interactions.
              </li>
              <li>
                <span className="font-semibold text-mello-light">Legal Compliance:</span> You are responsible for ensuring your use of MelloMinds complies with local laws and professional ethics (e.g., HIPAA in the US, GDPR in Europe, or DPDPA in India).
              </li>
              <li>
                <span className="font-semibold text-mello-light">Patient Consent:</span> You represent that you have obtained all necessary consents from your clients to store their personal and health information on MelloMinds.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">5. Fees and Payment</h2>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <span className="font-semibold text-mello-light">Subscription:</span> Services are provided on a subscription basis (Monthly/Annual). Fees are non-refundable except where required by law.
              </li>
              <li>
                <span className="font-semibold text-mello-light">Changes:</span> We reserve the right to modify our pricing with at least 30 days' notice.
              </li>
              <li>
                <span className="font-semibold text-mello-light">Taxes:</span> Users are responsible for all applicable taxes associated with their use of the service.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">6. Intellectual Property</h2>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <span className="font-semibold text-mello-light">Our Content:</span> MelloMinds owns all rights, titles, and interests in the platform's software, design, logos, and original content.
              </li>
              <li>
                <span className="font-semibold text-mello-light">User Content:</span> You retain ownership of all data, notes, and records you upload. You grant MelloMinds a limited, non-exclusive license to host and process this data solely to provide the services to you.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">7. Prohibited Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the platform for any illegal or unauthorized purpose.</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the platform.</li>
              <li>Upload any content that infringes on third-party intellectual property or privacy rights.</li>
              <li>Use the service to transmit viruses or malicious code.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, MelloMinds (and its affiliates/officers) shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or professional reputation. Our total liability for any claim arising out of these terms shall not exceed the amount paid by you to MelloMinds in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">9. Termination</h2>
            <ul className="list-disc list-inside space-y-3 ml-4">
              <li>
                <span className="font-semibold text-mello-light">By You:</span> You may cancel your account at any time via the dashboard.
              </li>
              <li>
                <span className="font-semibold text-mello-light">By Us:</span> We may suspend or terminate your access if you breach these terms or fail to pay subscription fees.
              </li>
              <li>
                <span className="font-semibold text-mello-light">Data Export:</span> Upon termination, we will provide a 30-day window for you to export your clinical records before they are permanently deleted from our active servers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mello-yellow mb-4">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
            </p>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
            <span>© 2026 MelloMinds. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <a href="/" className="hover:text-white/70 transition-colors">Home</a>
              <span>•</span>
              <a href="/privacy-policy" className="hover:text-white/70 transition-colors underline">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TermsOfService;
