import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { FeaturedWork } from './components/FeaturedWork';
import { WhyAdunnati } from './components/WhyAdunnati';
import { About } from './components/About';
import { LetsTalk } from './components/LetsTalk';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="site-shell" id="home">
      {/* 3D Floating Stage Architecture: Perspective Outer Container */}
      <div className="hero-stage-outer">
        {/* Soft Ambient Ground Shadow under the floating slab */}
        <div className="hero-ground-shadow" aria-hidden="true"></div>

        {/* Floating 3D Slab / Canvas Card */}
        <div className="hero-floating-slab">
          <Header />
          <Hero />
        </div>
      </div>

      <main>
        <Services />
        <FeaturedWork />
        <WhyAdunnati />
        <About />
        <LetsTalk />
        {/* <Process /> */}
        {/* <Trust /> */}
        <Footer />
      </main>
    </div>
  );
};

export default App;
