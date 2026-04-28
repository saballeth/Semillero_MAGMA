// Casos de uso de la aplicación
import ProyectoRepository from '../../domain/repositories/ProyectoRepository';
import type { Proyecto } from '../../shared/types';

const proyectoRepository = new ProyectoRepository();

export class ObtenerProyectosUseCase {
  async execute(): Promise<Proyecto[]> {
    return proyectoRepository.obtenerTodos();
  }
}

export class ObtenerProyectoPorIdUseCase {
  async execute(id: string): Promise<Proyecto | null> {
    return proyectoRepository.obtenerPorId(id);
  }
}

export class FiltrarProyectosPorEstadoUseCase {
  async execute(estado: 'activo' | 'finalizado' | 'planificacion'): Promise<Proyecto[]> {
    return proyectoRepository.obtenerPorEstado(estado);
  }
}
