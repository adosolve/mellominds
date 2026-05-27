import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { ROUTES, scrollToSection } from '../config/routes';

interface HeaderProps {
  currentPage?: 'home' | 'features' | 'pricing' | 'faqs' | 'contact' | 'privacy-policy' | 'terms-of-service';
}

export const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFaqsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.dispatchEvent(new Event('open-faqs'));
  };

  const handleNavigation = (path: string, hash?: string) => {
    navigate(path);
    if (hash) {
      setTimeout(() => scrollToSection(hash), 100);
    }
  };

  const navItems = [
    { href: '/', label: 'Features', key: 'features', hash: '#features' },
    { href: '/', label: 'Pricing', key: 'pricing', hash: '#pricing' },
    { href: '/', label: 'FAQs', key: 'faqs', onClick: handleFaqsClick },
    { href: '/', label: 'Contact Us', key: 'contact', hash: '#contact', onClick: handleContactClick },
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
              onClick={(e) => {
                if (item.key !== 'login') {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick(e);
                  } else if (item.hash) {
                    handleNavigation(item.href, item.hash);
                  } else {
                    handleNavigation(item.href);
                  }
                }
              }}
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
          href="/"
          onClick={handleContactClick}
          className="border border-white text-white bg-transparent px-4 py-2 rounded-full font-semibold text-sm hover:bg-white/10 transition-colors"
        >
          Book a Demo
        </a>
      </div>
    </header>
  );
};