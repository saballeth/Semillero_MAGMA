import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Section, Container, Grid, Button } from '../../shared/utils/styledComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProyectoCard from '../components/ProyectoCard';
import type { Proyecto } from '../../shared/types';

const proyectosEjemplo: Proyecto[] = [
  {
    id: '1',
    titulo: 'Biosensores Electrónicos para Diagnóstico',
    descripcion: 'Desarrollo de biosensores que utilizan señales electrónicas para detección temprana de biomarcadores.',
    imagen: '',
    estado: 'activo',
    investigadores: ['Dr. Juan García', 'Ing. María López'],
    tags: ['Biosensores', 'Bioelectrónica', 'Diagnóstico'],
    fechaInicio: '2024-01-15',
  },
  {
    id: '2',
    titulo: 'Interfaz Cerebro-Computadora (BCI)',
    descripcion: 'Investigación en interfaces neuronales para comunicación directa entre el cerebro y dispositivos electrónicos.',
    imagen: '',
    estado: 'activo',
    investigadores: ['Dr. Carlos Ruiz', 'Ing. Ana Martinez'],
    tags: ['BCI', 'Neurobiología', 'Electrónica'],
    fechaInicio: '2023-09-01',
  },
  {
    id: '3',
    titulo: 'Convertidores DC-DC de Alta Eficiencia',
    descripcion: 'Investigación en convertidores de potencia para aplicaciones de energías renovables.',
    imagen: '',
    estado: 'finalizado',
    investigadores: ['Dr. Roberto Díaz'],
    tags: ['Electrónica de Potencia', 'Energías Renovables'],
    fechaInicio: '2022-03-10',
    fechaFin: '2024-03-10',
  },
  {
    id: '4',
    titulo: 'Redes Neuronales en Circuitos FPGA',
    descripcion: 'Implementación de modelos de deep learning en hardware reconfigurable para procesamiento de imágenes.',
    imagen: '',
    estado: 'activo',
    investigadores: ['Ing. Patricia Torres', 'Ing. Luis Mendez'],
    tags: ['FPGA', 'Deep Learning', 'Visión Artificial'],
    fechaInicio: '2024-06-01',
  },
  {
    id: '5',
    titulo: 'Captores Inalámbricos de Bajo Consumo',
    descripcion: 'Diseño de sensores ultra-bajos en potencia para redes de sensores distribuidas.',
    imagen: '',
    estado: 'planificacion',
    investigadores: ['Dr. Antonio Silva'],
    tags: ['Sensores', 'Inalámbrico', 'Bajo Consumo'],
    fechaInicio: '2026-09-01',
  },
];

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const FilterButton = styled.button<{ active?: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? COLORS.secondary : COLORS.neutral};
  background-color: ${props => props.active ? COLORS.secondary : 'transparent'};
  color: ${props => props.active ? COLORS.white : COLORS.dark};
  border-radius: 25px;
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: ${TYPOGRAPHY.fontSize.sm};

  &:hover {
    border-color: ${COLORS.secondary};
    color: ${props => props.active ? COLORS.white : COLORS.secondary};
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: ${COLORS.primary};
  margin-bottom: 0.5rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ProyectosPage: React.FC = () => {
  const [filtro, setFiltro] = useState<string>('todos');

  const proyectosFiltrados = filtro === 'todos' 
    ? proyectosEjemplo 
    : proyectosEjemplo.filter(p => p.estado === filtro);

  return (
    <>
      <Header activeRoute="/proyectos" />
      
      <Hero
        title="Proyectos de Bioelectrónica"
        subtitle="Iniciativas de investigación innovadoras en biotecnología e ingeniería electrónica"
      />

      <Section>
        <Container>
          <SectionTitle>Filtrar por Estado</SectionTitle>
          <FilterContainer>
            <FilterButton 
              active={filtro === 'todos'}
              onClick={() => setFiltro('todos')}
            >
              Todos ({proyectosEjemplo.length})
            </FilterButton>
            <FilterButton 
              active={filtro === 'activo'}
              onClick={() => setFiltro('activo')}
            >
              Activos ({proyectosEjemplo.filter(p => p.estado === 'activo').length})
            </FilterButton>
            <FilterButton 
              active={filtro === 'finalizado'}
              onClick={() => setFiltro('finalizado')}
            >
              Finalizados ({proyectosEjemplo.filter(p => p.estado === 'finalizado').length})
            </FilterButton>
            <FilterButton 
              active={filtro === 'planificacion'}
              onClick={() => setFiltro('planificacion')}
            >
              En Planificación ({proyectosEjemplo.filter(p => p.estado === 'planificacion').length})
            </FilterButton>
          </FilterContainer>

          {proyectosFiltrados.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <p style={{ fontSize: '1.1rem', color: '#666' }}>
                No hay proyectos en esta categoría
              </p>
            </div>
          ) : (
            <Grid columns={3}>
              {proyectosFiltrados.map(proyecto => (
                <ProyectoCard key={proyecto.id} proyecto={proyecto} />
              ))}
            </Grid>
          )}
        </Container>
      </Section>

      <Section style={{ background: COLORS.neutral }}>
        <Container>
          <SectionTitle>¿Tienes una idea de proyecto?</SectionTitle>
          <SectionSubtitle>
            Propón una iniciativa de investigación que pueda aportar a las líneas de trabajo del grupo
          </SectionSubtitle>
          <div style={{ textAlign: 'center' }}>
            <Button variant="secondary" size="lg">
              Proponer Proyecto
            </Button>
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default ProyectosPage;
