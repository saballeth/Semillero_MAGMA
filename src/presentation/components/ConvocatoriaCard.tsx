import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import type { Convocatoria } from '../../shared/types';

interface ConvocatoriaCardProps {
  convocatoria: Convocatoria;
}

const CardWrapper = styled.div`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.neutral};
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${COLORS.secondary};
    box-shadow: 0 12px 32px rgba(0, 168, 232, 0.12);
    transform: translateY(-4px);
  }
`;

const Title = styled.h3`
  font-size: ${TYPOGRAPHY.fontSize.lg};
  color: ${COLORS.primary};
  margin-bottom: 0.75rem;
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
`;

const Description = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const DateRange = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.xs};
  color: #999;
  margin-bottom: 1rem;
`;

const Badge = styled.span<{ estado: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  background: ${props => {
    switch (props.estado) {
      case 'abierta':
        return '#10b981';
      case 'proxima':
        return '#f59e0b';
      case 'cerrada':
        return '#ef4444';
      default:
        return COLORS.secondary;
    }
  }};
  color: white;
  margin-bottom: 1rem;
  display: block;
  width: fit-content;
`;

const Link = styled.a`
  color: ${COLORS.secondary};
  text-decoration: none;
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.primary};
    text-decoration: underline;
  }
`;

const ConvocatoriaCard: React.FC<ConvocatoriaCardProps> = ({ convocatoria }) => {
  const fechaInicio = new Date(convocatoria.fechaInicio).toLocaleDateString('es-ES');
  const fechaFin = new Date(convocatoria.fechaFin).toLocaleDateString('es-ES');

  return (
    <CardWrapper>
      <Title>{convocatoria.titulo}</Title>
      <Description>{convocatoria.descripcion}</Description>
      <DateRange>
        Del {fechaInicio} al {fechaFin}
      </DateRange>
      <Badge estado={convocatoria.estado}>{convocatoria.estado}</Badge>
      <Link href={convocatoria.enlaceFormulario} target="_blank" rel="noopener noreferrer">
        Ir al formulario →
      </Link>
    </CardWrapper>
  );
};

export default ConvocatoriaCard;
