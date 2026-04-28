import React from 'react';
import styled from 'styled-components';
import type { Galeria } from '../../shared/types';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';

const CardWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;
  group: 'image';
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(10, 59, 94, 0.8), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${CardWrapper}:hover & {
    opacity: 1;
  }
`;

const OverlayTitle = styled.h4`
  color: ${COLORS.white};
  font-size: ${TYPOGRAPHY.fontSize.lg};
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

const OverlayDesc = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: ${TYPOGRAPHY.fontSize.sm};
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const OverlayDate = styled.span`
  color: ${COLORS.accent};
  font-size: ${TYPOGRAPHY.fontSize.xs};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
`;

interface GaleriaCardProps {
  imagen: Galeria;
  onClick?: () => void;
}

export const GaleriaCard: React.FC<GaleriaCardProps> = ({ imagen, onClick }) => {
  return (
    <CardWrapper onClick={onClick}>
      <ImageContainer>
        {imagen.imagen ? (
          <img src={imagen.imagen} alt={imagen.titulo} />
        ) : (
          <div style={{ fontSize: '3rem', textAlign: 'center' }}>📸</div>
        )}
        <Overlay>
          <OverlayTitle>{imagen.titulo}</OverlayTitle>
          {imagen.descripcion && <OverlayDesc>{imagen.descripcion}</OverlayDesc>}
          <OverlayDate>
            {new Date(imagen.fecha).toLocaleDateString('es-CO')}
          </OverlayDate>
        </Overlay>
      </ImageContainer>
    </CardWrapper>
  );
};

export default GaleriaCard;
