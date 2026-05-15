import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ResponsiveLandingPage from './components/ResponsiveLandingPage';
import Features from './components/Features';
import ContactUs from './components/ContactUs';
import Pricing from './components/Pricing';
import { FAQsLightbox } from './components/FAQsLightbox';

const AppContent: React.FC = () => {
  const [faqsOpen, setFaqsOpen] = useState(false);
  const location = useLocation();

  // Listen for hash changes to open FAQs lightbox
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#faqs') {
        setFaqsOpen(true);
        // Remove hash after opening
        window.history.replaceState(null, '', window.location.pathname);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);

  // Also listen for custom event from links
  useEffect(() => {
    const handleOpenFaqs = () => setFaqsOpen(true);
    window.addEventListener('open-faqs', handleOpenFaqs);
    return () => window.removeEventListener('open-faqs', handleOpenFaqs);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden font-sans selection:bg-mello-yellow selection:text-mello-bg" style={{backgroundColor: '#082421'}}>
      <Routes>
        <Route path="/" element={<ResponsiveLandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <FAQsLightbox isOpen={faqsOpen} onClose={() => setFaqsOpen(false)} />
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
