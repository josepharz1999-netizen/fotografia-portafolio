import React, { useState, useEffect, useCallback } from 'react';
import { albumesData, generarFotosAlbum } from '../data/albumesData';

function Carrusel({ fotos, albumNombre, onCerrar }) {
  const [indiceActual, setIndiceActual] = useState(0);

  const siguienteFoto = useCallback(() => {
    setIndiceActual((prev) => (prev + 1) % fotos.length);
  }, [fotos.length]);

  const anteriorFoto = useCallback(() => {
    setIndiceActual((prev) => (prev - 1 + fotos.length) % fotos.length);
  }, [fotos.length]);

  return (
    <div className="carrusel-overlay-backdrop">
      <div className="carrusel-container">
        <button onClick={onCerrar} className="carrusel-close-btn">✕</button>
        <h2 className="carrusel-title">{albumNombre}</h2>
        <div className="carrusel-main">
          <button onClick={anteriorFoto} className="carrusel-btn">‹</button>
          <div className="carrusel-image-container">
            <img
              src={fotos[indiceActual].url}
              alt={fotos[indiceActual].titulo}
              className="carrusel-image"
            />
            <div className="carrusel-counter">
              {indiceActual + 1} / {fotos.length}
            </div>
          </div>
          <button onClick={siguienteFoto} className="carrusel-btn">›</button>
        </div>
        <div className="carrusel-thumbnails">
          {fotos.map((foto, idx) => (
            <div
              key={idx}
              className={`miniatura${idx === indiceActual ? ' activa' : ''}`}
              onClick={() => setIndiceActual(idx)}
            >
              <img src={foto.url} alt={foto.titulo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GaleriaCompleta({ fotos, albumNombre, onCerrar }) {
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const fotosMostradas = mostrarTodas ? fotos : fotos.slice(0, 6);

  return (
    <div className="galeria-overlay-backdrop">
      <div className="galeria-container">
        <div className="galeria-header">
          <h2 className="galeria-title">{albumNombre}</h2>
          <button onClick={onCerrar} className="galeria-close-btn">✕</button>
        </div>
        <div className="galeria-grid">
          {fotosMostradas.map((foto, idx) => (
            <div key={idx} className="galeria-item">
              <div className="galeria-item-image-container">
                <img src={foto.url} alt={foto.titulo} />
              </div>
              <p className="galeria-item-text">{foto.titulo}</p>
            </div>
          ))}
        </div>
        {fotos.length > 6 && (
          <div className="galeria-load-more">
            <button onClick={() => setMostrarTodas(!mostrarTodas)} className="galeria-load-more-btn">
              {mostrarTodas ? 'Mostrar menos' : `Ver todas las fotos (${fotos.length - 6} restantes)`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Portafolio() {
  const [albumSeleccionado, setAlbumSeleccionado] = useState(null);
  const [modoVisualizacion, setModoVisualizacion] = useState(null);
  const [fotosAlbum, setFotosAlbum] = useState([]);

  const abrirAlbum = (album, modo) => {
    const fotos = generarFotosAlbum(album);
    setFotosAlbum(fotos);
    setAlbumSeleccionado(album);
    setModoVisualizacion(modo);
  };

  const cerrarVisualizacion = () => {
    setAlbumSeleccionado(null);
    setModoVisualizacion(null);
    setFotosAlbum([]);
  };

  useEffect(() => {
    const albumGuardado = sessionStorage.getItem('albumSeleccionado');
    if (albumGuardado) {
      const album = albumesData.find(a => a.nombre === albumGuardado);
      if (album) {
        const fotos = generarFotosAlbum(album);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFotosAlbum(fotos);
        setAlbumSeleccionado(album);
        setModoVisualizacion('galeria');
        sessionStorage.removeItem('albumSeleccionado');
      }
    }
  }, []);

  return (
    <>
      <style>{`
        /* ----- Estilos de la sección Portafolio ----- */
        .portafolio-section {
          background: #ffffff;
          min-height: 100vh;
          padding: 5rem 1.5rem;
          backdrop-filter: blur(2px);
        }
        .portafolio-title {
          font-size: 2.5rem;
          font-weight: 500;
          text-align: center;
          color: #1a1a1a;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }
        .portafolio-subtitle {
          text-align: center;
          color: #6b7280;
          font-weight: 300;
          margin-bottom: 3rem;
          font-size: 1rem;
          text-shadow: none;
        }
        .album-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
          gap: 2rem;
          justify-content: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Tarjetas de álbumes */
        .album-card-item {
          background: #ffffff;
          backdrop-filter: blur(10px);
          border-radius: 1.5rem;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
        .album-card-item:hover {
          transform: translateY(-8px);
          border-color: #d4af37;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
          background: #ffffff;
        }
        .album-card-image {
          height: 200px;
          overflow: hidden;
        }
        .album-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease, opacity 0.8s ease;
        }
        .album-card-item:hover .album-card-image img {
          transform: scale(1.05);
        }
        .album-card-content {
          padding: 1.5rem;
        }
        .album-card-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        .album-card-description {
          color: #4b5563;
          font-size: 0.9rem;
          line-height: 1.4;
          margin-bottom: 0.75rem;
        }
        .album-card-count {
          font-size: 0.8rem;
          color: #6b7280;
          letter-spacing: 0.3px;
          margin-bottom: 1.2rem;
        }
        .album-card-buttons {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }
        .album-card-btn {
          flex: 1;
          padding: 0.6rem 0;
          border-radius: 2rem;
          font-size: 0.8rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
          background: transparent;
          border: 1px solid #d4af37;
          color: #1a1a1a;
        }
        .album-card-btn.primary {
          background: #000000;
          color: #ffffff;
          border: none;
          font-weight: 600;
        }
        .album-card-btn.primary:hover {
          background: #1a1a1a;
          transform: translateY(-2px);
        }
        .album-card-btn.secondary:hover {
          background: rgba(212, 175, 55, 0.1);
          transform: translateY(-2px);
        }

        /* ----- Estilos del carrusel (overlay) ----- */
        .carrusel-overlay-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .carrusel-container {
          background: #0a0a0a;
          border-radius: 2rem;
          padding: 1.8rem;
          max-width: 95vw;
          max-height: 95vh;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.55);
        }
        .carrusel-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.15);
          border: none;
          width: 2.6rem;
          height: 2.6rem;
          border-radius: 50%;
          font-size: 1.4rem;
          line-height: 1;
          color: white;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
        }
        .carrusel-close-btn:hover {
          background: rgba(255, 255, 255, 0.32);
          transform: scale(1.05);
        }
        .carrusel-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: white;
        }
        .carrusel-main {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .carrusel-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.15);
          border: none;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          font-size: 2.4rem;
          line-height: 1;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.18);
        }
        .carrusel-btn:hover {
          background: rgba(255, 255, 255, 0.28);
          transform: scale(1.05);
        }
        .carrusel-image-container {
          position: relative;
          flex: 1 1 720px;
          max-width: 90%;
          max-height: 82vh;
          text-align: center;
        }
        .carrusel-image {
          width: 100%;
          max-height: 78vh;
          object-fit: contain;
          border-radius: 1.25rem;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.55);
        }
        .carrusel-counter {
          position: absolute;
          bottom: 0.8rem;
          right: 0.8rem;
          background: rgba(0, 0, 0, 0.7);
          padding: 0.3rem 0.75rem;
          border-radius: 2rem;
          font-size: 0.85rem;
          color: white;
        }
        .carrusel-thumbnails {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          overflow-x: auto;
          margin-top: 1.5rem;
          padding: 0.5rem 0;
          justify-content: center;
          width: 100%;
        }
        .miniatura {
          width: 100px;
          height: 70px;
          flex-shrink: 0;
          border-radius: 0.75rem;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.65;
          transition: opacity 0.2s, transform 0.2s, border-color 0.2s;
          border: 2px solid transparent;
          background: rgba(255, 255, 255, 0.05);
        }
        .miniatura.activa {
          opacity: 1;
          border-color: #d4af37;
          transform: scale(1.05);
        }
        .miniatura img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .miniatura:hover {
          opacity: 0.95;
          transform: scale(1.05);
        }
        .carrusel-controls {
          text-align: center;
          margin-top: 1rem;
        }
        .carrusel-play-btn {
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.4rem 1.2rem;
          border-radius: 2rem;
          color: white;
          cursor: pointer;
          font-size: 0.8rem;
          transition: all 0.2s;
        }
        .carrusel-play-btn:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        /* ----- Estilos de la galería completa ----- */
        .galeria-overlay-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(8px);
          z-index: 2000;
          overflow-y: auto;
          padding: 1.5rem;
        }
        .galeria-container {
          max-width: 95vw;
          margin: 0 auto;
          background: #0a0a0a;
          border-radius: 2rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .galeria-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .galeria-title {
          font-size: 1.8rem;
          font-weight: 500;
          color: #ffffff;
          margin: 0;
        }
        .galeria-close-btn {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          width: 2.8rem;
          height: 2.8rem;
          border-radius: 50%;
          font-size: 1.4rem;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          padding: 0;
        }
        .galeria-close-btn:hover {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.05);
        }
        .galeria-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .galeria-item {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 1rem;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .galeria-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .galeria-item-image-container {
          height: 200px;
          overflow: hidden;
        }
        .galeria-item-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }
        .galeria-item:hover .galeria-item-image-container img {
          transform: scale(1.05);
        }
        .galeria-item-text {
          padding: 0.8rem;
          text-align: center;
          color: #e5e7eb;
          font-size: 0.85rem;
          font-weight: 500;
        }
        .galeria-load-more {
          text-align: center;
          margin-top: 2rem;
        }
        .galeria-load-more-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.6rem 1.5rem;
          border-radius: 2rem;
          color: white;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 0.8rem;
        }
        .galeria-load-more-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .portafolio-title { font-size: 2rem; }
          .album-grid { gap: 1rem; }
          .carrusel-container { padding: 1rem; }
          .carrusel-btn { width: 2rem; height: 2rem; font-size: 1.2rem; }
          .miniatura { width: 50px; height: 50px; }
          .galeria-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 1rem; }
          .galeria-item-image-container { height: 140px; }
        }
      `}</style>

      <div className="portafolio-section">
        <h1 className="portafolio-title">Portafolio</h1>
        <p className="portafolio-subtitle">Selecciona un álbum para ver las fotos</p>

        <div className="album-grid">
          {albumesData.map(album => {
            return (
            <div key={album.id} className="album-card-item">
              <div className="album-card-image">
                 <img src={album.portada} alt={album.nombre} />
              </div>
              <div className="album-card-content">
                <h3 className="album-card-title">{album.nombre}</h3>
                <p className="album-card-description">{album.descripcion}</p>
                <p className="album-card-count">{album.fotosUrls.length} fotografías</p>
                <div className="album-card-buttons">
                  <button onClick={() => abrirAlbum(album, 'carrusel')} className="album-card-btn primary">
                    ✨ Ver Carrusel
                  </button>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>

      {modoVisualizacion === 'carrusel' && albumSeleccionado && (
        <Carrusel
          fotos={fotosAlbum}
          albumNombre={albumSeleccionado.nombre}
          onCerrar={cerrarVisualizacion}
        />
      )}

      {modoVisualizacion === 'galeria' && albumSeleccionado && (
        <GaleriaCompleta
          fotos={fotosAlbum}
          albumNombre={albumSeleccionado.nombre}
          onCerrar={cerrarVisualizacion}
        />
      )}
    </>
  );
}

export default Portafolio;