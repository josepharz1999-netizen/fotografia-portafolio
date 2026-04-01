import React, { useState } from 'react';
import './Contacto.css';

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
    <div className="contacto-cotizar">
      <div className="header-section">
        <h1>Contacto y Cotización</h1>
        <p>Completa el formulario o contáctame directamente para tu próximo proyecto fotográfico</p>
      </div>

      <div className="two-columns">
        {/* Columna izquierda: Formulario de cotización */}
        <div className="formulario-columna">
          <h2>Solicita una cotización</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
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

            <div className="form-group">
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

            <div className="form-group">
              <label>Teléfono</label>
              <input 
                type="tel" 
                name="telefono" 
                value={formData.telefono} 
                onChange={handleChange}
                placeholder="+595 994 329 783"
              />
            </div>

            <div className="form-group">
              <label>Tipo de servicio *</label>
              <select name="tipoServicio" required value={formData.tipoServicio} onChange={handleChange}>
                <option value="">Selecciona una opción</option>
                <option value="boda">Boda / Evento</option>
                <option value="retrato">Retrato / Sesión</option>
                <option value="producto">Producto / Comercial</option>
                <option value="paisaje">Paisaje / Viajes</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Fecha estimada</label>
              <input 
                type="date" 
                name="fechaEvento" 
                value={formData.fechaEvento} 
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Mensaje / Detalles</label>
              <textarea 
                name="mensaje" 
                rows="4" 
                value={formData.mensaje} 
                onChange={handleChange}
                placeholder="Cuéntame más sobre lo que necesitas..."
              ></textarea>
            </div>

            <button type="submit" className="btn-submit">Enviar cotización</button>

            {enviado && (
              <div className="mensaje-exito">
                ✓ ¡Cotización enviada con éxito! Te contactaré en breve.
              </div>
            )}
          </form>

          <div className="paquetes-mini">
            <h3>Paquetes referenciales</h3>
            <ul>
              <li><strong>📷 Básico</strong> – 2h + 50 fotos · $200</li>
              <li><strong>✨ Premium</strong> – 4h + 100 fotos + álbum · $350</li>
              <li><strong>🎥 Elite</strong> – Cobertura completa + video · $500</li>
            </ul>
            <p className="nota">*Cotización personalizada según tus necesidades.</p>
          </div>
        </div>

        {/* Columna derecha: Información de contacto */}
        <div className="contacto-columna">
          <h2>Conectemos</h2>
          
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
  );
}

export default Contacto;
