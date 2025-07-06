import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import About from './components/About';
import Schemes from './components/Schemes';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
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
