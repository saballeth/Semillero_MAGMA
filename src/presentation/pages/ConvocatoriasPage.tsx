import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Section, Container, Grid } from '../../shared/utils/styledComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ConvocatoriaCard from '../components/ConvocatoriaCard';
import type { Convocatoria } from '../../shared/types';

const convocatoriasEjemplo: Convocatoria[] = [
  {
    id: '1',
    titulo: 'Semilleristas MagmaBio 2026 - Biotecnología',
    descripcion: 'Convocatoria para estudiantes interesados en participar en proyectos de investigación en bioelectrónica.',
    fechaInicio: '2026-04-15',
    fechaFin: '2026-05-30',
    requisitos: [
      'Estudiante activo de ingeniería electrónica, biología o afines',
      'Promedio académico mínimo 3.5',
      'Disponibilidad de 10 horas semanales'
    ],
    estado: 'abierta',
    enlaceFormulario: 'https://forms.example.com/convocatoria-2026'
  },
  {
    id: '2',
    titulo: 'Pasantías en Bioelectrónica',
    descripcion: 'Oportunidad de realizar pasantías en investigación aplicada de bioelectrónica.',
    fechaInicio: '2026-05-01',
    fechaFin: '2026-06-15',
    requisitos: [
      'Formación en electrónica o biología',
      'Proyecto de investigación definido',
      'Excelente desempeño académico'
    ],
    estado: 'proxima',
    enlaceFormulario: 'https://forms.example.com/pasantias-bioelectronica'
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

const ConvocatoriasPage = () => {
  return (
    <>
      <Header />
      <Hero title="Convocatorias" subtitle="Únete a nuestros proyectos de investigación en bioelectrónica" />

      <Section>
        <Container>
          <SectionTitle>Oportunidades Disponibles</SectionTitle>
          <SectionSubtitle>Explora las convocatorias activas y próximas para participar en nuestras líneas de investigación</SectionSubtitle>

          <Grid columns={2}>
            {convocatoriasEjemplo.map(convocatoria => (
              <ConvocatoriaCard key={convocatoria.id} convocatoria={convocatoria} />
            ))}
          </Grid>
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default ConvocatoriasPage;
