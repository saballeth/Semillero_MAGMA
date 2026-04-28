import type { Proyecto } from '../../shared/types';

export class ProyectoEntity implements Proyecto {
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

  constructor(data: Proyecto) {
    this.id = data.id;
    this.titulo = data.titulo;
    this.descripcion = data.descripcion;
    this.imagen = data.imagen;
    this.estado = data.estado;
    this.investigadores = data.investigadores;
    this.tags = data.tags;
    this.fechaInicio = data.fechaInicio;
    this.fechaFin = data.fechaFin;
    this.enlace = data.enlace;
  }

  estaActivo(): boolean {
    return this.estado === 'activo';
  }

  getTiempoTranscurrido(): string {
    const inicio = new Date(this.fechaInicio);
    const fin = this.fechaFin ? new Date(this.fechaFin) : new Date();
    const dias = Math.floor((fin.getTime() - inicio.getTime()) / (1000 * 60 * 60 * 24));
    return `${Math.floor(dias / 30)} meses`;
  }
}
