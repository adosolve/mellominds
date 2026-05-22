import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Is MelloMinds really free?',
    answer: 'Yes! Our Free Tier includes everything you need to manage your therapy practice — booking, client management, session notes, and payments. No credit card required, no time limit.',
  },
  {
    question: 'How secure is my client data?',
    answer: 'We use 256-bit AES encryption, TLS 1.3 for data in transit, and store all data on servers in India. Your client records are protected with the same standards used by banks and healthcare systems.',
  },
  {
    question: 'Can I transfer clients to another therapist?',
    answer: 'Yes. MelloMinds has a built-in client transfer system that lets you securely send or receive clients between practitioners with full session history intact.',
  },
  {
    question: 'Does MelloMinds integrate with Google Calendar?',
    answer: 'Yes. We offer full Google Calendar sync via OAuth — every booking automatically reflects on your personal calendar, and Google Meet links are auto-generated for virtual sessions.',
  },
  {
    question: 'What payment methods are supported?',
    answer: 'The Free Tier supports offline payments (Cash, UPI, manual tracking). Enterprise plans include Cashfree and Razorpay integration for online payment collection.',
  },
  {
    question: 'Who is the Enterprise plan for?',
    answer: 'The Enterprise plan is designed for clinics, group practices, and mental health organizations that need multi-seat management, custom branding, advanced analytics, and dedicated support.',
  },
  {
    question: 'Can I customize my booking page?',
    answer: 'Yes. You can set a custom booking slug, add intake form questions, configure session types and durations, and share a public booking link with your clients.',
  },
  {
    question: 'How do I get started?',
    answer: 'Simply click "Get Started Free" — create your account, set up your availability, and share your booking link. You can be up and running in under 5 minutes.',
  },
];

interface FAQsLightboxProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FAQsLightbox: React.FC<FAQsLightboxProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <h2 className="font-medium text-gray-900 mb-2" style={{fontSize: '32px'}}>
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-8">
          Quick answers to common questions about MelloMinds.
        </p>

        {/* FAQ List */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-900 pr-4">{faq.question}</span>
                <span className="text-gray-400 text-lg flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
