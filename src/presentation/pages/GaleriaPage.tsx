import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Section, Container, Grid, Flex } from '../../shared/utils/styledComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import GaleriaCard from '../components/GaleriaCard';
import type { Galeria } from '../../shared/types';

const galeríaEjemplo: Galeria[] = [
  {
    id: '1',
    titulo: 'Laboratorio Principal',
    imagen: '',
    proyecto: 'IoT General',
    fecha: '2026-03-15',
    descripcion: 'Vista del laboratorio con equipos de medición'
  },
  {
    id: '2',
    titulo: 'Reunión de Investigadores',
    imagen: '',
    proyecto: 'Semilleristas 2025',
    fecha: '2026-03-20',
    descripcion: 'Sesión de planificación del segundo trimestre'
  },
  {
    id: '3',
    titulo: 'Presentación en Congreso',
    imagen: '',
    proyecto: 'Procesamiento de Señales',
    fecha: '2026-02-10',
    descripcion: 'Presentación de resultados en congreso nacional'
  },
  {
    id: '4',
    titulo: 'Pruebas de Hardware',
    imagen: '',
    proyecto: 'Convertidores DC-DC',
    fecha: '2026-01-25',
    descripcion: 'Pruebas funcionales en laboratorio'
  },
  {
    id: '5',
    titulo: 'Colaboración Internacional',
    imagen: '',
    proyecto: 'Pasantía Extranjera',
    fecha: '2025-12-15',
    descripcion: 'Visita a laboratorio aliado en el extranjero'
  },
  {
    id: '6',
    titulo: 'Evento de Divulgación',
    imagen: '',
    proyecto: 'Extensión',
    fecha: '2025-11-30',
    descripcion: 'Evento de acercamiento con escuelas de la región'
  },
];

const SectionTitle = styled.h2`
  text-align: center;
  color: ${COLORS.primary};
  margin-bottom: 0.5rem;
`;

const FilterTag = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${COLORS.neutral};
  color: ${COLORS.primary};
  border-radius: 20px;
  font-size: ${TYPOGRAPHY.fontSize.sm};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.secondary};
    color: ${COLORS.white};
  }
`;

const ModalOverlay = styled.div<{ isOpen?: boolean }>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${COLORS.white};
  border-radius: 8px;
  overflow: hidden;
  max-width: 800px;
  width: 90%;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: cover;
`;

const ModalInfo = styled.div`
  padding: 2rem;

  h3 {
    color: ${COLORS.primary};
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: ${COLORS.white};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${COLORS.neutral};
  }
`;

export const GaleriaPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<Galeria | null>(null);
  const [filtroProyecto, setFiltroProyecto] = useState<string>('todos');

  const proyectos = Array.from(new Set(galeríaEjemplo.map(g => g.proyecto)));
  
  const galeriafiltrada = filtroProyecto === 'todos'
    ? galeríaEjemplo
    : galeríaEjemplo.filter(g => g.proyecto === filtroProyecto);

  return (
    <>
      <Header activeRoute="/galeria" />
      
      <Hero
        title="Galería de Proyectos"
        subtitle="Momentos clave de la investigación en imágenes"
      />

      <Section>
        <Container>
          <SectionTitle>Filtrar por Proyecto</SectionTitle>
          <Flex justify="center" style={{ flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            <FilterTag 
              style={{ 
                cursor: 'pointer',
                backgroundColor: filtroProyecto === 'todos' ? COLORS.secondary : COLORS.neutral,
                color: filtroProyecto === 'todos' ? COLORS.white : COLORS.primary
              }}
              onClick={() => setFiltroProyecto('todos')}
            >
              Todas ({galeríaEjemplo.length})
            </FilterTag>
            {proyectos.map(proyecto => (
              <FilterTag 
                key={proyecto}
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: filtroProyecto === proyecto ? COLORS.secondary : COLORS.neutral,
                  color: filtroProyecto === proyecto ? COLORS.white : COLORS.primary
                }}
                onClick={() => setFiltroProyecto(proyecto)}
              >
                {proyecto} ({galeríaEjemplo.filter(g => g.proyecto === proyecto).length})
              </FilterTag>
            ))}
          </Flex>

          <Grid columns={3}>
            {galeriafiltrada.map(imagen => (
              <GaleriaCard 
                key={imagen.id} 
                imagen={imagen}
                onClick={() => setSelectedImage(imagen)}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <ModalOverlay isOpen={!!selectedImage} onClick={() => setSelectedImage(null)}>
        {selectedImage && (
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedImage(null)}>✕</CloseButton>
            <ModalImage src={selectedImage.imagen || ''} alt={selectedImage.titulo} />
            <ModalInfo>
              <h3>{selectedImage.titulo}</h3>
              {selectedImage.descripcion && <p>{selectedImage.descripcion}</p>}
              <p>
                <strong>Proyecto:</strong> {selectedImage.proyecto}
              </p>
              <p>
                <strong>Fecha:</strong> {new Date(selectedImage.fecha).toLocaleDateString('es-CO')}
              </p>
            </ModalInfo>
          </ModalContent>
        )}
      </ModalOverlay>

      <Footer />
    </>
  );
};

export default GaleriaPage;
