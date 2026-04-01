import React, { useState } from 'react';
import './Cotizar.css';

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
    <div className="cotizar">
      <h1>Solicita una cotización</h1>
      <p className="subtitulo">Cuéntame sobre tu proyecto y te responderé pronto.</p>

      <div className="formulario-container">
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
      </div>

      <div className="info-adicional">
        <h3>Paquetes referenciales</h3>
        <ul>
          <li><strong>📷 Básico</strong> – 2h cobertura + 50 fotos editadas · <strong>$200</strong></li>
          <li><strong>✨ Premium</strong> – 4h cobertura + 100 fotos + álbum físico · <strong>$350</strong></li>
          <li><strong>🎥 Elite</strong> – Cobertura completa + video + álbum de lujo · <strong>$500</strong></li>
        </ul>
        <p className="nota">*Cotización personalizada según tus necesidades.</p>
      </div>
    </div>
  );
}

export default Cotizar;
