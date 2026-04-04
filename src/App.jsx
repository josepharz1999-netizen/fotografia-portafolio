import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Portafolio from './pages/Portafolio';
import Cotizar from './pages/Cotizar';
import Contacto from './pages/Contacto';
import WhatsAppButton from './components/WhatsAppButton';



function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <div className="container">
                  <Inicio />
                </div>
              </>
            }
          />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/cotizar" element={<Cotizar />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="*"
            element={
              <>
                <HeroBanner />
                <div className="container">
                  <Inicio />
                </div>
              </>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Botón de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;