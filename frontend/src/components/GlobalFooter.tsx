import React from 'react';

/** Global Footer — Desktop */
export const GlobalFooterDesktop: React.FC = () => {
  return (
    <footer className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img src="/Images/mellomindslogofooter.svg" alt="MelloMinds" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              The future of therapy practice management. Built for Indian mental health professionals.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold text-mello-bg uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="/#features" className="text-sm text-gray-600 hover:text-mello-bg transition-colors">Features</a></li>
              <li><a href="/#pricing" className="text-sm text-gray-600 hover:text-mello-bg transition-colors">Pricing</a></li>
              <li><a href="#faqs" className="text-sm text-gray-600 hover:text-mello-bg transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-bold text-mello-bg uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="https://app.mellominds.co.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-mello-bg transition-colors">Privacy Policy</a></li>
              <li><a href="https://app.mellominds.co.in/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-mello-bg transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="text-sm font-bold text-mello-bg uppercase tracking-wider mb-4">Get Started</h4>
            <p className="text-sm text-gray-600 mb-4">Start managing your practice today.</p>
            <a
              href="https://app.mellominds.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mello-bg text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-mello-bg/90 transition-colors"
            >
              Get Started for Free
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-gray-500">&copy; 2026 MelloMinds LLP. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

/** Global Footer — Mobile */
export const GlobalFooterMobile: React.FC = () => {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="max-w-lg mx-auto">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-3">
            <img src="/Images/mellomindslogofooter.svg" alt="MelloMinds" className="h-8 w-auto" />
          </div>
          <p className="text-xs text-gray-600 leading-relaxed max-w-xs mx-auto">
            The future of therapy practice management. Built for Indian mental health professionals.
          </p>
        </div>

        {/* Links — centered */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <a href="/#features" className="text-xs text-gray-600 hover:text-mello-bg transition-colors">Features</a>
            <a href="/#pricing" className="text-xs text-gray-600 hover:text-mello-bg transition-colors">Pricing</a>
            <a href="#faqs" className="text-xs text-gray-600 hover:text-mello-bg transition-colors">FAQs</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.mellominds.co.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-mello-bg transition-colors">Privacy Policy</a>
            <a href="https://app.mellominds.co.in/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-mello-bg transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-[10px] text-gray-500">&copy; 2026 MelloMinds LLP. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
