import React from 'react';
import { Logo } from './Logo';
import { Mascot } from './Mascot';

const MobileLandingPage: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden" style={{backgroundColor: '#082421'}}>
      
      {/* Main Content Area - Centered vertically */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 pb-8 -mt-8 sm:-mt-12">
        
        {/* Text Section */}
        <div className="flex flex-col items-center">
          
          {/* Logo */}
          <div className="mb-8">
            <Logo className="scale-110" />
          </div>
          
          {/* Text Group - No gap between greeting and headline */}
          <div className="flex flex-col items-center space-y-2">
            {/* Greeting Line */}
            <h2 className="font-medium text-white flex items-center justify-center gap-2 text-2xl sm:text-3xl">
              Say <span className="animate-pulse text-2xl sm:text-3xl">👋</span> hello to <span className="text-mello-yellow font-bold">mello!</span>
            </h2>

            {/* Main Headline Group */}
            <div className="flex flex-col items-center">
              {/* Line 1: FUTURE OF THERAPY */}
              <h1 className="leading-none font-black tracking-tight text-mello-dim uppercase text-center text-2xl sm:text-3xl">
                FUTURE OF THERAPY
              </h1>
              
              {/* Line 2: PRACTICE MANAGEMENT */}
              <h1 className="leading-none font-black tracking-tight text-mello-light uppercase text-center text-2xl sm:text-3xl">
                PRACTICE MANAGEMENT
              </h1>
            </div>
          </div>
          
          {/* Footer Text - Right below headline */}
          <div className="mt-16 text-xs text-white/50 font-medium text-center">
            © 2026 MelloMinds. All rights reserved.
          </div>
        
        </div>

      </main>


      {/* Mascot Illustration - Fixed at bottom, only eyes visible */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[30px] sm:translate-y-[40px]">
        <div className="relative">
          {/* Launching Soon Speech Bubble */}
          <div className="absolute bottom-[100px] sm:bottom-[120px] right-[-20px] sm:right-[-30px] z-30 animate-float">
            <div className="relative">
              <div className="bg-[#c8f7ed] rounded-full px-3 py-2 sm:px-4 sm:py-2 shadow-lg">
                <span className="text-gray-900 text-xs sm:text-sm font-medium">Launching Soon...</span>
              </div>
              <div className="absolute bottom-[-3px] sm:bottom-[-4px] left-[10px] sm:left-[12px] w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#c8f7ed] rounded-full"></div>
            </div>
          </div>
          <div className="scale-[0.65] sm:scale-75">
            <Mascot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLandingPage;