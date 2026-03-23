import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CustomCursor from './components/layout/CustomCursor';
import IntroBuffer from './components/layout/IntroBuffer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="bg-(--color-jdm-bg) text-slate-100 selection:bg-[var(--color-jdm-cyan)] selection:text-[var(--color-jdm-bg)] font-sans transition-colors duration-500 min-h-screen">

      {!isVerified && <IntroBuffer onComplete={() => setIsVerified(true)} />}

      <CustomCursor />

      {/* Global Background Ambient Glow layer */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-500">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--color-jdm-cyan)] opacity-[0.03] blur-[150px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[var(--color-jdm-pink)] opacity-[0.03] blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[var(--color-jdm-purple)] opacity-[0.02] blur-[150px]"></div>
      </div>

      <BrowserRouter>
        <Navbar />

        <main className="relative z-10 flex flex-col min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
