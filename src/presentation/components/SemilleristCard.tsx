import React from 'react';
import styled from 'styled-components';
import type { Semillerista } from '../../shared/types';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Flex } from '../../shared/utils/styledComponents';

const CardWrapper = styled.div`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.neutral};
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    border-color: ${COLORS.secondary};
    box-shadow: 0 12px 32px rgba(0, 168, 232, 0.12);
    transform: translateY(-6px);

    img {
      transform: scale(1.08);
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Name = styled.h3`
  font-size: ${TYPOGRAPHY.fontSize.lg};
  color: ${COLORS.primary};
  margin-bottom: 0.25rem;
`;

const Linea = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: ${COLORS.secondary};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  margin-bottom: 0.75rem;
`;

const Email = styled.a`
  display: block;
  font-size: ${TYPOGRAPHY.fontSize.xs};
  color: #666;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.secondary};
  }
`;

const StatusBadge = styled.span<{ estado: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: ${TYPOGRAPHY.fontSize.xs};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  background-color: ${props => props.estado === 'activo' ? 'rgba(6, 167, 125, 0.1)' : 'rgba(200, 200, 200, 0.1)'};
  color: ${props => props.estado === 'activo' ? COLORS.success : '#999'};
  margin-bottom: 1rem;
`;

const SocialLinks = styled(Flex)`
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: ${COLORS.neutral};
    border-radius: 50%;
    color: ${COLORS.primary};
    font-size: 0.9rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${COLORS.secondary};
      color: ${COLORS.white};
    }
  }
`;

interface SemilleristCardProps {
  semillerista: Semillerista;
}

export const SemilleristCard: React.FC<SemilleristCardProps> = ({ semillerista }) => {
  return (
    <CardWrapper>
      <ImageContainer>
        {semillerista.foto ? (
          <img src={semillerista.foto} alt={`${semillerista.nombre} ${semillerista.apellido}`} />
        ) : (
          <div style={{ fontSize: '3rem' }}>👤</div>
        )}
      </ImageContainer>

      <Content>
        <Name>{semillerista.nombre} {semillerista.apellido}</Name>
        <Linea>{semillerista.linea}</Linea>
        <StatusBadge estado={semillerista.estado}>
          {semillerista.estado === 'activo' ? '✓ Activo' : 'Inactivo'}
        </StatusBadge>
        
        <Email href={`mailto:${semillerista.email}`}>
          {semillerista.email}
        </Email>

        {semillerista.redesSociales && (
          <SocialLinks>
            {semillerista.redesSociales.github && (
              <a 
                href={semillerista.redesSociales.github} 
                target="_blank" 
                rel="noopener noreferrer"
                title="GitHub"
              >
                GH
              </a>
            )}
            {semillerista.redesSociales.linkedin && (
              <a 
                href={semillerista.redesSociales.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                in
              </a>
            )}
          </SocialLinks>
        )}
      </Content>
    </CardWrapper>
  );
};

export default SemilleristCard;
