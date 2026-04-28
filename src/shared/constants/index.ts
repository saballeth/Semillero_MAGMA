// Información del grupo de investigación
export const GROUP_INFO = {
  nombre: 'Grupo de Investigación en Ingeniería Electrónica',
  sigla: 'MAGMA',
  descripcion: 'Centro de excelencia en investigación y desarrollo de tecnologías en ingeniería electrónica',
  email: 'contacto@magma.edu',
  telefonos: ['+57 (1) 123-4567', '+57 (1) 123-4568'],
  direccion: 'Universidad del Magdalena',
  redesSociales: {
    github: 'https://github.com/magma',
    linkedin: 'https://linkedin.com/company/magma',
    twitter: 'https://twitter.com/magma',
  }
};

// Rutas de la aplicación
export const ROUTES = {
  HOME: '/',
  PROYECTOS: '/proyectos',
  CONVOCATORIAS: '/convocatorias',
  SEMILLERISTAS: '/semilleristas',
  GALERIA: '/galeria',
  DOCUMENTACION: '/documentacion',
  CONTACTO: '/contacto',
};

// Colores del diseño
export const COLORS = {
  primary: '#0A3B5E',      
  secondary: '#00A8E8',    
  accent: '#00C9FF',       
  success: '#06A77D',      
  warning: '#F4A460',      
  danger: '#E63946',       
  neutral: '#F1F3F5',      
  dark: '#1A1A1A',         
  white: '#FFFFFF',
};

// Estilos de tipografía
export const TYPOGRAPHY = {
  fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};
