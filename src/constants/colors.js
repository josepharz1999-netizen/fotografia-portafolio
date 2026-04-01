// Paleta de colores para FotoArt Studio
export const colors = {
  // Base
  black: '#000000',
  white: '#ffffff',
  
  // Grises profesionales
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  
  // Acentos sutiles
  accent: {
    gold: '#d4af37',
    silver: '#c0c0c0',
    warm: '#2d2d2d',
  },
  
  // Estados
  text: {
    primary: '#1a1a1a',
    secondary: '#4a4a4a',
    light: '#8a8a8a',
  },
  
  // Fondos
  background: {
    light: '#ffffff',
    dark: '#0f0f0f',
    accent: '#f5f5f5',
  }
};

// Exportar como variables CSS
export const getCSSVariables = () => {
  return `
    --color-black: ${colors.black};
    --color-white: ${colors.white};
    --color-primary-text: ${colors.text.primary};
    --color-secondary-text: ${colors.text.secondary};
    --color-accent-gold: ${colors.accent.gold};
  `;
};
