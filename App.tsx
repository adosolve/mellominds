import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ResponsiveLandingPage from './components/ResponsiveLandingPage';
import Features from './components/Features';
import FAQs from './components/FAQs';
import ContactUs from './components/ContactUs';
import Pricing from './components/Pricing';
import { CustomCursor } from './components/CustomCursor';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen w-full overflow-hidden font-sans selection:bg-mello-yellow selection:text-mello-bg" style={{backgroundColor: '#082421', cursor: 'none'}}>
          <CustomCursor />
          <Routes>
            <Route path="/" element={<ResponsiveLandingPage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
          <Analytics />
          <SpeedInsights />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;