import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-8 border-t border-white/10">
      <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
        <span>© 2026 MelloMinds LLP. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="/" className="hover:text-white/70 transition-colors">Home</a>
          <span>•</span>
          <a href="https://app.mellominds.co.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">Privacy Policy</a>
          <span>•</span>
          <a href="https://app.mellominds.co.in/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};