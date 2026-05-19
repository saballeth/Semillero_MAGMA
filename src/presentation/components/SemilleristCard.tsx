import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import type { Semillerista } from '../../shared/types';

interface SemilleristCardProps {
  semillerista: Semillerista;
}

const CardWrapper = styled.div`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.neutral};
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    border-color: ${COLORS.secondary};
    box-shadow: 0 12px 32px rgba(0, 168, 232, 0.12);
    transform: translateY(-4px);
  }
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: ${COLORS.white};
  font-size: 2rem;
  font-weight: bold;
`;

const Name = styled.h3`
  font-size: ${TYPOGRAPHY.fontSize.lg};
  color: ${COLORS.primary};
  margin-bottom: 0.25rem;
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
`;

const LineaAct = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: ${COLORS.secondary};
  margin-bottom: 0.75rem;
  font-weight: ${TYPOGRAPHY.fontWeight.medium};
`;

const Email = styled.p`
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
      case 'inactivo':
        return '#ef4444';
      default:
        return COLORS.secondary;
    }
  }};
  color: white;
  font-size: ${TYPOGRAPHY.fontSize.xs};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: ${COLORS.secondary};
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.primary};
  }
`;

const SemilleristCard: React.FC<SemilleristCardProps> = ({ semillerista }) => {
  const initials = `${semillerista.nombre[0]}${semillerista.apellido[0]}`.toUpperCase();

  return (
    <CardWrapper>
      <Avatar>{initials}</Avatar>
      <Name>
        {semillerista.nombre} {semillerista.apellido}
      </Name>
      <LineaAct>{semillerista.linea}</LineaAct>
      <Email>{semillerista.email}</Email>
      <Badge estado={semillerista.estado}>{semillerista.estado}</Badge>

      {semillerista.redesSociales && Object.keys(semillerista.redesSociales).length > 0 && (
        <SocialLinks>
          {semillerista.redesSociales.github && (
            <SocialLink href={semillerista.redesSociales.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </SocialLink>
          )}
          {semillerista.redesSociales.linkedin && (
            <SocialLink href={semillerista.redesSociales.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </SocialLink>
          )}
          {semillerista.redesSociales.twitter && (
            <SocialLink href={semillerista.redesSociales.twitter} target="_blank" rel="noopener noreferrer">
              Twitter
            </SocialLink>
          )}
        </SocialLinks>
      )}
    </CardWrapper>
  );
};

export default SemilleristCard;
