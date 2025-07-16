import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import Schemes from './components/Schemes';
import Map from './components/Map';
import Footer from './components/Footer';
import Scroller from './components/scroller';
import Hero from './components/Hero';
import Header from './components/Header';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Navbar />
        <Scroller />
        <Hero />
        <Slider />
        <About />
        <Schemes />
        <Map />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
