// src/data/albumesData.js
export const albumesData = [
  {
    id: 1,
    nombre: "Sesión de Amanda",
    descripcion: "Emoción y luz en cada instante",
    fotos: 6,
    icono: "💍",
    portada: "/images/Amanda/amanda1.jpeg",
    fotosPreview: [
      "/images/Amanda/amanda1.jpeg",
      "/images/Amanda/amanda2.jpeg",
      "/images/Amanda/amanda3.jpeg",
      "/images/Amanda/amanda4.jpeg",
      "/images/Amanda/amanda5.jpeg",
      "/images/Amanda/amanda6.jpeg",
    ],
    fotosUrls: [
      "/images/Amanda/amanda1.jpeg",
      "/images/Amanda/amanda2.jpeg",
      "/images/Amanda/amanda3.jpeg",
      "/images/Amanda/amanda4.jpeg",
      "/images/Amanda/amanda5.jpeg",
      "/images/Amanda/amanda6.jpeg",
    ]
  },
  {
    id: 2,
    nombre: "Promo 2000 BTC",
    descripcion: "Sesión promocional",
    fotos: 5,
    icono: "🏔️",
    portada: "/images/Ricardo/Ricardo1.jpg",
    fotosPreview: [
      "/images/Ricardo/Ricardo1.jpg",
      "/images/Ricardo/Ricardo2.jpg",
      "/images/Ricardo/Ricardo3.jpg",
      "/images/Ricardo/Ricardo4.jpg",
      "/images/Ricardo/Ricardo5.jpg",
    ],
    fotosUrls: [
      "/images/Ricardo/Ricardo1.jpg",
      "/images/Ricardo/Ricardo2.jpg",
      "/images/Ricardo/Ricardo3.jpg",
      "/images/Ricardo/Ricardo4.jpg",
      "/images/Ricardo/Ricardo5.jpg",
    ]
  },
];

export const generarFotosAlbum = (album) => {
  if (album.fotosUrls && album.fotosUrls.length > 0) {
    return album.fotosUrls.map((url, idx) => ({
      id: idx,
      titulo: `${album.nombre} - Foto ${idx + 1}`,
      url: url
    }));
  }
  return album.fotosPreview.map((url, idx) => ({
    id: idx,
    titulo: `${album.nombre} - Foto ${idx + 1}`,
    url: url
  }));
};