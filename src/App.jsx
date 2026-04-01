import React, { useState } from 'react';
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
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <div className="App">
      {/* Header fijo */}
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      
      {/* Hero Banner - Sólo en la página de inicio */}
      {activeSection === 'inicio' && <HeroBanner setActiveSection={setActiveSection} />}
      
      {/* Contenido principal */}
      <main className={`main-content ${activeSection}`}>
        <div className="container">
          {activeSection === 'inicio' && <Inicio setActiveSection={setActiveSection} />}
          {activeSection === 'portafolio' && <Portafolio />}
          {activeSection === 'cotizar' && <Cotizar />}
          {activeSection === 'contacto' && <Contacto />}
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Botón de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;