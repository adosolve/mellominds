import React, { useState } from 'react';
import { Logo } from './Logo';

interface MobileHeaderProps {
  currentPage?: 'features' | 'resources' | 'contact' | 'privacy' | 'terms' | 'home';
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-40 px-4 py-4">
      <div className="flex items-center justify-between">
        <a href="/" className="inline-block">
          <Logo className="scale-90" />
        </a>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white hover:text-mello-yellow transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-[#082421]/95 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/10">
          <nav className="flex flex-col">
            <a
              href="/"
              className={`px-6 py-4 hover:bg-white/10 transition-colors font-medium border-b border-white/10 ${
                currentPage === 'home' ? 'text-mello-yellow bg-white/10' : 'text-white'
              }`}
            >
              Home
            </a>
            <a
              href="/features"
              className={`px-6 py-4 hover:bg-white/10 transition-colors font-medium border-b border-white/10 ${
                currentPage === 'features' ? 'text-mello-yellow bg-white/10' : 'text-white'
              }`}
            >
              Features
            </a>
            <a
              href="/resources"
              className={`px-6 py-4 hover:bg-white/10 transition-colors font-medium border-b border-white/10 ${
                currentPage === 'resources' ? 'text-mello-yellow bg-white/10' : 'text-white'
              }`}
            >
              Resources
            </a>
            <a
              href="/contact"
              className={`px-6 py-4 hover:bg-white/10 transition-colors font-medium border-b border-white/10 ${
                currentPage === 'contact' ? 'text-mello-yellow bg-white/10' : 'text-white'
              }`}
            >
              Contact Us
            </a>
            <a
              href="https://app.mellominds.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 text-mello-bg bg-mello-yellow hover:bg-mello-yellow/90 transition-colors font-bold text-center"
            >
              Get early access →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
