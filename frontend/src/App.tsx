import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ResponsiveLandingPage from './components/ResponsiveLandingPage';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQs from './components/FAQs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { FAQsLightbox } from './components/FAQsLightbox';
import MelloChat from './components/MelloChat';
import { scrollToSection } from './config/routes';

const AppContent: React.FC = () => {
  const [faqsOpen, setFaqsOpen] = useState(false);
  const location = useLocation();

  // Handle hash-based navigation for smooth scrolling
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Special handling for FAQs hash
        if (hash === '#faqs' && location.pathname === '/') {
          setFaqsOpen(true);
          window.history.replaceState(null, '', window.location.pathname);
        } else {
          // Scroll to other sections
          setTimeout(() => scrollToSection(hash), 100);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);

  // Listen for custom event from links
  useEffect(() => {
    const handleOpenFaqs = () => setFaqsOpen(true);
    window.addEventListener('open-faqs', handleOpenFaqs);
    return () => window.removeEventListener('open-faqs', handleOpenFaqs);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full overflow-hidden font-sans selection:bg-mello-yellow selection:text-mello-bg" style={{backgroundColor: '#082421'}}>
      <Routes>
        <Route path="/" element={<ResponsiveLandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        {/* 404 - Redirect to home */}
        <Route path="*" element={<ResponsiveLandingPage />} />
      </Routes>
      <FAQsLightbox isOpen={faqsOpen} onClose={() => setFaqsOpen(false)} />
      {/* Mello chatbot — fixed bottom-right on all pages */}
      <MelloChat />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
};

export default App;
