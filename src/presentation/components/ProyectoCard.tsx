import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import type { Proyecto } from '../../shared/types';

interface ProyectoCardProps {
  proyecto: Proyecto;
  onClick?: () => void;
}

const CardWrapper = styled.div`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.neutral};
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: ${props => (props as any).onClick ? 'pointer' : 'default'};
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

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      case 'activo':
        return '#10b981';
      case 'finalizado':
        return '#9ca3af';
      case 'planificacion':
        return '#f59e0b';
      default:
        return COLORS.secondary;
    }
  }};
  color: white;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: ${COLORS.neutral};
  color: ${COLORS.primary};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: ${TYPOGRAPHY.fontSize.xs};
  font-weight: ${TYPOGRAPHY.fontWeight.medium};
`;

const ProyectoCard: React.FC<ProyectoCardProps> = ({ proyecto, onClick }) => {
  return (
    <CardWrapper onClick={onClick}>
      <Title>{proyecto.titulo}</Title>
      <Description>{proyecto.descripcion}</Description>
      <Meta>
        <span>{proyecto.investigadores?.length || 0} investigadores</span>
        <Badge estado={proyecto.estado}>{proyecto.estado}</Badge>
      </Meta>
      {proyecto.tags && proyecto.tags.length > 0 && (
        <TagList>
          {proyecto.tags.map((tag, idx) => (
            <Tag key={idx}>{tag}</Tag>
          ))}
        </TagList>
      )}
    </CardWrapper>
  );
};

export default ProyectoCard;
