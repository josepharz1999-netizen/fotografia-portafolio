import React from 'react';
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
            <h3 className="footer-brand-title">FotoArt Studio</h3>
            <p className="footer-brand-description">
              Capturamos momentos que se convierten en recuerdos. Fotografía profesional con pasión y arte.
            </p>
            <div className="footer-social-icons">
              <a href="#" className="footer-social-icon" aria-label="Instagram">📸</a>
              <a href="#" className="footer-social-icon" aria-label="Facebook">📘</a>
              <a href="#" className="footer-social-icon" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          {/* Servicios */}
          <div className="footer-section">
            <h4 className="footer-section-title">Servicios</h4>
            <ul className="footer-section-list">
              <li><a href="#portafolio">Bodas</a></li>
              <li><a href="#portafolio">Retratos</a></li>
              <li><a href="#portafolio">Paisajes</a></li>
              <li><a href="#portafolio">Eventos</a></li>
            </ul>
          </div>

          {/* Enlaces */}
          <div className="footer-section">
            <h4 className="footer-section-title">Enlaces</h4>
            <ul className="footer-section-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#portafolio">Portafolio</a></li>
              <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
              <li><a href="#cotizar">Cotizar</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contacto</h4>
            <div className="footer-contact-info">
              <div>📧 info@fotoartstudio.com</div>
              <div>📱 +34 666 777 888</div>
              <div>📍 Ciudad, País</div>
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
