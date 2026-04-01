import React, { useState } from 'react';
import './Contacto.css';

function Contacto() {
  return (
    <div className="contacto">
      <div className="contacto-moderno">
        <div className="contacto-header">
          <h1>Contacto</h1>
          <p>Hablemos sobre tu próximo proyecto fotográfico</p>
        </div>

        <div className="contacto-grid">
          {/* Solo la tarjeta de información */}
          <div className="info-tarjeta-unica">
            <h3>Conectemos</h3>

            {/* Email */}
            <div className="contacto-item">
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contacto-info-text">
                <div className="label">Email</div>
                <a href="mailto:joseph.arz1999@gmail.com" className="value">joseph.arz1999@gmail.com</a>
              </div>
            </div>

            {/* WhatsApp (reemplaza teléfono) */}
            <div className="contacto-item">
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contacto-info-text">
                <div className="label">WhatsApp</div>
                <a href="https://wa.me/595994329783" className="value" target="_blank" rel="noopener noreferrer">+595 994 329 783</a>
              </div>
            </div>

            {/* Ubicación */}
            <div className="contacto-item">
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contacto-info-text">
                <div className="label">Ubicación</div>
                <div className="value">Presidente Franco, Área 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
