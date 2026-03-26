import React from 'react';
import { Logo } from './Logo';
import { Mascot } from './Mascot';
import { CustomCursor } from './CustomCursor';

const LandingPage: React.FC = () => {
  return (
    <div className="relative h-screen px-6 py-8 md:px-12 md:py-12 max-w-[1400px] mx-auto overflow-hidden" style={{cursor: 'none'}}>
      <CustomCursor />
      
      {/* Header / Logo */}
      <header className="w-full mb-24 md:mb-32 flex items-center justify-between">
        <a href="/" className="inline-block">
          <Logo />
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-1 bg-white rounded-full px-2 py-2">
            <a href="/features" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors font-medium text-sm">
              Features
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

      {/* Main Content Area */}
      <main className="absolute top-24 md:top-32 left-6 md:left-12 right-6 md:right-12 z-10">
        
        {/* Text Section */}
        <div className="flex flex-col">
          
          {/* Greeting Line */}
          <h2 className="font-medium text-white flex items-center gap-3 md:gap-4 mb-2 text-4xl md:text-5xl">
            Say <span className="text-2xl md:text-3xl animate-pulse">👋</span> hello to <span className="text-mello-yellow font-bold">mello!</span>
          </h2>

          {/* Main Headline Group */}
          <div className="flex flex-col mb-4">
            {/* Line 1: FUTURE OF THERAPY */}
            <div className="flex flex-wrap items-baseline gap-x-4 md:gap-x-6">
              <span className="leading-none font-black tracking-tight text-mello-dim uppercase text-5xl md:text-6xl">
                FUTURE OF
              </span>
              <span className="leading-none font-black tracking-tight text-mello-light uppercase text-5xl md:text-6xl">
                THERAPY
              </span>
            </div>
            
            {/* Line 2: PRACTICE MANAGEMENT */}
            <h1 className="leading-none font-black tracking-tight text-mello-light uppercase mt-2 md:mt-4 text-5xl md:text-6xl">
              PRACTICE MANAGEMENT
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-white/80 text-xs md:text-lg max-w-3xl leading-relaxed">
            We believe that therapists deserve the same care and support they give their clients.
          </p>
        
        </div>

      </main>

      {/* Footer Text - Absolute bottom */}
      <footer className="absolute bottom-4 left-6 md:left-12 right-6 md:right-12 text-[10px] md:text-xs text-white/50 z-20 font-medium">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
          <span>© 2026 MelloMinds. All rights reserved.</span>
          <div className="flex items-center gap-x-4">
            <a href="/privacy-policy" className="hover:text-white/70 transition-colors underline">Privacy Policy</a>
            <span>•</span>
            <a href="/terms-of-service" className="hover:text-white/70 transition-colors underline">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Mascot Illustration - Fixed at bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          {/* Launching Soon Speech Bubble */}
          <div className="absolute bottom-[140px] md:bottom-[220px] right-[-80px] md:right-[-120px] z-30 animate-float">
            <div className="relative">
              <div className="bg-[#c8f7ed] rounded-full px-8 py-4 shadow-lg">
                <span className="text-gray-900 text-lg md:text-xl font-medium">Launching Soon...</span>
              </div>
              <div className="absolute bottom-[-8px] left-[20px] w-4 h-4 bg-[#c8f7ed] rounded-full"></div>
            </div>
          </div>
          <Mascot />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;