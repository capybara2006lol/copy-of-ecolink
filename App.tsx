import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HowItWorks } from './components/HowItWorks';
import { MapSection } from './components/MapSection';
import { AuthSection } from './components/AuthSection';
import { Benefits } from './components/Benefits';
import { Team } from './components/Team';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 overflow-x-hidden selection:bg-eco-light selection:text-eco-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="map">
          <MapSection />
        </div>
        <AuthSection />
        <Benefits />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;