import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Section, Container, Grid } from '../../shared/utils/styledComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import GaleriaCard from '../components/GaleriaCard';
import type { Galeria } from '../../shared/types';

const galeriaEjemplo: Galeria[] = [
  {
    id: '1',
    titulo: 'Presentación de Proyectos 2026',
    imagen: '',
    proyecto: 'Biosensores Electrónicos',
    fecha: '2026-02-15',
    descripcion: 'Presentación de avances en desarrollo de biosensores'
  },
  {
    id: '2',
    titulo: 'Seminario de Bioelectrónica',
    imagen: '',
    proyecto: 'Interfaz Cerebro-Computadora',
    fecha: '2026-01-20',
    descripcion: 'Seminario sobre últimas tendencias en interfaces neurales'
  },
  {
    id: '3',
    titulo: 'Visita del Grupo GIRIE',
    imagen: '',
    proyecto: 'Colaboración Intergrupal',
    fecha: '2025-12-10',
    descripcion: 'Intercambio académico con investigadores del grupo GIRIE'
  },
  {
    id: '4',
    titulo: 'Demostración de Implantes',
    imagen: '',
    proyecto: 'Implantes Biocompatibles',
    fecha: '2025-11-25',
    descripcion: 'Presentación de prototipos de implantes biocompatibles'
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
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const GaleriaPage = () => {
  return (
    <>
      <Header />
      <Hero title="Galería" subtitle="Documenta de los eventos y actividades del Semillero MagmaBio" />

      <Section>
        <Container>
          <SectionTitle>Eventos y Actividades</SectionTitle>
          <SectionSubtitle>Revisa el registro fotográfico y documental de nuestras actividades académicas</SectionSubtitle>

          <Grid columns={3}>
            {galeriaEjemplo.map(galeria => (
              <GaleriaCard key={galeria.id} galeria={galeria} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default GaleriaPage;
