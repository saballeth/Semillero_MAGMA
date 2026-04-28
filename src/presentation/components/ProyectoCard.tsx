import React from 'react';
import styled from 'styled-components';
import type { Proyecto } from '../../shared/types';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Badge, Flex } from '../../shared/utils/styledComponents';

const CardWrapper = styled.div`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.neutral};
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    border-color: ${COLORS.secondary};
    box-shadow: 0 12px 32px rgba(0, 168, 232, 0.12);
    transform: translateY(-6px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.3);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: ${TYPOGRAPHY.fontSize.lg};
  color: ${COLORS.primary};
  margin-bottom: 0.5rem;
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const Meta = styled(Flex)`
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  font-size: ${TYPOGRAPHY.fontSize.xs};
  color: #888;
`;

const Tags = styled(Flex)`
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const StateIndicator = styled.div<{ estado: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: ${TYPOGRAPHY.fontSize.xs};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  background-color: ${props => {
    switch (props.estado) {
      case 'activo':
        return 'rgba(6, 167, 125, 0.1)';
      case 'finalizado':
        return 'rgba(230, 57, 70, 0.1)';
      default:
        return 'rgba(244, 164, 96, 0.1)';
    }
  }};
  color: ${props => {
    switch (props.estado) {
      case 'activo':
        return COLORS.success;
      case 'finalizado':
        return COLORS.danger;
      default:
        return COLORS.warning;
    }
  }};
`;

interface ProyectoCardProps {
  proyecto: Proyecto;
  onClick?: () => void;
}

export const ProyectoCard: React.FC<ProyectoCardProps> = ({ proyecto, onClick }) => {
  const estadoLabels: { [key: string]: string } = {
    activo: 'Activo',
    finalizado: 'Finalizado',
    planificacion: 'Planificación'
  };

  return (
    <CardWrapper onClick={onClick}>
      <ImageContainer>
        {proyecto.imagen ? (
          <img src={proyecto.imagen} alt={proyecto.titulo} />
        ) : (
          '📊'
        )}
      </ImageContainer>

      <Content>
        <div>
          <Flex justify="space-between" align="center" style={{ marginBottom: '0.5rem' }}>
            <Title>{proyecto.titulo}</Title>
            <StateIndicator estado={proyecto.estado}>
              {estadoLabels[proyecto.estado]}
            </StateIndicator>
          </Flex>

          <Description>{proyecto.descripcion}</Description>

          <Meta>
            <span>🗓️ {new Date(proyecto.fechaInicio).getFullYear()}</span>
            {proyecto.investigadores.length > 0 && (
              <span>👥 {proyecto.investigadores.length} investigadores</span>
            )}
          </Meta>
        </div>

        {proyecto.tags.length > 0 && (
          <Tags>
            {proyecto.tags.map(tag => (
              <Badge key={tag} color={COLORS.secondary}>
                {tag}
              </Badge>
            ))}
          </Tags>
        )}
      </Content>
    </CardWrapper>
  );
};

export default ProyectoCard;
