import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function HeroBanner() {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&h=600&fit=crop', category: 'Paisaje' },
    { id: 2, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=600&fit=crop', category: 'Bodas' },
    { id: 3, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop', category: 'Retrato' },
    { id: 4, url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=600&fit=crop', category: 'Producto' },
    { id: 5, url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&h=600&fit=crop', category: 'Arquitectura' },
    { id: 6, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop', category: 'Naturaleza' },
    { id: 7, url: 'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?w=500&h=600&fit=crop', category: 'Urbano' },
    { id: 8, url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop', category: 'Comercial' },
  ];

  const infinitePhotos = [...photos, ...photos, ...photos];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes scrollInfinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        @keyframes titleShine {
          0% {
            background-position: -200% center;
            text-shadow: 0 0 10px rgba(255,255,255,0.3);
          }
          100% {
            background-position: 200% center;
            text-shadow: 0 0 20px rgba(255,255,255,0.8);
          }
        }

        @keyframes statFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes cameraShutter {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(0.95); }
        }

        @keyframes flash {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.4; }
        }

        .carousel-track {
          display: flex;
          width: fit-content;
          animation: scrollInfinite 40s linear infinite;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        .photo-card-3d {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
          will-change: transform;
        }

        .photo-card-3d:hover {
          transform: scale(1.05) translateZ(30px) rotateY(2deg);
          box-shadow: 0 25px 40px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,255,255,0.3);
          z-index: 10;
        }

        .stat-card {
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .camera-shutter {
          animation: cameraShutter 3s ease-in-out infinite;
        }

        .flash-effect {
          animation: flash 3s ease-in-out infinite;
        }

        .title-shine {
          background: linear-gradient(120deg, #ffffff, #ffffff, #f0f0f0, #ffffff, #ffffff);
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: titleShine 6s linear infinite;
          text-shadow: 0 0 15px rgba(255,255,255,0.5);
        }
      `}</style>

      <section
        ref={containerRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[70px]"
        style={{ background: '#000000' }}
      >
        {/* Sutil degradado para profundidad */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(20,20,30,0.3) 0%, #000000 90%)',
          }}
        />

        {/* Carrusel infinito 3D */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            perspective: '1400px',
            transform: `rotateX(${mousePos.y * 4}deg) rotateY(${mousePos.x * 4}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <div
            className="carousel-track absolute top-1/2 left-0 -translate-y-1/2 flex gap-6"
            style={{ transform: 'translateY(-50%) translateZ(-80px)' }}
          >
            {infinitePhotos.map((photo, idx) => (
              <div
                key={`${photo.id}-${idx}`}
                className="photo-card-3d relative flex-shrink-0 w-72 h-96 rounded-xl overflow-hidden cursor-pointer group"
                style={{
                  background: '#111',
                  boxShadow: '0 20px 30px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <span className="text-white text-xs font-medium tracking-wider uppercase">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contenido principal */}
        <div className="relative z-20 text-center max-w-5xl px-6 py-20">
          <div className="mb-16">
            {/* Badge superior minimalista */}
            <div
              className="inline-block mb-8 px-5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-white/5 backdrop-blur-sm border border-white/10 text-white/80"
            >
              Estudio Fotográfico
            </div>

            {/* Título con animación brillante */}
            <h1
              className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 leading-tight tracking-tight title-shine"
              style={{ letterSpacing: '-0.02em' }}
            >
              FotoArt Studio
            </h1>

         <p
  className="text-base sm:text-lg mb-12 max-w-xl mx-auto leading-relaxed"
  style={{
    color: '#ffffff',
    fontWeight: '300',
    letterSpacing: '0.01em',
    animation: 'flicker 2s infinite',
    textShadow: '0 0 8px rgba(255,255,255,0.7), 0 1px 2px rgba(0,0,0,0.2)',
  }}
>
  Capturamos la esencia de tus momentos con arte y técnica.
</p>

            {/* Botones con más espacio inferior */}
            <div className="flex gap-6 justify-center flex-wrap mb-20">
              <button
                onClick={() => navigate('/portafolio')}
                className="group px-10 py-3.5 bg-white text-black font-medium rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1"
              >
                <span>Ver Portafolio</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>

              <button
                onClick={() => navigate('/contacto')}
                className="px-8 py-3.5 bg-transparent text-white font-medium rounded-full border border-white/60 transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
              >
                Reservar Sesión
              </button>
            </div>

            {/* Stats minimalistas */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto pt-6 border-t border-white/10 mt-10" style={{marginTop:"4vh"}}
            >
              {[
                { number: '500+', label: 'Sesiones' },
                { number: '10+', label: 'Años' },
                { number: '1000+', label: 'Sonrisas' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="stat-card text-center"
                  style={{ animation: `statFloat 4s ease-in-out infinite ${i * 0.2}s` }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator sutil */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20"
          style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
        >
          <span className="text-gray-500 text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-white/30 flex justify-center p-1">
            <div className="w-0.5 h-1.5 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
          }}
        />
      </section>
    </>
  );
}

export default HeroBanner;