import React, { useState } from 'react';
import '../styles.css';

function Navbar({ setActiveSection, activeSection }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [subsectionActiva, setSubsectionActiva] = useState(null);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'portafolio', label: 'Portafolio' },
    { label: 'Sobre Nosotros', target: '#sobre-nosotros' },
    { id: 'cotizar', label: 'Cotizar' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleClick = (id, target, label) => {
    if (target) {
      // Es un enlace de scroll suave dentro de la página
      // Primero asegúrate de estar en la sección "inicio"
      setActiveSection('inicio');
      setSubsectionActiva(label);
      setMenuAbierto(false);
      // Luego hace scroll suave al elemento
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Es un cambio de sección normal
      setActiveSection(id);
      setSubsectionActiva(null);
      setMenuAbierto(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          FotoArt Studio
        </div>
        
        {/* Desktop Menu */}
        <ul className={`navbar__nav${menuAbierto ? ' active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a 
                onClick={() => handleClick(item.id, item.target, item.label)}
                className={`navbar__link${
                  item.target 
                    ? (subsectionActiva === item.label ? ' active' : '')
                    : (activeSection === item.id && subsectionActiva === null ? ' active' : '')
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburguesa - solo en móvil */}
        <button 
          className={`navbar__hamburger${menuAbierto ? ' active' : ''}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;