import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
  currentPage?: 'home' | 'features' | 'pricing' | 'faqs' | 'contact';
}

export const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const navItems = [
    { href: '/#features', label: 'Features', key: 'features' },
    { href: '/#pricing', label: 'Pricing', key: 'pricing' },
    { href: '#faqs', label: 'FAQs', key: 'faqs' },
    { href: 'https://app.mellominds.co.in', label: 'Log In', key: 'login' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-2 md:px-12 bg-black/70 backdrop-blur-sm border-b border-white/5">
      <a href="/" className="inline-block">
        <Logo />
      </a>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-1 px-2 py-2">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              {...(item.key === 'login' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`px-4 py-2 rounded-full transition-colors font-medium text-sm ${
                currentPage === item.key
                  ? 'text-mello-yellow'
                  : 'text-white/80 hover:text-white'
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
          className="bg-mello-yellow text-mello-bg px-4 py-2 rounded-full font-semibold text-sm hover:bg-mello-yellow/90 transition-colors shadow-lg"
        >
          Get Started Free
        </a>
        <a
          href="https://app.mellominds.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white text-white bg-transparent px-4 py-2 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
        >
          Book a Demo
        </a>
      </div>
    </header>
  );
};