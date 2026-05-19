import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../shared/constants';
import { Section, Container, Grid } from '../../shared/utils/styledComponents';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProyectoCard from '../components/ProyectoCard';
import ConvocatoriaCard from '../components/ConvocatoriaCard';
import SemilleristCard from '../components/SemilleristCard';
import type { Proyecto, Convocatoria, Semillerista } from '../../shared/types';

// Datos de ejemplo
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
    titulo: 'Implantes Biocompatibles',
    descripcion: 'Desarrollo de implantes electrónicos con materiales biocompatibles para aplicaciones médicas.',
    imagen: '',
    estado: 'finalizado',
    investigadores: ['Dr. Roberto Díaz'],
    tags: ['Implantes', 'Biocompatibilidad', 'Medtech'],
    fechaInicio: '2022-03-10',
    fechaFin: '2024-03-10',
  },
  {
    id: '4',
    titulo: 'Grupo Magma - Gestión y Organización',
    descripcion: 'Proyecto de organización interna del Semillero MagmaBio. Incluye roles, responsabilidades y mejoras continuas del grupo.',
    imagen: '',
    estado: 'activo',
    investigadores: ['Elimelec', 'Mafe', 'Camilo', 'Juan Carlos', 'Juan de Lima', 'Albert'],
    tags: ['Gestión', 'Organización', 'Administración'],
    fechaInicio: '2026-01-01',
  },
];

const convocatoriasEjemplo: Convocatoria[] = [
  {
    id: '1',
    titulo: 'Semilleristas MagmaBio 2026 - Biotecnología',
    descripcion: 'Convocatoria para estudiantes interesados en participar en proyectos de investigación en bioelectrónica y biotecnología.',
    fechaInicio: '2026-04-15',
    fechaFin: '2026-05-30',
    requisitos: [
      'Estudiante activo de ingeniería electrónica, biología o afines',
      'Promedio académico mínimo 3.5',
      'Disponibilidad de 10 horas semanales',
      'Interés demostrado en biotecnología'
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
    estado: 'proxima'
  },
];

const semilleristasEjemplo: Semillerista[] = [
  {
    id: '1',
    nombre: 'Laura',
    apellido: 'Pérez González',
    email: 'laura.perez@unal.edu.co',
    foto: '',
    linea: 'Biosensores y Bioelectrónica',
    estado: 'activo',
    redesSociales: {
      github: 'https://github.com/saballeth',
      linkedin: 'https://www.linkedin.com/in/camilo-saballeth/'
    }
  },
  {
    id: '2',
    nombre: 'Daniel',
    apellido: 'Rodríguez López',
    email: 'daniel.rodriguez@unal.edu.co',
    foto: '',
    linea: 'Interfaz Cerebro-Computadora',
    estado: 'activo',
    redesSociales: {
      github: 'https://github.com/saballeth'
    }
  },
  {
    id: '3',
    nombre: 'Camila',
    apellido: 'Salazar Martínez',
    email: 'camila.salazar@unal.edu.co',
    foto: '',
    linea: 'Implantes Biocompatibles',
    estado: 'activo'
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

const StatsContainer = styled(Grid)`
  margin-bottom: 4rem;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatBox = styled.div`
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
  color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(10, 59, 94, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
  font-weight: 500;
`;

export const HomePage: React.FC = () => {
  return (
    <>
      <Header activeRoute="/" />
      
      <Hero
        title="Semillero MagmaBio"
        subtitle="Investigación de vanguardia en biotecnología e ingeniería electrónica para soluciones biomédicas innovadoras"
        primaryButtonText="Ver Proyectos"
        primaryButtonHref="proyectos"
        secondaryButtonText="Convocatorias Activas"
        secondaryButtonHref="convocatorias"
      />

      <Section>
        <Container>
          <StatsContainer>
            <StatBox>
              <StatNumber>2+</StatNumber>
              <StatLabel>Proyectos Activos</StatLabel>
            </StatBox>
            <StatBox>
              <StatNumber>25+</StatNumber>
              <StatLabel>Semilleristas</StatLabel>
            </StatBox>
            <StatBox>
              <StatNumber>15+</StatNumber>
              <StatLabel>Publicaciones</StatLabel>
            </StatBox>
            <StatBox>
              <StatNumber>3</StatNumber>
              <StatLabel>Líneas de Investigación</StatLabel>
            </StatBox>
          </StatsContainer>
        </Container>
      </Section>

      <Section style={{ background: COLORS.neutral }}>
        <Container>
          <SectionTitle>Proyectos de Investigación</SectionTitle>
          <SectionSubtitle>
            Iniciativas de investigación en tecnologías de vanguardia
          </SectionSubtitle>
          
          <Grid columns={3}>
            {proyectosEjemplo.map(proyecto => (
              <ProyectoCard 
                key={proyecto.id} 
                proyecto={proyecto}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>Oportunidades en MagmaBio</SectionTitle>
          <SectionSubtitle>
            Únete a nuestro semillero y desarrolla investigación en biotecnología
          </SectionSubtitle>
          
          <Grid columns={2}>
            {convocatoriasEjemplo.map(convocatoria => (
              <ConvocatoriaCard 
                key={convocatoria.id} 
                convocatoria={convocatoria}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section style={{ background: COLORS.neutral }}>
        <Container>
          <SectionTitle>Nuestros Semilleristas</SectionTitle>
          <SectionSubtitle>
            Investigadores dedicados a la innovación en bioelectrónica
          </SectionSubtitle>
          
          <Grid columns={3}>
            {semilleristasEjemplo.map(semillerista => (
              <SemilleristCard 
                key={semillerista.id} 
                semillerista={semillerista}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle>¿Por qué unirse al Semillero?</SectionTitle>
          <SectionSubtitle>Desarrolla tu carrera en investigación de alto nivel</SectionSubtitle>
          
          <Grid columns={3}>
            {[
              { icon: '🔬', titulo: 'Investigación Rigurosa', desc: 'Trabaja con metodologías científicas de vanguardia' },
              { icon: '🤝', titulo: 'Comunidad Vibrante', desc: 'Colabora con expertos y estudiantes apasionados' },
              { icon: '🌍', titulo: 'Impacto Global', desc: 'Publica en revistas internacionales de alto nivel' },
            ].map((item, idx) => (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
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

export default HomePage;
