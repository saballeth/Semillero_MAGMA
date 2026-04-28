import type { Proyecto } from '../../shared/types';

// Simulación de datos - En producción, estos vendrían de una API
class ProyectoRepository {
  async obtenerTodos(): Promise<Proyecto[]> {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return [
      {
        id: '1',
        titulo: 'Sistema de Monitoreo IoT',
        descripcion: 'Desarrollo de un sistema inteligente de monitoreo en tiempo real para aplicaciones industriales.',
        imagen: '',
        estado: 'activo',
        investigadores: ['Dr. Juan García', 'Ing. María López'],
        tags: ['IoT', 'Embebidos', 'Tiempo Real'],
        fechaInicio: '2024-01-15',
      },
      // ... más proyectos
    ];
  }

  async obtenerPorId(id: string): Promise<Proyecto | null> {
    const todos = await this.obtenerTodos();
    return todos.find(p => p.id === id) || null;
  }

  async obtenerPorEstado(estado: 'activo' | 'finalizado' | 'planificacion'): Promise<Proyecto[]> {
    const todos = await this.obtenerTodos();
    return todos.filter(p => p.estado === estado);
  }
}

export default ProyectoRepository;
