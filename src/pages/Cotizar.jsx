import React, { useState } from 'react';
import '../styles-pages.css';

function Cotizar() {
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
      <h1 className="cotizar-title">Solicita una cotización</h1>
      <p className="cotizar-subtitle">Cuéntame sobre tu proyecto y te responderé pronto.</p>

      <div className="cotizar-form-container">
        <form onSubmit={handleSubmit} className="cotizar-form">
          <div className="contact-form">
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
                rows="5" 
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
                <span>✓</span> ¡Cotización enviada con éxito! Te contactaré en breve.
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="packages-section">
        <h3>Paquetes referenciales</h3>
        <div className="packages-list">
          <div className="package-item">
            <span className="package-icon">📷</span>
            <div className="package-content">
              <span className="package-name">Básico</span>
              <p className="package-description">2h cobertura + 50 fotos editadas</p>
              <div className="package-price">$200</div>
            </div>
          </div>

          <div className="package-item">
            <span className="package-icon">✨</span>
            <div className="package-content">
              <span className="package-name">Premium</span>
              <p className="package-description">4h cobertura + 100 fotos + álbum físico</p>
              <div className="package-price">$350</div>
            </div>
          </div>

          <div className="package-item">
            <span className="package-icon">🎥</span>
            <div className="package-content">
              <span className="package-name">Elite</span>
              <p className="package-description">Cobertura completa + video + álbum de lujo</p>
              <div className="package-price">$500</div>
            </div>
          </div>
        </div>
        <p className="packages-note">*Cotización personalizada según tus necesidades.</p>
      </div>
    </div>
  );
}

export default Cotizar;
