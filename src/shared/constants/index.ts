// Información del grupo
export const GROUP_INFO = {
  nombre: 'Semillero MagmaBio',
  sigla: 'MagmaBio',
  descripcion: 'Semillero de investigación especializado en biotecnología e ingeniería electrónica',
  lineas: ['Biosensores', 'Interfaz Cerebro-Computadora', 'Implantes Biocompatibles'],
};

// Rutas principales
export const ROUTES = {
  HOME: '/',
  PROYECTOS: '/proyectos',
  CONVOCATORIAS: '/convocatorias',
  SEMILLERISTAS: '/semilleristas',
  GALERIA: '/galeria',
  DOCUMENTACION: '/documentacion',
};

// Colores del sistema
export const COLORS = {
  primary: '#0A3B5E',      // Azul profesional oscuro
  secondary: '#00A8E8',    // Azul cielo fresco
  accent: '#00C9FF',       // Azul claro para énfasis
  neutral: '#F1F3F5',      // Blanco-gris minimalista
  white: '#FFFFFF',
  black: '#000000',
  success: '#10b981',      // Verde para estados activos
  warning: '#f59e0b',      // Amarillo para estados en progreso
  error: '#ef4444',        // Rojo para errores/finalizados
  text: '#1F2937',         // Gris oscuro para texto
  textLight: '#6B7280',    // Gris claro para texto secundario
};

// Tipografía
export const TYPOGRAPHY = {
  fontFamily: {
    primary: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    code: "'Monaco', 'Courier New', monospace",
  },
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

// Puntos de ruptura responsivos
export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
};

// Animaciones
export const ANIMATIONS = {
  transition: '0.3s ease',
  transitionFast: '0.15s ease',
  transitionSlow: '0.5s ease',
};

// Sombras
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};
