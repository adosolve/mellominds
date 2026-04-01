import React from 'react';
import { Logo } from './Logo';
import { Mascot } from './Mascot';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#082421] overflow-hidden">

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-[#082421]/80 backdrop-blur-md border-b border-white/5">
        <a href="/" className="inline-block">
          <Logo />
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-1 bg-white rounded-full px-2 py-2">
            <a href="/features" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Features
            </a>
            <a href="/pricing" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Pricing
            </a>
            <a href="/resources" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Resources
            </a>
            <a href="/contact" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Contact Us
            </a>
          </nav>
          <a
            href="https://app.mellominds.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-mello-yellow text-mello-bg px-6 py-2.5 rounded-full font-semibold hover:bg-mello-yellow/90 transition-colors shadow-lg"
          >
            Get early access →
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-12 pt-24 pb-64">

        {/* Tag */}
        <a
          href="https://app.mellominds.co.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-mello-yellow text-mello-bg font-semibold text-sm px-5 py-2 rounded-full mb-6 hover:bg-mello-yellow/90 transition-colors shadow-md"
        >
          SignUp for Free: Get free access to MelloMinds Dashboard →
        </a>

        {/* Greeting */}
        <h2 className="font-medium text-white flex items-center justify-center gap-3 md:gap-4 mb-2 text-4xl md:text-5xl">
          Say <span className="text-2xl md:text-3xl animate-pulse">👋</span> hello to <span className="text-mello-yellow font-bold">mello!</span>
        </h2>

        {/* Main Headline */}
        <div className="flex flex-col items-center mb-4">
          <div className="flex flex-wrap justify-center items-baseline gap-x-4 md:gap-x-6">
            <span className="leading-none font-black tracking-tight text-mello-dim uppercase text-5xl md:text-6xl">
              FUTURE OF
            </span>
            <span className="leading-none font-black tracking-tight text-mello-light uppercase text-5xl md:text-6xl">
              THERAPY
            </span>
          </div>
          <h1 className="leading-none font-black tracking-tight text-mello-light uppercase mt-2 md:mt-4 text-5xl md:text-6xl">
            PRACTICE MANAGEMENT
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-white/80 text-xs md:text-lg max-w-2xl leading-relaxed">
          We believe that therapists deserve the same care and support they give their clients.
        </p>

      </main>

      {/* Mascot */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <Mascot />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-6 md:left-12 right-6 md:right-12 text-[10px] md:text-xs text-white/50 z-20 font-medium">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <span>© 2026 MelloMinds LLP. All rights reserved.</span>
          <div className="flex items-center gap-x-4">
            <a href="/privacy-policy" className="hover:text-white/70 transition-colors underline">Privacy Policy</a>
            <span>•</span>
            <a href="/terms-of-service" className="hover:text-white/70 transition-colors underline">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
