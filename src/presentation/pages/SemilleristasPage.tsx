import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Section, Container, Grid, Flex } from '../../shared/utils/styledComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SemilleristCard from '../components/SemilleristCard';
import type { Semillerista } from '../../shared/types';

const semilleristasEjemplo: Semillerista[] = [
  {
    id: '1',
    nombre: 'Camilo',
    apellido: 'Firulaiz González',
    email: 'laura.perez@unal.edu.co',
    foto: '',
    linea: 'Biosensores y Bioelectrónica',
    estado: 'activo',
    redesSociales: {
      github: 'https://github.com/lauraaperez',
      linkedin: 'https://linkedin.com/in/lauraperez'
    }
  },
  {
    id: '2',
    nombre: 'Firulaiz',
    apellido: 'Segundo López',
    email: 'daniel.rodriguez@unal.edu.co',
    foto: '',
    linea: 'Interfaz Cerebro-Computadora',
    estado: 'activo',
    redesSociales: {
      github: 'https://github.com/drodriguezl'
    }
  },
  {
    id: '3',
    nombre: 'Camila',
    apellido: 'Segundo Martínez',
    email: 'camila.salazar@unal.edu.co',
    foto: '',
    linea: 'Sistemas Embebidos',
    estado: 'activo'
  },
  {
    id: '4',
    nombre: 'Andrés',
    apellido: 'García Restrepo',
    email: 'andres.garcia@unal.edu.co',
    foto: '',
    linea: 'Visión Artificial y IA',
    estado: 'activo',
    redesSociales: {
      github: 'https://github.com/agarciares'
    }
  },
  {
    id: '5',
    nombre: 'Sofia',
    apellido: 'López Martínez',
    email: 'sofia.lopez@unal.edu.co',
    foto: '',
    linea: 'IoT y Redes Inalámbricas',
    estado: 'activo',
    redesSociales: {
      linkedin: 'https://linkedin.com/in/sofialopez'
    }
  },
  {
    id: '6',
    nombre: 'Felipe',
    apellido: 'Moreno Torres',
    email: 'felipe.moreno@unal.edu.co',
    foto: '',
    linea: 'Procesamiento Digital de Señales',
    estado: 'activo'
  },
];

const SectionTitle = styled.h2`
  text-align: center;
  color: ${COLORS.primary};
  margin-bottom: 0.5rem;
`;

const LineaTag = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${COLORS.neutral};
  color: ${COLORS.primary};
  border-radius: 20px;
  font-size: ${TYPOGRAPHY.fontSize.sm};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  margin: 0.25rem;
`;

const LineaStats = styled.div`
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
  color: ${COLORS.white};
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 3rem;
  text-align: center;
`;

export const SemilleristasPage: React.FC = () => {
  const [filtroLinea, setFiltroLinea] = useState<string>('todos');

  const lineas = Array.from(new Set(semilleristasEjemplo.map(s => s.linea)));
  
  const semilleristsFiltrados = filtroLinea === 'todos'
    ? semilleristasEjemplo
    : semilleristasEjemplo.filter(s => s.linea === filtroLinea);

  return (
    <>
      <Header activeRoute="/semilleristas" />
      
      <Hero
        title="Semilleristas de MagmaBio"
        subtitle="Investigadores dedicados a la innovación en bioelectrónica"
      />

      <Section>
        <Container>
          <LineaStats>
            <h3 style={{ fontSize: TYPOGRAPHY.fontSize['2xl'], marginBottom: '0.5rem' }}>
              {semilleristasEjemplo.length} Semilleristas Activos
            </h3>
            <p>Distribuidos en {lineas.length} líneas de investigación</p>
          </LineaStats>

          <SectionTitle>Filtrar por Línea de Investigación</SectionTitle>
          <Flex justify="center" style={{ flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
            <LineaTag 
              style={{ 
                cursor: 'pointer',
                backgroundColor: filtroLinea === 'todos' ? COLORS.secondary : COLORS.neutral,
                color: filtroLinea === 'todos' ? COLORS.white : COLORS.primary
              }}
              onClick={() => setFiltroLinea('todos')}
            >
              Todos ({semilleristasEjemplo.length})
            </LineaTag>
            {lineas.map(linea => (
              <LineaTag 
                key={linea}
                style={{ 
                  cursor: 'pointer',
                  backgroundColor: filtroLinea === linea ? COLORS.secondary : COLORS.neutral,
                  color: filtroLinea === linea ? COLORS.white : COLORS.primary
                }}
                onClick={() => setFiltroLinea(linea)}
              >
                {linea} ({semilleristasEjemplo.filter(s => s.linea === linea).length})
              </LineaTag>
            ))}
          </Flex>

          <Grid columns={3}>
            {semilleristsFiltrados.map(semillerista => (
              <SemilleristCard 
                key={semillerista.id} 
                semillerista={semillerista}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default SemilleristasPage;
