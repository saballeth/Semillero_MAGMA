import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../shared/constants';
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
    descripcion: 'Convocatoria para estudiantes interesados en participar en proyectos de investigación en bioelectrónica y biotecnología aplicada.',
    fechaInicio: '2026-04-15',
    fechaFin: '2026-05-30',
    requisitos: [
      'Estudiante activo de ingeniería electrónica, biología o carreras afines',
      'Promedio académico mínimo 3.5/5.0',
      'Disponibilidad de 10 horas semanales',
      'Interés demostrado en biotecnología',
      'Haber completado al menos 60% del currículo'
    ],
    estado: 'abierta',
    enlaceFormulario: 'https://forms.example.com/convocatoria-magmabio-2026'
  },
  {
    id: '2',
    titulo: 'Pasantías en Bioelectrónica',
    descripcion: 'Oportunidad de realizar pasantía en universidades aliadas del extranjero para colaborar en investigaciones de vanguardia. Esta es una oportunidad única para expandir tu red académica internacional.',
    fechaInicio: '2026-05-01',
    fechaFin: '2026-06-15',
    requisitos: [
      'Haber participado en el grupo al menos 2 semestres',
      'Nivel de inglés B2 o superior (certificado)',
      'Excelente desempeño académico (promedio > 4.0)',
      'Recomendaciones de dos investigadores del grupo',
      'Capacidad de trabajar en contextos multiculturales'
    ],
    estado: 'proxima'
  },
  {
    id: '3',
    titulo: 'Investigadores Postdoctorales',
    descripcion: 'El grupo busca investigadores con doctorado para incorporarse a los equipos de investigación. Ofrecemos contrataciones de 1-2 años con posibilidad de renovación.',
    fechaInicio: '2026-06-01',
    fechaFin: '2026-07-31',
    requisitos: [
      'Doctorado en Ingeniería Electrónica o área relacionada',
      'Experiencia comprobada en investigación',
      'Publicaciones en revistas indexadas',
      'Capacidad de liderazgo y trabajo colaborativo'
    ],
    estado: 'proxima'
  },
  {
    id: '4',
    titulo: 'Proyectos Colaborativos 2026-2027',
    descripcion: 'Llamado para establecer colaboraciones con otros grupos de investigación. Buscamos fortalecer nuestras alianzas académicas a nivel nacional e internacional.',
    fechaInicio: '2026-07-01',
    fechaFin: '2026-08-15',
    requisitos: [
      'Contar con investigadores interesados',
      'Propuesta de investigación clara',
      'Alineación con líneas del grupo GIRIE',
      'Disponibilidad de recursos'
    ],
    estado: 'cerrada'
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

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(0, 168, 232, 0.1), rgba(0, 201, 255, 0.1));
  border-left: 4px solid ${COLORS.secondary};
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;

  h3 {
    color: ${COLORS.primary};
    margin-bottom: 0.75rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

export const ConvocatoriasPage: React.FC = () => {
  const convocatoriasAbiertas = convocatoriasEjemplo.filter(c => c.estado === 'abierta');
  const convocatoriasProximas = convocatoriasEjemplo.filter(c => c.estado === 'proxima');

  return (
    <>
      <Header activeRoute="/convocatorias" />
      
      <Hero
        title="Oportunidades en MagmaBio"
        subtitle="Únete a nuestro semillero de investigación en biotecnología"
      />

      {convocatoriasAbiertas.length > 0 && (
        <Section style={{ background: COLORS.neutral }}>
          <Container>
            <SectionTitle>Convocatorias Abiertas</SectionTitle>
            <SectionSubtitle>
              Estas convocatorias están activas en este momento. ¡No pierdas la oportunidad!
            </SectionSubtitle>
            
            <Grid columns={2}>
              {convocatoriasAbiertas.map(convocatoria => (
                <ConvocatoriaCard 
                  key={convocatoria.id} 
                  convocatoria={convocatoria}
                />
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      {convocatoriasProximas.length > 0 && (
        <Section>
          <Container>
            <SectionTitle>Convocatorias Próximas</SectionTitle>
            <SectionSubtitle>
              Prepárate para estas oportunidades que estarán disponibles muy pronto
            </SectionSubtitle>
            
            <Grid columns={2}>
              {convocatoriasProximas.map(convocatoria => (
                <ConvocatoriaCard 
                  key={convocatoria.id} 
                  convocatoria={convocatoria}
                />
              ))}
            </Grid>
          </Container>
        </Section>
      )}

      <Section style={{ background: COLORS.neutral }}>
        <Container>
          <SectionTitle>Preguntas Frecuentes</SectionTitle>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                q: '¿Cuál es el proceso de selección?',
                a: 'El proceso incluye: revisión de solicitud, entrevista técnica, y conversación con investigadores del grupo. Típicamente dura 2-3 semanas.'
              },
              {
                q: '¿Puedo participar si estoy en otra institución?',
                a: 'Sí, aceptamos colaboraciones remotas y presenciales. Contacta al coordinador del grupo para más detalles.'
              },
              {
                q: '¿Qué beneficios tiene ser semillerista?',
                a: 'Acceso a recursos de investigación, publicaciones, capacitación, y oportunidades de colaboración internacional.'
              },
            ].map((item, idx) => (
              <HighlightBox key={idx}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </HighlightBox>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
};

export default ConvocatoriasPage;
