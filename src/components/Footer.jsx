import React from 'react';
import { Link } from 'react-router-dom';
import '../styles-pages.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Sección con grid */}
        <div className="footer-grid">
          {/* Marca */}
          <div className="footer-section">
            <div className="footer-brand-logo">
              <img src="/logo.svg" alt="Joseph Ramirez Photographer Logo" />
            </div>
            <p className="footer-brand-description">
              Capturamos momentos que se convierten en recuerdos. Fotografía profesional con pasión y arte.
            </p>
          </div>

          {/* Servicios */}
          <div className="footer-section">
            <h4 className="footer-section-title">Servicios</h4>
            <ul className="footer-section-list">
              <li><Link to="/portafolio">Bodas</Link></li>
              <li><Link to="/portafolio">Retratos</Link></li>
              <li><Link to="/portafolio">Paisajes</Link></li>
              <li><Link to="/portafolio">Eventos</Link></li>
            </ul>
          </div>

          {/* Enlaces */}
          <div className="footer-section">
            <h4 className="footer-section-title">Enlaces</h4>
            <ul className="footer-section-list">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/portafolio">Portafolio</Link></li>
              <li><Link to="/#sobre-nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contacto</h4>
            <div className="footer-contact-info">
              <div>📧 joseph.arz1999@gmail.com</div>
              <div>📱 +595 994 329 783</div>
              <div>📍 Presidente Franco, Área 5</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Pie de página */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} FotoArt Studio. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Política de privacidad</a>
            <span>•</span>
            <a href="#">Términos de uso</a>
          </div>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div className="footer-decoration"></div>
    </footer>
  );
}

export default Footer;
