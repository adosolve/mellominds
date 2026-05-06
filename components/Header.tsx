import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  currentPage?: 'home' | 'features' | 'pricing' | 'faqs' | 'contact';
}

export const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const navItems = [
    { href: '/features', label: 'Features', key: 'features' },
    { href: '/pricing', label: 'Pricing', key: 'pricing' },
    { href: '/faqs', label: 'FAQs', key: 'faqs' },
    { href: '/contact', label: 'Contact Us', key: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-[#082421] border-b border-white/5">
      <a href="/" className="inline-block">
        <Logo />
      </a>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-1 bg-white rounded-full px-2 py-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className={`px-4 py-2 rounded-full transition-colors font-medium text-sm ${
                currentPage === item.key
                  ? 'text-gray-700 bg-gray-200'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://app.mellominds.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-mello-yellow text-mello-bg px-6 py-2.5 rounded-full font-semibold hover:bg-mello-yellow/90 transition-colors shadow-lg"
        >
          Get Started Free
        </a>
      </div>
    </header>
  );
};