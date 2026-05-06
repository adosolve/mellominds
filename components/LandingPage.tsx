import React from 'react';
import { Header } from './Header';
import { Mascot } from './Mascot';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#082421] overflow-hidden">

      {/* Fixed Header */}
      <Header currentPage="home" />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-12 pt-24 pb-80">

        {/* Greeting */}
        <h2 className="font-medium text-white flex items-center justify-center gap-3 md:gap-4 mb-2 text-4xl" style={{fontSize: '45px'}}>
          Say <span className="animate-pulse" style={{fontSize: '30px'}}>👋</span> hello to <span className="text-mello-yellow font-bold">mello!</span>
        </h2>

        {/* Main Headline */}
        <div className="flex flex-col items-center mb-4">
          <div className="flex flex-wrap justify-center items-baseline gap-x-4 md:gap-x-6">
            <span className="leading-none font-black tracking-tight text-mello-dim uppercase" style={{fontSize: '55px'}}>
              FUTURE OF
            </span>
            <span className="leading-none font-black tracking-tight text-mello-light uppercase" style={{fontSize: '55px'}}>
              THERAPY
            </span>
          </div>
          <h1 className="leading-none font-black tracking-tight text-mello-light uppercase mt-2 md:mt-4" style={{fontSize: '55px'}}>
            PRACTICE MANAGEMENT
          </h1>
        </div>

        {/* Subheading */}
        <p className="text-white/80 max-w-2xl leading-relaxed" style={{fontSize: '15px'}}>
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
            <a href="https://app.mellominds.co.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">Privacy Policy</a>
            <span>•</span>
            <a href="https://app.mellominds.co.in/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
