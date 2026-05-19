import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import type { Galeria } from '../../shared/types';

interface GaleriaCardProps {
  galeria: Galeria;
}

const CardWrapper = styled.div`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.neutral};
  border-radius: 8px;
  overflow: hidden;
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

const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  background: ${COLORS.neutral};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: ${TYPOGRAPHY.fontSize.sm};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
`;

const Meta = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.xs};
  color: #999;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: #666;
  line-height: 1.6;
  flex-grow: 1;
`;

const GaleriaCard: React.FC<GaleriaCardProps> = ({ galeria }) => {
  const fecha = new Date(galeria.fecha).toLocaleDateString('es-ES');

  return (
    <CardWrapper>
      <ImageWrapper>{galeria.imagen ? <img src={galeria.imagen} alt={galeria.titulo} /> : 'Sin imagen'}</ImageWrapper>
      <Content>
        <Title>{galeria.titulo}</Title>
        <Meta>
          {galeria.proyecto} • {fecha}
        </Meta>
        <Description>{galeria.descripcion}</Description>
      </Content>
    </CardWrapper>
  );
};

export default GaleriaCard;
