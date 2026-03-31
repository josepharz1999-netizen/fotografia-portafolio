import React, { useState, useEffect, useRef } from 'react';
import './Portafolio.css';

const albumesData = [
  { 
    id: 1, 
    nombre: "Bodas", 
    descripcion: "Emoción y luz en cada instante", 
    fotos: 12, 
    icono: "💍",
    portada: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    fotosUrls: Array(12).fill().map((_, i) => 
      `https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop&sig=${i}`
    )
  },
  { 
    id: 2, 
    nombre: "Retratos", 
    descripcion: "Autenticidad y presencia", 
    fotos: 10, 
    icono: "👤",
    portada: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
    fotosUrls: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=600&h=400&fit=crop"
    ]
  },
  { 
    id: 3, 
    nombre: "Paisajes", 
    descripcion: "Diálogo con el territorio", 
    fotos: 15, 
    icono: "🏔️",
    portada: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    fotosUrls: Array(15).fill().map((_, i) => 
      `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&sig=${i}`
    )
  },
  { 
    id: 4, 
    nombre: "Eventos", 
    descripcion: "Celebraciones y encuentros", 
    fotos: 8, 
    icono: "🎉",
    portada: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    fotosUrls: Array(8).fill().map((_, i) => 
      `https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop&sig=${i}`
    )
  }
];

const generarFotosAlbum = (album) => {
  return album.fotosUrls.map((url, idx) => ({
    id: idx,
    titulo: `${album.nombre} - Foto ${idx + 1}`,
    url: url
  }));
};

function Carrusel({ fotos, albumNombre, onCerrar }) {
  const [indiceActual, setIndiceActual] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervaloRef = useRef(null);

  const siguienteFoto = () => {
    setIndiceActual((prev) => (prev + 1) % fotos.length);
  };

  const anteriorFoto = () => {
    setIndiceActual((prev) => (prev - 1 + fotos.length) % fotos.length);
  };

  useEffect(() => {
    if (autoplay) {
      intervaloRef.current = setInterval(siguienteFoto, 3000);
    }
    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
    };
  }, [autoplay, fotos.length]);

  const pausarAutoplay = () => setAutoplay(false);
  const reanudarAutoplay = () => setAutoplay(true);

  return (
    <div className="carrusel-overlay">
      <div className="carrusel-container">
        <button className="carrusel-cerrar" onClick={onCerrar}>✕</button>
        <h2 className="carrusel-titulo">{albumNombre}</h2>
        
        <div className="carrusel-principal">
          <button className="carrusel-nav anterior" onClick={anteriorFoto}>‹</button>
          
          <div className="carrusel-imagen-container">
            <img 
              src={fotos[indiceActual].url} 
              alt={fotos[indiceActual].titulo}
              className="carrusel-imagen"
              onMouseEnter={pausarAutoplay}
              onMouseLeave={reanudarAutoplay}
            />
            <div className="carrusel-contador">
              {indiceActual + 1} / {fotos.length}
            </div>
          </div>
          
          <button className="carrusel-nav siguiente" onClick={siguienteFoto}>›</button>
        </div>
        
        <div className="carrusel-miniaturas">
          {fotos.map((foto, idx) => (
            <div 
              key={idx}
              className={`miniatura ${idx === indiceActual ? 'activa' : ''}`}
              onClick={() => { setIndiceActual(idx); pausarAutoplay(); setTimeout(reanudarAutoplay, 3000); }}
            >
              <img src={foto.url} alt={foto.titulo} />
            </div>
          ))}
        </div>
        
        <div className="carrusel-autoplay-control">
          <button onClick={() => setAutoplay(!autoplay)} className="autoplay-btn">
            {autoplay ? '⏸ Pausar' : '▶ Reproducir'}
          </button>
        </div>
      </div>
    </div>
  );
}

function GaleriaCompleta({ fotos, albumNombre, onCerrar }) {
  const [mostrarTodas, setMostrarTodas] = useState(false);
  const fotosMostradas = mostrarTodas ? fotos : fotos.slice(0, 6);

  return (
    <div className="galeria-completa">
      <div className="galeria-header">
        <h2>{albumNombre}</h2>
        <button className="cerrar-galeria" onClick={onCerrar}>✕</button>
      </div>
      
      <div className="galeria-grid">
        {fotosMostradas.map((foto, idx) => (
          <div key={idx} className="foto-card">
            <div className="foto-placeholder">
              <img src={foto.url} alt={foto.titulo} />
            </div>
            <p>{foto.titulo}</p>
          </div>
        ))}
      </div>
      
      {fotos.length > 6 && !mostrarTodas && (
        <div className="ver-mas-container">
          <button className="btn-ver-mas" onClick={() => setMostrarTodas(true)}>
            Ver todas las fotos ({fotos.length - 6} restantes)
          </button>
        </div>
      )}
      
      {mostrarTodas && (
        <div className="ver-mas-container">
          <button className="btn-ver-mas" onClick={() => setMostrarTodas(false)}>
            Mostrar menos
          </button>
        </div>
      )}
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
        abrirAlbum(album, 'galeria');
        sessionStorage.removeItem('albumSeleccionado');
      }
    }
  }, []);

  return (
    <div className="portafolio">
      <h1>Portafolio</h1>
      <p className="subtitulo">Selecciona un álbum para ver las fotos</p>

      <div className="albumes-grid">
        {albumesData.map(album => (
          <div key={album.id} className="album-card">
            <div className="album-image">
              <img src={album.portada} alt={album.nombre} className="album-portada" />
            </div>
            <h3>{album.nombre}</h3>
            <p>{album.descripcion}</p>
            <p className="fotos-count">{album.fotosUrls.length} fotografías</p>
            <div className="album-botones">
              <button 
                className="btn-carrusel" 
                onClick={() => abrirAlbum(album, 'carrusel')}
              >
                ▶ Ver presentación
              </button>
              <button 
                className="btn-galeria" 
                onClick={() => abrirAlbum(album, 'galeria')}
              >
                🖼️ Ver galería
              </button>
            </div>
          </div>
        ))}
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
    </div>
  );
}

export default Portafolio;