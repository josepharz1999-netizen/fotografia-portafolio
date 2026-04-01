import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ setActiveSection, activeSection }) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'contacto', label: 'Contacto y Cotización' }
  ];

  const handleClick = (id) => {
    setActiveSection(id);
    setMenuAbierto(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">FotoArt Studio</div>
        
        <button 
          className={`menu-hamburguesa ${menuAbierto ? 'active' : ''}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-menu ${menuAbierto ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                onClick={() => handleClick(item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
