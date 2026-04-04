import React from 'react';
import { Link } from 'react-router-dom';
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
            <h2>Mi Historia</h2>
            <p>
              Hola, soy Joseph. Detrás de FotoArt Studio no hay una gran empresa ni un equipo de profesionales con años de estudio. Estoy yo solo, con mi cámara, mi computadora y muchas ganas de hacer algo bonito.
            </p>
            <p>
              Empecé en 2017, por hobby, sin pensar que la fotografía se convertiría en algo tan importante para mí. Me gusta crear imágenes que emocionen, que cuenten algo real. No busco la perfección técnica, busco esa chispa que hace que una foto valga más que mil palabras.
            </p>
            <p>
              Trabajo con lo que tengo, pero lo doy todo. Si confías en mí para tus recuerdos, te prometo que me voy a esforzar como si fueran míos.
            </p>
            <p>
              Gracias por llegar hasta acá.
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
          <h2>Mi Misión</h2>
          <p>
            Mi misión es simple: ayudarte a conservar tus mejores recuerdos sin que tengas que gastar una fortuna ni pasar por un proceso frío o complicado.
          </p>
          <p>
            No aspiro a ser el mejor fotógrafo del mundo. Solo quiero ser el fotógrafo que eliges cuando lo importante no es la cámara, sino lo que hay detrás de ella.
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
            <div className="about-feature-icon">🎯</div>
            <h3 className="about-feature-title">Dedicación Total</h3>
            <p className="about-feature-description">
              Cada proyecto recibe la misma atención y esmero, sin importar su tamaño o presupuesto.
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
          <Link to="/contacto" className="about-cta-button">Solicitar Cotización</Link>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
