import React, { useState } from 'react';
import { Logo } from './Logo';

interface MobileHeaderProps {
  currentPage?: 'features' | 'faqs' | 'contact' | 'pricing' | 'privacy' | 'terms' | 'home';
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Header bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-2 bg-black/70 backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center justify-between">
          <a href="/" className="inline-block">
            <Logo className="scale-90" />
          </a>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 text-white hover:text-mello-yellow transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full screen menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex flex-col"
          style={{zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', width: '100vw', height: '100vh'}}
        >
          {/* Top bar: logo + close — same padding as header */}
          <div className="flex items-center justify-between px-4 py-2">
            <a href="/" className="inline-block">
              <Logo className="scale-90" />
            </a>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-white hover:text-mello-yellow transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu items — left aligned, 30px, medium */}
          <nav className="flex flex-col px-8 pt-10 gap-7">
            <a href="/" onClick={() => setIsMenuOpen(false)}
              className={`font-medium ${currentPage === 'home' ? 'text-mello-yellow' : 'text-white'}`} style={{fontSize: '30px'}}>
              Home
            </a>
            <a href="/#features" onClick={() => setIsMenuOpen(false)}
              className={`font-medium ${currentPage === 'features' ? 'text-mello-yellow' : 'text-white'}`} style={{fontSize: '30px'}}>
              Features
            </a>
            <a href="/#pricing" onClick={() => setIsMenuOpen(false)}
              className={`font-medium ${currentPage === 'pricing' ? 'text-mello-yellow' : 'text-white'}`} style={{fontSize: '30px'}}>
              Pricing
            </a>
            <a href="#faqs" onClick={() => setIsMenuOpen(false)}
              className={`font-medium ${currentPage === 'faqs' ? 'text-mello-yellow' : 'text-white'}`} style={{fontSize: '30px'}}>
              FAQs
            </a>
            <a href="https://app.mellominds.co.in" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}
              className="font-medium text-white" style={{fontSize: '30px'}}>
              Log In
            </a>
          </nav>

          {/* Buttons pinned to bottom */}
          <div className="mt-auto px-8 pb-10 flex flex-col gap-3">
            <a
              href="https://app.mellominds.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-mello-yellow text-mello-bg px-4 py-3 rounded-full font-semibold text-base"
            >
              Get Started Free
            </a>
            <a
              href="https://app.mellominds.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center border border-white text-white px-4 py-3 rounded-full font-semibold text-base"
            >
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </>
  );
};
