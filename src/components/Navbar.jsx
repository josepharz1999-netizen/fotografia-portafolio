import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles.css';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const location = useLocation();

  const navItems = [
    {
      to: '/',
      label: 'Inicio',
      isActive: (loc) => loc.pathname === '/' && loc.hash !== '#sobre-nosotros'
    },
    { to: '/portafolio', label: 'Portafolio' },
    {
      to: '/#sobre-nosotros',
      label: 'Sobre Mí',
      isActive: (loc) => loc.pathname === '/' && loc.hash === '#sobre-nosotros'
    },
    { to: '/contacto', label: 'Contacto' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img src="../images/logo.png" alt="Logo" className="navbar__logo" style={{height: '50px', width: 'auto' }} />
      
        
        {/* Desktop Menu */}
        <ul className={`navbar__nav${menuAbierto ? ' active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) => {
                  const active = item.isActive ? item.isActive(location) : isActive;
                  return `navbar__link${active ? ' active' : ''}`;
                }}
                onClick={() => setMenuAbierto(false)}
              >
                {item.label}
              </NavLink>
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