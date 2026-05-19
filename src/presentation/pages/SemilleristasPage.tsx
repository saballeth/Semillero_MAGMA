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
    nombre: 'María Fernanda',
    apellido: 'Mafe',
    email: 'maria.fernanda@unal.edu.co',
    foto: '',
    linea: 'Gestión de Reuniones e Información',
    estado: 'activo'
  },
  {
    id: '2',
    nombre: 'Juan',
    apellido: 'Orozco',
    email: 'juan.orozco@unal.edu.co',
    foto: '',
    linea: 'Interfaz Cerebro-Computadora',
    estado: 'activo'
  },
  {
    id: '3',
    nombre: 'Juan D',
    apellido: 'Lima',
    email: 'juan.lima@unal.edu.co',
    foto: '',
    linea: 'Apoyo General',
    estado: 'activo'
  },
  {
    id: '4',
    nombre: 'Elimelec',
    apellido: 'José Ricardo',
    email: 'elimelec.jose@unal.edu.co',
    foto: '',
    linea: 'Coordinación Técnica y Semilleristas',
    estado: 'activo'
  },
  {
    id: '5',
    nombre: 'Caleth',
    apellido: 'Godoy Taborda',
    email: 'caleth.godoy@unal.edu.co',
    foto: '',
    linea: 'Procesamiento de Señales',
    estado: 'activo'
  },
  {
    id: '6',
    nombre: 'Albert',
    apellido: 'Rios',
    email: 'albert.rios@unal.edu.co',
    foto: '',
    linea: 'Gestión de Información y Documentación',
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
