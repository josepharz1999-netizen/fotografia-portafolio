import React, { useState, useEffect, useRef } from 'react';
import './Inicio.css';

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
    <div className="album-card-inicio">
      <div 
        className="album-carrusel"
        onMouseEnter={pausarAutoplay}
        onMouseLeave={reanudarAutoplay}
      >
        <div className="carrusel-imagenes">
          {album.fotosPreview.map((foto, idx) => (
            <div
              key={idx}
              className={`carrusel-slide ${idx === indiceActual ? 'active' : ''}`}
            >
              <img src={foto} alt={`${album.nombre} ${idx + 1}`} />
            </div>
          ))}
        </div>
        
        <div className="carrusel-indicadores">
          {album.fotosPreview.map((_, idx) => (
            <button
              key={idx}
              className={`indicador ${idx === indiceActual ? 'active' : ''}`}
              onClick={() => setIndiceActual(idx)}
            />
          ))}
        </div>
        
        <button 
          className="carrusel-btn anterior"
          onClick={() => setIndiceActual((prev) => (prev - 1 + album.fotosPreview.length) % album.fotosPreview.length)}
        >
          ‹
        </button>
        <button 
          className="carrusel-btn siguiente"
          onClick={() => setIndiceActual((prev) => (prev + 1) % album.fotosPreview.length)}
        >
          ›
        </button>
      </div>
      
      <div className="album-info">
        <h3>{album.nombre}</h3>
        <p>{album.descripcion}</p>
        <p className="fotos-count">{album.fotos} fotografías</p>
        <button className="btn-ver-album" onClick={() => onVerAlbum(album.nombre)}>
          Ver álbum →
        </button>
      </div>
    </div>
  );
}

function Inicio({ setActiveSection }) {
  const irAPortafolio = (albumNombre) => {
    sessionStorage.setItem('albumSeleccionado', albumNombre);
    setActiveSection('portafolio');
  };

  return (
    <div className="inicio">
      <div className="hero">
        <h1>Capturando momentos únicos</h1>
        <p>Fotografía con sensibilidad, luz y presencia. Cada imagen cuenta una historia.</p>
        <button className="btn-primary" onClick={() => setActiveSection('portafolio')}>
          Ver todo el portafolio
        </button>
      </div>

      <div className="albumes-destacados">
        <h2 className="section-titulo">Álbumes destacados</h2>
        <div className="albumes-grid-inicio">
          {albumesData.map(album => (
            <AlbumCarrusel 
              key={album.id} 
              album={album} 
              onVerAlbum={irAPortafolio}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Inicio;