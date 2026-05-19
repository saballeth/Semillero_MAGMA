// Entidad de Proyecto
export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  estado: 'activo' | 'finalizado' | 'planificacion';
  investigadores: string[];
  tags?: string[];
  fechaInicio: string;
  fechaFin?: string;
}

// Entidad de Convocatoria
export interface Convocatoria {
  id: string;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  requisitos: string[];
  estado: 'abierta' | 'proxima' | 'cerrada';
  enlaceFormulario: string;
}

// Entidad de Semillerista
export interface Semillerista {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  foto: string;
  linea: string;
  estado: string;
  redesSociales?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

// Entidad de Galería
export interface Galeria {
  id: string;
  titulo: string;
  imagen: string;
  proyecto: string;
  fecha: string;
  descripcion: string;
}

// Entidad de Documento
export interface Documento {
  id: string;
  titulo: string;
  tipo: 'paper' | 'tesis' | 'informe' | 'presentacion';
  autor: string;
  fecha: string;
  enlace: string;
  proyecto: string;
  resumen: string;
}
