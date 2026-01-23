import React from 'react';
import { Logo } from './Logo';
import { Mascot } from './Mascot';
import { CustomCursor } from './CustomCursor';

const LandingPage: React.FC = () => {
  return (
    <div className="relative h-screen px-6 py-8 md:px-12 md:py-12 max-w-[1400px] mx-auto overflow-hidden" style={{cursor: 'none'}}>
      <CustomCursor />
      
      {/* Header / Logo */}
      <header className="w-full mb-24 md:mb-32">
        <Logo />
      </header>

      {/* Main Content Area */}
      <main className="absolute top-24 md:top-32 left-6 md:left-12 right-6 md:right-12 z-10">
        
        {/* Text Section */}
        <div className="flex flex-col">
          
          {/* Greeting Line */}
          <h2 className="font-medium text-white flex items-center gap-3 md:gap-4 mb-2" style={{fontSize: '62px'}}>
            Say <span className="text-3xl md:text-5xl animate-pulse">👋</span> hello to <span className="text-mello-yellow font-bold">mello!</span>
          </h2>

          {/* Main Headline Group */}
          <div className="flex flex-col">
            {/* Line 1: FUTURE OF THERAPY */}
            <div className="flex flex-wrap items-baseline gap-x-4 md:gap-x-6">
              <span className="leading-none font-black tracking-tight text-mello-dim uppercase" style={{fontSize: '72px'}}>
                FUTURE OF
              </span>
              <span className="leading-none font-black tracking-tight text-mello-light uppercase" style={{fontSize: '72px'}}>
                THERAPY
              </span>
            </div>
            
            {/* Line 2: PRACTICE MANAGEMENT */}
            <h1 className="leading-none font-black tracking-tight text-mello-light uppercase mt-2 md:mt-4" style={{fontSize: '72px'}}>
              PRACTICE MANAGEMENT
            </h1>
          </div>
        
        </div>

      </main>

      {/* Footer Text - Absolute bottom left */}
      <footer className="absolute bottom-4 left-6 md:left-12 text-[10px] md:text-xs text-white/50 z-20 font-medium">
        © 2026 Mello Minds. All rights reserved.
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