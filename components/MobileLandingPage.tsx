import React from 'react';
import { Logo } from './Logo';
import { Mascot } from './Mascot';
import { MobileHeader } from './MobileHeader';

const MobileLandingPage: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden" style={{backgroundColor: '#082421'}}>
      
      {/* Header with Logo and Hamburger Menu */}
      <MobileHeader currentPage="home" />

      {/* Main Content Area - Centered vertically */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 pb-8 -mt-8 sm:-mt-12">
        
        {/* Text Section */}
        <div className="flex flex-col items-center">
          
          {/* Text Group - No gap between greeting and headline */}
          <div className="flex flex-col items-center space-y-2">
            {/* Greeting Line */}
            <h2 className="font-medium text-white flex items-center justify-center gap-2 text-2xl sm:text-3xl">
              Say <span className="animate-pulse text-2xl sm:text-3xl">👋</span> hello to <span className="text-mello-yellow font-bold">mello!</span>
            </h2>

            {/* Main Headline Group */}
            <div className="flex flex-col items-center mb-3">
              {/* Line 1: FUTURE OF THERAPY */}
              <h1 className="leading-none font-black tracking-tight text-mello-dim uppercase text-center text-3xl sm:text-4xl">
                FUTURE OF THERAPY
              </h1>
              
              {/* Line 2: PRACTICE MANAGEMENT */}
              <h1 className="leading-none font-black tracking-tight text-mello-light uppercase text-center text-3xl sm:text-4xl">
                PRACTICE MANAGEMENT
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-white/80 text-xs sm:text-sm text-center max-w-md px-4 leading-relaxed">
              We believe that therapists deserve the same care and support they give their clients.
            </p>
          </div>
          
          {/* Get Started Free Button */}
          <div className="mt-8">
            <a 
              href="https://app.mellominds.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-mello-yellow text-mello-bg px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-mello-yellow/90 transition-colors shadow-lg inline-block"
            >
              Get Started Free
            </a>
          </div>
          
          {/* Footer Text - Right below button */}
          <div className="mt-16 text-xs text-white/50 font-medium text-center">
            <div className="flex flex-col items-center gap-2">
              <span>© 2026 MelloMinds LLP. All rights reserved.</span>
              <div className="flex items-center gap-2">
                <a href="https://app.mellominds.co.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">Privacy Policy</a>
                <span>•</span>
                <a href="https://app.mellominds.co.in/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">Terms of Service</a>
              </div>
            </div>
          </div>
        
        </div>

      </main>


      {/* Mascot Illustration - Fixed at bottom, only eyes visible */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[30px] sm:translate-y-[40px]">
        <div className="relative">
          <div className="scale-[0.65] sm:scale-75">
            <Mascot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLandingPage;