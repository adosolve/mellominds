import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ResponsiveLandingPage from './components/ResponsiveLandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Features from './components/Features';
import Resources from './components/Resources';
import ContactUs from './components/ContactUs';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen w-full overflow-hidden font-sans selection:bg-mello-yellow selection:text-mello-bg" style={{backgroundColor: '#082421'}}>
          <Routes>
            <Route path="/" element={<ResponsiveLandingPage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
          <Analytics />
          <SpeedInsights />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;