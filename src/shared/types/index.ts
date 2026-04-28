// Tipos principales de la aplicación

export interface Proyecto {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  estado: 'activo' | 'finalizado' | 'planificacion';
  investigadores: string[];
  tags: string[];
  fechaInicio: string;
  fechaFin?: string;
  enlace?: string;
}

export interface Convocatoria {
  id: string;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  requisitos: string[];
  enlaceFormulario?: string;
  estado: 'abierta' | 'cerrada' | 'proxima';
}

export interface Semillerista {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  foto: string;
  linea: string;
  estado: 'activo' | 'inactivo';
  redesSociales?: {
    github?: string;
    linkedin?: string;
  };
}

export interface Galeria {
  id: string;
  titulo: string;
  imagen: string;
  proyecto: string;
  fecha: string;
  descripcion?: string;
}

export interface Documento {
  id: string;
  titulo: string;
  tipo: 'paper' | 'tesis' | 'informe' | 'presentacion';
  autor: string;
  fecha: string;
  enlace: string;
  proyecto?: string;
  resumen?: string;
}
