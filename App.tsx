import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ResponsiveLandingPage from './components/ResponsiveLandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen w-full overflow-hidden font-sans selection:bg-mello-yellow selection:text-mello-bg" style={{backgroundColor: '#082421'}}>
        <Routes>
          <Route path="/" element={<ResponsiveLandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
        <Analytics />
        <SpeedInsights />
      </div>
    </Router>
  );
};

export default App;