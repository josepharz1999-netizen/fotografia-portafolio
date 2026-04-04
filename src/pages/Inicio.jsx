import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';
import SobreNosotros from './SobreNosotros';

const albumesData = [
  {
    id: 1,
    nombre: "Bodas",
    descripcion: "Emoción y luz en cada instante",
    fotos: 12,
    icono: "💍",
    fotosPreview: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 2,
    nombre: "Retratos",
    descripcion: "Autenticidad y presencia",
    fotos: 10,
    icono: "👤",
    fotosPreview: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 3,
    nombre: "Paisajes",
    descripcion: "Diálogo con el territorio",
    fotos: 15,
    icono: "🏔️",
    fotosPreview: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
    ]
  },
  {
    id: 4,
    nombre: "Eventos",
    descripcion: "Celebraciones y encuentros",
    fotos: 8,
    icono: "🎉",
    fotosPreview: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b4afc0b3?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop"
    ]
  }
];

function AlbumCarrusel({ album, onVerAlbum }) {
  const [indiceActual, setIndiceActual] = useState(0);
  const intervaloRef = useRef(null);

  useEffect(() => {
    intervaloRef.current = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % album.fotosPreview.length);
    }, 3000);
    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
    };
  }, [album.fotosPreview.length]);

  const pausarAutoplay = () => {
    if (intervaloRef.current) clearInterval(intervaloRef.current);
  };

  const reanudarAutoplay = () => {
    intervaloRef.current = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % album.fotosPreview.length);
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
          {album.fotosPreview.map((foto, idx) => (
            <div
              key={idx}
              className={`carrusel-slide${idx === indiceActual ? ' active' : ''}`}
            >
              <img src={foto} alt={`${album.nombre} ${idx + 1}`} />
            </div>
          ))}
        </div>
        
        {/* Botones de navegación */}
        <button 
          className="carousel-nav-btn left"
          onClick={() => setIndiceActual((prev) => (prev - 1 + album.fotosPreview.length) % album.fotosPreview.length)}
          aria-label="Foto anterior"
        >
          ‹
        </button>
        <button 
          className="carousel-nav-btn right"
          onClick={() => setIndiceActual((prev) => (prev + 1) % album.fotosPreview.length)}
          aria-label="Foto siguiente"
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="carousel-indicators-container">
          {album.fotosPreview.map((_, idx) => (
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
          <span className="album-carousel-btn-text">Ver álbum →</span>
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