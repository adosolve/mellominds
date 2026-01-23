import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import ResponsiveLandingPage from './components/ResponsiveLandingPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden font-sans selection:bg-mello-yellow selection:text-mello-bg" style={{backgroundColor: '#082421'}}>
      <ResponsiveLandingPage />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;