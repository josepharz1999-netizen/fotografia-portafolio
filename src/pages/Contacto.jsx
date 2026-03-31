import React, { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMensajeEnviado(true);
    e.target.reset();
    setTimeout(() => setMensajeEnviado(false), 4000);
  };

  return (
    <div className="contacto">
      <div className="contacto-moderno">
        <div className="contacto-header">
          <h1>Contacto</h1>
          <p>Hablemos sobre tu próximo proyecto fotográfico</p>
        </div>

        <div className="contacto-grid">
          <div className="info-tarjeta">
            <h3>Conectemos</h3>

            <div className="contacto-item">
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="contacto-info-text">
                <div className="label">Email</div>
                <a href="mailto:fotografia@ejemplo.com" className="value">fotografia@ejemplo.com</a>
              </div>
            </div>

            <div className="contacto-item">
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="contacto-info-text">
                <div className="label">Teléfono / WhatsApp</div>
                <a href="tel:+1234567890" className="value">+123 456 7890</a>
              </div>
            </div>

            <div className="contacto-item">
              <div className="icon-wrapper">
                <svg viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="contacto-info-text">
                <div className="label">Ubicación</div>
                <div className="value">Ciudad, País · Sesiones disponibles</div>
              </div>
            </div>

            <div className="social-section">
              <h4>Redes sociales</h4>
              <div className="social-links-modern">
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="formulario-moderno">
            <h3>Escríbeme directamente</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" className="input-moderno" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" className="input-moderno" placeholder="Correo electrónico" required />
              </div>
              <div className="form-group">
                <textarea className="input-moderno" placeholder="Cuéntame sobre tu idea, fecha o proyecto..." rows="4" required></textarea>
              </div>
              <button type="submit" className="btn-moderno">Enviar mensaje →</button>
              {mensajeEnviado && (
                <div className="mensaje-exito-moderno">✓ Mensaje enviado. Te responderé pronto.</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;