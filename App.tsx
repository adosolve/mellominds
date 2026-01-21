import React from 'react';
import ResponsiveLandingPage from './components/ResponsiveLandingPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden font-sans selection:bg-mello-yellow selection:text-mello-bg" style={{backgroundColor: '#082421'}}>
      <ResponsiveLandingPage />
    </div>
  );
};

export default App;