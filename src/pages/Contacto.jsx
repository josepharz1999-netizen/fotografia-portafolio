import React, { useState } from 'react';
import '../styles-pages.css';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoServicio: '',
    fechaEvento: '',
    mensaje: ''
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cotización enviada:', formData);
    setEnviado(true);
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      tipoServicio: '',
      fechaEvento: '',
      mensaje: ''
    });
    setTimeout(() => setEnviado(false), 4000);
  };

  return (
    <div className="contact-quote-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contacto y Cotización</h1>
          <p>Completa el formulario o contáctame directamente para tu próximo proyecto fotográfico</p>
        </div>

        <div className="contact-grid">
          {/* Columna izquierda: Formulario */}
          <div>
            <h2 className="contact-form-title">Solicita una cotización</h2>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-field">
                <label>Nombre completo *</label>
                <input 
                  type="text" 
                  name="nombre" 
                  required 
                  value={formData.nombre} 
                  onChange={handleChange}
                  placeholder="Escribe tu nombre completo"
                />
              </div>

              <div className="form-field">
                <label>Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div className="form-field">
                <label>Teléfono</label>
                <input 
                  type="tel" 
                  name="telefono" 
                  value={formData.telefono} 
                  onChange={handleChange}
                  placeholder="+595 994 329 783"
                />
              </div>

              <div className="form-field">
                <label>Tipo de servicio *</label>
                <select 
                  name="tipoServicio" 
                  required 
                  value={formData.tipoServicio} 
                  onChange={handleChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="boda">Boda / Evento</option>
                  <option value="retrato">Retrato / Sesión</option>
                  <option value="producto">Producto / Comercial</option>
                  <option value="paisaje">Paisaje / Viajes</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-field">
                <label>Fecha estimada</label>
                <input 
                  type="date" 
                  name="fechaEvento" 
                  value={formData.fechaEvento} 
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Mensaje / Detalles</label>
                <textarea 
                  name="mensaje" 
                  rows="4" 
                  value={formData.mensaje} 
                  onChange={handleChange}
                  placeholder="Cuéntame más sobre lo que necesitas..."
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Enviar cotización
              </button>

              {enviado && (
                <div className="success-message">
                  <span>✓</span> ¡Cotización enviada con éxito!
                </div>
              )}
            </form>

            {/* Paquetes mini */}
            <div className="packages-mini">
              <h3>Paquetes referenciales</h3>
              <ul>
                <li><strong>📷 Básico</strong> – 2h + 50 fotos · <span className="price">$200</span></li>
                <li><strong>✨ Premium</strong> – 4h + 100 fotos + álbum · <span className="price">$350</span></li>
                <li><strong>🎥 Elite</strong> – Cobertura completa + video · <span className="price">$500</span></li>
              </ul>
              <p>*Cotización personalizada según tus necesidades.</p>
            </div>
          </div>

          {/* Columna derecha: Información de contacto */}
          <div>
            <h2 className="contact-info-title">Conectemos</h2>
            
            <div className="contact-info-cards">
              {/* Email */}
              <a 
                href="mailto:joseph.arz1999@gmail.com"
                className="contact-info-card"
              >
                <div className="contact-icon-box">📧</div>
                <div className="contact-info-content">
                  <p className="contact-info-label">Email</p>
                  <p className="contact-info-text">joseph.arz1999@gmail.com</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/595994329783"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <div className="contact-icon-box">💬</div>
                <div className="contact-info-content">
                  <p className="contact-info-label">WhatsApp</p>
                  <p className="contact-info-text">+595 994 329 783</p>
                </div>
              </a>

              {/* Ubicación */}
              <div className="contact-info-card">
                <div className="contact-icon-box">📍</div>
                <div className="contact-info-content">
                  <p className="contact-info-label">Ubicación</p>
                  <p className="contact-info-text">Presidente Franco, Área 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
