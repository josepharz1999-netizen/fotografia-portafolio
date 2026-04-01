import React from 'react';
import '../styles-pages.css';

function SobreNosotros() {
  return (
    <div className="about-section" id="sobre-nosotros">
      <div className="about-container">
        {/* Encabezado */}
        <div className="about-header">
          <h1 className="about-title">Sobre FotoArt Studio</h1>
          <p className="about-subtitle">Capturando historias, creando recuerdos eternos desde 2015</p>
        </div>

        {/* Contenido principal */}
        <div className="about-content-grid">
          <div className="about-text-block">
            <h2>Nuestra Historia</h2>
            <p>
              FotoArt Studio comenzó como un sueño compartido de capturar los momentos más especiales de la vida a través del lente. 
              Desde nuestros inicios en 2015, nos hemos dedicado a proporcionar servicios fotográficos de calidad profesional, 
              combinando técnica artística con emoción y creatividad.
            </p>
            <p>
              Cada proyecto es único y especial para nosotros. Creemos que la fotografía no solo captura imágenes, sino que preserva 
              emociones, historias y recuerdos que perduran en el tiempo. Nuestro equipo apasionado trabaja incansablemente para 
              asegurar que cada sesión sea una experiencia inolvidable.
            </p>
          </div>

          <div className="about-image-container">
            <div className="about-image-placeholder">
              📷<br/><span className="placeholder-text">Tu imagen aquí</span>
            </div>
          </div>
        </div>

        {/* Misión */}
        <div className="about-mission">
          <h2>Nuestra Misión</h2>
          <p>
            Transformar momentos ordinarios en extraordinarios, proporcionando fotografía de clase mundial que permite a nuestros 
            clientes revivir sus memorias más preciadas una y otra vez. Nos comprometemos a la excelencia, la creatividad y la 
            satisfacción completa del cliente en cada proyecto.
          </p>
        </div>

        {/* Características/Valores */}
        <div className="about-features">
          <div className="about-feature-card">
            <div className="about-feature-icon">🎨</div>
            <h3 className="about-feature-title">Creatividad Sin Límites</h3>
            <p className="about-feature-description">
              Cada sesión es una oportunidad para explorar nuevas perspectivas y estilos, creando imágenes únicas y personalizadas.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-feature-icon">⚡</div>
            <h3 className="about-feature-title">Profesionalismo Impecable</h3>
            <p className="about-feature-description">
              Con equipos de última tecnología y técnicas avanzadas, garantizamos resultados de calidad profesional en cada proyecto.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-feature-icon">❤️</div>
            <h3 className="about-feature-title">Pasión por Detalles</h3>
            <p className="about-feature-description">
              Cada foto es editada cuidadosamente para resaltar lo mejor de cada momento, preservando la emoción y autenticidad.
            </p>
          </div>

          <div className="about-feature-card">
            <div className="about-feature-icon">🌟</div>
            <h3 className="about-feature-title">Experiencia Memorable</h3>
            <p className="about-feature-description">
              Nos enfocamos en crear una experiencia agradable y cómoda durante toda la sesión fotográfica.
            </p>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="about-cta">
          <h2>Listo para crear recuerdos?</h2>
          <p>Contáctanos hoy para discutir tu próximo proyecto fotográfico</p>
          <a href="#cotizar" className="about-cta-button">Solicitar Cotización</a>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
