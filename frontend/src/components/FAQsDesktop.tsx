import React, { useState } from 'react';
import { Header } from './Header';
import { GlobalFooterDesktop } from './GlobalFooter';
import { SEO } from './SEO';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  faqs: FAQ[];
}

const FAQsDesktop: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqSections: FAQSection[] = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is MelloMinds?",
          answer: "MelloMinds is a comprehensive therapy practice management platform designed for therapists and mental health professionals to manage their practice efficiently, including client management, appointment scheduling, payments, and session notes."
        },
        {
          question: "How do I sign up for MelloMinds?",
          answer: "You can sign up using your email and password, or use Google OAuth for quick registration. The platform supports both authentication methods."
        },
        {
          question: "Is MelloMinds mobile-friendly?",
          answer: "Yes, MelloMinds is fully responsive and optimized for mobile devices with features like hamburger menu navigation, touch-friendly interfaces, and mobile-optimized layouts."
        }
      ]
    },
    {
      title: "Account & Profile Management",
      faqs: [
        {
          question: "Can I use my Google account to log in?",
          answer: "Yes, MelloMinds supports Google OAuth integration, allowing you to sign in with your Google account without creating a separate password."
        },
        {
          question: "What information do I need to complete my profile?",
          answer: "You'll need to provide your name, email, phone, specialization, languages spoken, location details (country, state, city), clinic address, and optionally upload a profile picture."
        },
        {
          question: "Can I change my subscription plan?",
          answer: "Yes, the platform supports different subscription plans. You can manage your plan through your account settings."
        }
      ]
    },
    {
      title: "Client Management",
      faqs: [
        {
          question: "How do I add clients to my practice?",
          answer: "You can add clients manually through the \"All Clients\" section, or clients can be automatically added when they book appointments through your public booking links."
        },
        {
          question: "Can I transfer clients to another therapist?",
          answer: "Yes, MelloMinds supports client transfers between therapists. You can initiate transfer requests that need to be approved by the receiving therapist."
        },
        {
          question: "What client information can I store?",
          answer: "You can store comprehensive client profiles including personal details, emergency contacts, session notes, activities/homework assignments, and appointment history."
        }
      ]
    },
    {
      title: "Appointment Scheduling",
      faqs: [
        {
          question: "How does the appointment booking system work?",
          answer: "You create calendar services (booking types) with specific durations, descriptions, and settings. Clients can book through public booking links, or you can create appointments manually."
        },
        {
          question: "Can I set my availability?",
          answer: "Yes, you can set your weekly availability by day and time slots. The system will only allow bookings during your available hours."
        },
        {
          question: "Does MelloMinds integrate with Google Calendar?",
          answer: "Yes, the platform integrates with Google Calendar and can automatically create Google Meet links for virtual sessions."
        },
        {
          question: "Can clients cancel or reschedule appointments?",
          answer: "Yes, you can configure cancellation and reschedule policies for each service type, including time windows and refund policies."
        }
      ]
    },
    {
      title: "Payments & Billing",
      faqs: [
        {
          question: "Does MelloMinds handle payments?",
          answer: "Yes, the platform integrates with payment gateways like Cashfree for online payments. You can also track offline payments and manage invoicing."
        },
        {
          question: "Can I set different prices for different services?",
          answer: "Yes, each calendar service can have its own pricing structure with multiple price options and currencies."
        },
        {
          question: "How are refunds handled?",
          answer: "The system tracks payment statuses including refunds and partial refunds, with policies you can configure per service type."
        }
      ]
    },
    {
      title: "Session Notes & Documentation",
      faqs: [
        {
          question: "Can I create custom note templates?",
          answer: "Yes, you can create personalized note templates with custom fields to standardize your session documentation process."
        },
        {
          question: "Are session notes secure?",
          answer: "Yes, MelloMinds implements encryption for sensitive data including session notes and chat messages to ensure client confidentiality."
        },
        {
          question: "Can I assign activities or homework to clients?",
          answer: "Yes, you can create client activities with descriptions and set up automatic reminder notifications."
        }
      ]
    },
    {
      title: "Notifications & Communication",
      faqs: [
        {
          question: "What types of notifications will I receive?",
          answer: "You'll receive notifications for new bookings, cancellations, reschedules, payments, client transfer requests, and other important practice events."
        },
        {
          question: "Is there a chat feature?",
          answer: "Yes, MelloMinds includes a chat widget for real-time communication with clients, with encryption for security."
        },
        {
          question: "Can I send reminders to clients?",
          answer: "Yes, the system can send automatic reminders for activities/homework assignments based on intervals you set."
        }
      ]
    },
    {
      title: "Technical & Security",
      faqs: [
        {
          question: "Is my data secure?",
          answer: "Yes, MelloMinds implements comprehensive security measures including data encryption, secure authentication, rate limiting, and follows security best practices."
        },
        {
          question: "Can I access MelloMinds offline?",
          answer: "Currently, MelloMinds requires an internet connection. Offline capabilities are planned for future updates."
        },
        {
          question: "What browsers are supported?",
          answer: "MelloMinds works on all modern browsers including Chrome, Safari, Firefox, and Edge on both desktop and mobile devices."
        }
      ]
    },
    {
      title: "Enterprise Features",
      faqs: [
        {
          question: "Does MelloMinds support multiple therapists in one organization?",
          answer: "Yes, there are enterprise features that allow organizations to manage multiple therapists, with lead management and organizational oversight capabilities."
        },
        {
          question: "Can I invite other therapists to join my organization?",
          answer: "Yes, enterprise accounts can invite and manage multiple therapists within their organization."
        }
      ]
    },
    {
      title: "Support & Troubleshooting",
      faqs: [
        {
          question: "What if I encounter technical issues?",
          answer: "The platform includes error logging and diagnostic tools. For support, you can contact the MelloMinds support team through the appropriate channels."
        },
        {
          question: "Can I export my data?",
          answer: "The platform includes export functionality for payments, invoices, and other data for your records and reporting needs."
        },
        {
          question: "Is there a mobile app?",
          answer: "Currently, MelloMinds is a responsive web application optimized for mobile browsers. A native mobile app may be available in the future."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#082421] text-white">
      {/* SEO with FAQ Schema */}
      <SEO 
        title="FAQs | MelloMinds - Therapy Practice Management Software"
        description="Find answers to frequently asked questions about MelloMinds therapy practice management platform. Learn about features, pricing, security, and more."
        path="/faqs"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'FAQs', url: '/faqs' }
        ]}
        faqSchema={faqSections.flatMap(section => section.faqs)}
      />
      
      {/* Header */}
      <Header currentPage="faqs" />

      {/* Main Content */}
      <main className="pt-44 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-black text-mello-light mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Find answers to common questions about MelloMinds therapy practice management platform.
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-bold text-mello-yellow mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => {
                    const faqId = `${sectionIndex}-${faqIndex}`;
                    const isOpen = openFAQ === faqId;
                    
                    return (
                      <div key={faqIndex} className="border border-white/10 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(faqId)}
                          className="w-full px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between"
                        >
                          <span className="font-semibold text-white pr-4">
                            {faq.question}
                          </span>
                          <svg
                            className={`w-5 h-5 text-mello-yellow transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-white/3 border-t border-white/10">
                            <p className="text-white/80 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <GlobalFooterDesktop />
      </main>
    </div>
  );
};

export default FAQsDesktop;