import React from 'react';
import styled from 'styled-components';
import type { Convocatoria } from '../../shared/types';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Button, Flex } from '../../shared/utils/styledComponents';

const CardWrapper = styled.div`
  background: ${COLORS.white};
  border: 2px solid ${COLORS.neutral};
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, ${COLORS.secondary}, ${COLORS.accent});
  }

  &:hover {
    border-color: ${COLORS.secondary};
    box-shadow: 0 12px 32px rgba(0, 168, 232, 0.12);
    transform: translateY(-4px);
  }
`;

const Header = styled.div`
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  font-size: ${TYPOGRAPHY.fontSize['2xl']};
  color: ${COLORS.primary};
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

const StateIndicator = styled.span<{ estado: string }>`
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: ${TYPOGRAPHY.fontSize.sm};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  background-color: ${props => {
    switch (props.estado) {
      case 'abierta':
        return COLORS.success;
      case 'proxima':
        return COLORS.warning;
      default:
        return '#ccc';
    }
  }};
  color: ${COLORS.white};
`;

const Dates = styled(Flex)`
  gap: 2rem;
  margin: 1rem 0;
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: #666;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Description = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.base};
  color: #333;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const RequisitosList = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;

  li {
    font-size: ${TYPOGRAPHY.fontSize.sm};
    color: #666;
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;

    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: ${COLORS.success};
      font-weight: ${TYPOGRAPHY.fontWeight.bold};
    }
  }
`;

const Footer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid ${COLORS.neutral};

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

interface ConvocatoriaCardProps {
  convocatoria: Convocatoria;
  onInscribirse?: () => void;
}

export const ConvocatoriaCard: React.FC<ConvocatoriaCardProps> = ({ 
  convocatoria, 
  onInscribirse 
}) => {
  const estadoLabels: { [key: string]: string } = {
    abierta: 'Convocatoria Abierta',
    cerrada: 'Convocatoria Cerrada',
    proxima: 'Próximamente'
  };

  const diasRestantes = Math.ceil(
    (new Date(convocatoria.fechaFin).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <CardWrapper>
      <Header>
        <Flex justify="space-between" align="flex-start" style={{ marginBottom: '0.5rem' }}>
          <Title>{convocatoria.titulo}</Title>
          <StateIndicator estado={convocatoria.estado}>
            {estadoLabels[convocatoria.estado]}
          </StateIndicator>
        </Flex>
      </Header>

      <Dates>
        <div>
          📅 Inicio: {new Date(convocatoria.fechaInicio).toLocaleDateString('es-CO')}
        </div>
        <div>
          ⏳ Cierre: {new Date(convocatoria.fechaFin).toLocaleDateString('es-CO')}
          {convocatoria.estado === 'abierta' && diasRestantes > 0 && (
            <span style={{ color: COLORS.warning, marginLeft: '0.5rem' }}>
              ({diasRestantes} días)
            </span>
          )}
        </div>
      </Dates>

      <Description>{convocatoria.descripcion}</Description>

      {convocatoria.requisitos.length > 0 && (
        <div>
          <p style={{ fontSize: TYPOGRAPHY.fontSize.sm, fontWeight: TYPOGRAPHY.fontWeight.semibold, marginBottom: '0.75rem' }}>
            Requisitos:
          </p>
          <RequisitosList>
            {convocatoria.requisitos.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </RequisitosList>
        </div>
      )}

      <Footer>
        <div>
          {convocatoria.estado === 'abierta' && (
            <span style={{ fontSize: TYPOGRAPHY.fontSize.sm, color: COLORS.success, fontWeight: TYPOGRAPHY.fontWeight.semibold }}>
              ✓ Abierta para inscripciones
            </span>
          )}
        </div>
        {convocatoria.enlaceFormulario && convocatoria.estado === 'abierta' && (
          <Button 
            variant="secondary" 
            size="md"
            onClick={onInscribirse}
            as="a"
            href={convocatoria.enlaceFormulario}
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscribirse Ahora
          </Button>
        )}
      </Footer>
    </CardWrapper>
  );
};

export default ConvocatoriaCard;
