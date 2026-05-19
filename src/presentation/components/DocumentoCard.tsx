import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import type { Documento } from '../../shared/types';

interface DocumentoCardProps {
  documento: Documento;
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

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.white};
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Title = styled.h3`
  font-size: ${TYPOGRAPHY.fontSize.lg};
  color: ${COLORS.primary};
  margin-bottom: 0.5rem;
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
`;

const Meta = styled.div`
  font-size: ${TYPOGRAPHY.fontSize.xs};
  color: #999;
  margin-bottom: 1rem;
`;

const TypeBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  background: ${COLORS.secondary}20;
  color: ${COLORS.secondary};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  font-size: ${TYPOGRAPHY.fontSize.xs};
  margin-right: 0.5rem;
`;

const Description = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
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

const DocumentoCard: React.FC<DocumentoCardProps> = ({ documento }) => {
  const fecha = new Date(documento.fecha).toLocaleDateString('es-ES');

  const getTipoIcon = (tipo: string) => {
    switch (tipo) {
      case 'paper':
        return '📄';
      case 'tesis':
        return '🎓';
      case 'informe':
        return '📊';
      case 'presentacion':
        return '🎤';
      default:
        return '📄';
    }
  };

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case 'paper':
        return 'Paper';
      case 'tesis':
        return 'Tesis';
      case 'informe':
        return 'Informe';
      case 'presentacion':
        return 'Presentación';
      default:
        return tipo;
    }
  };

  return (
    <CardWrapper>
      <Icon>{getTipoIcon(documento.tipo)}</Icon>
      <Title>{documento.titulo}</Title>
      <Meta>
        <TypeBadge>{getTipoLabel(documento.tipo)}</TypeBadge>
        <div>{documento.autor} • {fecha}</div>
      </Meta>
      <Description>{documento.resumen}</Description>
      <Link href={documento.enlace} target="_blank" rel="noopener noreferrer">
        Acceder al documento →
      </Link>
    </CardWrapper>
  );
};

export default DocumentoCard;
