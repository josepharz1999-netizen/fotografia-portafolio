import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Portafolio from './pages/Portafolio';
import Cotizar from './pages/Cotizar';
import Contacto from './pages/Contacto';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="container">
        {activeSection === 'inicio' && <Inicio setActiveSection={setActiveSection} />}
        {activeSection === 'portafolio' && <Portafolio />}
        {activeSection === 'cotizar' && <Cotizar />}
        {activeSection === 'contacto' && <Contacto />}
      </main>
    </div>
  );
}

export default App;