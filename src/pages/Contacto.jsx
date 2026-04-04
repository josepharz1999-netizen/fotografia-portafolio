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

    const whatsappNumber = '595994329783';
    const whatsappMessage = `Nueva cotización desde el formulario:%0A%0A` +
      `Nombre: ${encodeURIComponent(formData.nombre)}%0A` +
      `Email: ${encodeURIComponent(formData.email)}%0A` +
      `Teléfono: ${encodeURIComponent(formData.telefono)}%0A` +
      `Tipo de servicio: ${encodeURIComponent(formData.tipoServicio)}%0A` +
      `Fecha estimada: ${encodeURIComponent(formData.fechaEvento)}%0A` +
      `Mensaje: ${encodeURIComponent(formData.mensaje)}`;

    const url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(url, '_blank');

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
                Enviar por WhatsApp
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
                <div className="contact-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 4.5A2.5 2.5 0 014.5 2h15A2.5 2.5 0 0122 4.5v15a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 19.5v-15zM4.5 4a.5.5 0 00-.5.5V6.7l8 5.33 8-5.33V4.5a.5.5 0 00-.5-.5h-15zm15 16a.5.5 0 00.5-.5V8.9l-7.6 5.07a1 1 0 01-1.08 0L4 8.9v10.6a.5.5 0 00.5.5h15z" fill="currentColor" />
                  </svg>
                </div>
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
                <div className="contact-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.04C6.48 2.04 2.04 6.48 2.04 12c0 1.95.51 3.78 1.44 5.38L2 22l4.76-1.22A9.96 9.96 0 0012 21.96c5.52 0 9.96-4.44 9.96-9.96S17.52 2.04 12 2.04z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.67.149-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.52-.075-.149-.67-1.612-.916-2.21-.242-.58-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.015-1.04 2.47 0 1.455 1.064 2.867 1.213 3.066.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor" />
                  </svg>
                </div>
                <div className="contact-info-content">
                  <p className="contact-info-label">WhatsApp</p>
                  <p className="contact-info-text">+595 994 329 783</p>
                </div>
              </a>

              {/* Ubicación */}
              <div className="contact-info-card">
                <div className="contact-icon-box">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2c-3.314 0-6 2.686-6 6 0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6zm0 8.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" />
                  </svg>
                </div>
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
