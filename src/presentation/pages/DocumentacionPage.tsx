import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Section, Container, Grid, Flex } from '../../shared/utils/styledComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import DocumentoCard from '../components/DocumentoCard';
import type { Documento } from '../../shared/types';

const documentosEjemplo: Documento[] = [
  {
    id: '1',
    titulo: 'Biosensores Electrónicos de Nueva Generación',
    tipo: 'paper',
    autor: 'García, J., López, M., et al.',
    fecha: '2025-12-15',
    enlace: 'https://example.com/paper1.pdf',
    proyecto: 'Biosensores Electrónicos para Diagnóstico',
    resumen: 'Desarrollo de biosensores de alta sensibilidad para detección temprana de biomarcadores utilizando señales electrónicas.'
  },
  {
    id: '2',
    titulo: 'Interfaces Cerebro-Computadora: Avances y Aplicaciones',
    tipo: 'tesis',
    autor: 'Ruiz, C.',
    fecha: '2025-10-20',
    enlace: 'https://example.com/tesis1.pdf',
    proyecto: 'Interfaz Cerebro-Computadora (BCI)',
    resumen: 'Investigación doctoral sobre nuevas tecnologías en interfaces neuronales para comunicación directa.'
  },
  {
    id: '3',
    titulo: 'Materiales Biocompatibles para Implantes Electrónicos - Informe Q3 2025',
    tipo: 'informe',
    autor: 'Díaz, R., Silva, A.',
    fecha: '2025-09-30',
    enlace: 'https://example.com/informe1.pdf',
    proyecto: 'Implantes Biocompatibles',
    resumen: 'Resumen ejecutivo de los avances en materiales biocompatibles para implantes electrónicos médicos.'
  },
  {
    id: '4',
    titulo: 'FPGA Implementation of Deep Neural Networks for Image Processing',
    tipo: 'paper',
    autor: 'Torres, P., Méndez, L., García, J.',
    fecha: '2025-08-10',
    enlace: 'https://example.com/paper2.pdf',
    proyecto: 'Redes Neuronales en Circuitos FPGA',
    resumen: 'Desarrollo de arquitecturas hardware para aceleración de redes neuronales convolucionales.'
  },
  {
    id: '5',
    titulo: 'Seminario: Últimas Tendencias en Electrónica de Potencia',
    tipo: 'presentacion',
    autor: 'Grupo GIRIE',
    fecha: '2025-07-15',
    enlace: 'https://example.com/presentacion1.pdf',
    resumen: 'Presentación de las líneas de investigación actuales del grupo en seminario académico.'
  },
  {
    id: '6',
    titulo: 'Ultra-Low Power Wireless Sensor Networks for Environmental Monitoring',
    tipo: 'paper',
    autor: 'Silva, A., Moreno, F., López, S.',
    fecha: '2025-06-05',
    enlace: 'https://example.com/paper3.pdf',
    proyecto: 'Captores Inalámbricos de Bajo Consumo',
    resumen: 'Diseño y validación de sensores ultra-bajos en consumo para redes distribuidas.'
  },
];

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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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
    background-color: ${props => props.active ? COLORS.secondary : 'transparent'};
    color: ${props => props.active ? COLORS.white : COLORS.secondary};
  }
`;

const StatsBox = styled.div`
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
  color: ${COLORS.white};
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 3rem;

  h3 {
    font-size: ${TYPOGRAPHY.fontSize['2xl']};
    margin-bottom: 0.5rem;
  }

  p {
    opacity: 0.9;
  }
`;

export const DocumentacionPage: React.FC = () => {
  const [filtroTipo, setFiltroTipo] = useState<string>('todos');

  const tipos = ['paper', 'tesis', 'informe', 'presentacion'];
  const tipoLabels: { [key: string]: string } = {
    paper: 'Papers',
    tesis: 'Tesis',
    informe: 'Informes',
    presentacion: 'Presentaciones'
  };

  const documentosFiltrados = filtroTipo === 'todos'
    ? documentosEjemplo
    : documentosEjemplo.filter(d => d.tipo === filtroTipo);

  return (
    <>
      <Header activeRoute="/documentacion" />
      
      <Hero
        title="Documentación Científica"
        subtitle="Accede a papers, tesis e investigaciones de MagmaBio"
      />

      <Section>
        <Container>
          <StatsBox>
            <h3>{documentosEjemplo.length} Documentos</h3>
            <p>Papers, tesis, informes y presentaciones disponibles</p>
          </StatsBox>

          <SectionTitle>Filtrar por Tipo</SectionTitle>
          <Flex justify="center" style={{ flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
            <FilterButton 
              active={filtroTipo === 'todos'}
              onClick={() => setFiltroTipo('todos')}
            >
              Todos ({documentosEjemplo.length})
            </FilterButton>
            {tipos.map(tipo => (
              <FilterButton 
                key={tipo}
                active={filtroTipo === tipo}
                onClick={() => setFiltroTipo(tipo)}
              >
                {tipoLabels[tipo]} ({documentosEjemplo.filter(d => d.tipo === tipo).length})
              </FilterButton>
            ))}
          </Flex>

          <Grid columns={2} gap="1.5rem">
            {documentosFiltrados.map(documento => (
              <DocumentoCard 
                key={documento.id} 
                documento={documento}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: COLORS.neutral }}>
        <Container>
          <SectionTitle>Política de Acceso Abierto</SectionTitle>
          <SectionSubtitle>
            Comprometidos con la difusión del conocimiento científico
          </SectionSubtitle>
          
          <Grid columns={3}>
            {[
              {
                icon: '🔓',
                titulo: 'Acceso Abierto',
                desc: 'Todos nuestros papers están disponibles gratuitamente'
              },
              {
                icon: '📝',
                titulo: 'Repositorio Institucional',
                desc: 'Archivados en el repositorio de la universidad'
              },
              {
                icon: '🌐',
                titulo: 'Indexación Internacional',
                desc: 'Publicados en bases de datos indexadas'
              },
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 style={{ color: COLORS.primary, marginBottom: '0.5rem' }}>{item.titulo}</h4>
                <p style={{ color: '#666', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default DocumentacionPage;
