import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import SobreNosotros from './SobreNosotros';
import { albumesData, getWebPUrl } from '../data/albumesData';


function AlbumCarrusel({ album, onVerAlbum }) {
  const [indiceActual, setIndiceActual] = useState(0);
  const intervaloRef = useRef(null);
  const previewImages = album.fotosPreview.filter(Boolean);

  useEffect(() => {
    if (previewImages.length === 0) return;

    intervaloRef.current = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % previewImages.length);
    }, 3000);
    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
    };
  }, [previewImages.length]);

  const pausarAutoplay = () => {
    if (intervaloRef.current) clearInterval(intervaloRef.current);
  };

  const reanudarAutoplay = () => {
    if (previewImages.length === 0) return;
    intervaloRef.current = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % previewImages.length);
    }, 3000);
  };

  return (
    <div className="album-carousel-card">
      {/* Overlay gradient */}
      <div className="album-carousel-overlay"></div>

      <div 
        className="carousel-image-container"
        onMouseEnter={pausarAutoplay}
        onMouseLeave={reanudarAutoplay}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {previewImages.map((foto, idx) => (
            <div
              key={idx}
              className={`carrusel-slide${idx === indiceActual ? ' active' : ''}`}
            >
              <picture>
                <source
                  srcSet={getWebPUrl(foto)}
                  type="image/webp"
                />
                <img
                  src={foto}
                  alt={`${album.nombre} ${idx + 1}`}
                  loading="lazy"
                />
              </picture>
            </div>
          ))}
        </div>
        
        {/* Botones de navegación */}
        {previewImages.length > 0 && (
          <> 
            <button 
              className="carousel-nav-btn left"
              onClick={() => setIndiceActual((prev) => (prev - 1 + previewImages.length) % previewImages.length)}
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button 
              className="carousel-nav-btn right"
              onClick={() => setIndiceActual((prev) => (prev + 1) % previewImages.length)}
              aria-label="Foto siguiente"
            >
              ›
            </button>
          </>
        )}

        {/* Indicadores */}
        <div className="carousel-indicators-container">
          {previewImages.map((_, idx) => (
            <button
              key={idx}
              className={`carousel-indicator-dot${idx === indiceActual ? ' active' : ''}`}
              onClick={() => setIndiceActual(idx)}
              aria-label={`Ir a foto ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="album-carousel-content">
        <h3 className="album-carousel-title">{album.nombre}</h3>
        <p className="album-carousel-description">{album.descripcion}</p>
        <p className="album-carousel-count">
          <span>📷</span>
          {album.fotos} fotografías
        </p>
        <button 
          className="album-carousel-btn"
          onClick={() => onVerAlbum(album.nombre)}
        >
          <span className="album-carousel-btn-text">Ver más</span>
        </button>
      </div>
    </div>
  );
}

function Inicio() {
  const navigate = useNavigate();

  const irAPortafolio = (albumNombre) => {
    sessionStorage.setItem('albumSeleccionado', albumNombre);
    navigate('/portafolio');
  };

  return (
    <div className="inicio">
      <div className="inicio-section">
        <h2 className="inicio-title">Álbumes destacados</h2>
        <p className="inicio-subtitle">Explora nuestros trabajos más destacados</p>
        
        <div className="album-carousel-grid">
          {albumesData.map(album => (
            <AlbumCarrusel 
              key={album.id} 
              album={album} 
              onVerAlbum={irAPortafolio}
            />
          ))}
        </div>
      </div>
      
      {/* Componente Sobre Nosotros */}
      <SobreNosotros />
    </div>
  );
}

export default Inicio;