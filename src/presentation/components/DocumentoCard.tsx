import React from 'react';
import styled from 'styled-components';
import type { Documento } from '../../shared/types';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Badge, Flex } from '../../shared/utils/styledComponents';

const Title = styled.h4`
  font-size: ${TYPOGRAPHY.fontSize.lg};
  color: ${COLORS.primary};
  margin-bottom: 0.5rem;
  line-height: 1.3;
  transition: color 0.3s ease;
`;

const CardWrapper = styled.a`
  display: block;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.neutral};
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: ${COLORS.secondary};
    box-shadow: 0 12px 32px rgba(0, 168, 232, 0.12);
    transform: translateY(-4px);

    ${Title} {
      color: ${COLORS.secondary};
    }
  }
`;

const Header = styled(Flex)`
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary});
  color: ${COLORS.white};
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const Autor = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: #666;
  margin-bottom: 0.75rem;
`;

const Resumen = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Footer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid ${COLORS.neutral};
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Fecha = styled.span`
  font-size: ${TYPOGRAPHY.fontSize.xs};
  color: #999;
`;

interface DocumentoCardProps {
  documento: Documento;
}

export const DocumentoCard: React.FC<DocumentoCardProps> = ({ documento }) => {
  const tipoIcons: { [key: string]: string } = {
    paper: '📄',
    tesis: '🎓',
    informe: '📊',
    presentacion: '🎯'
  };

  const tipoLabels: { [key: string]: string } = {
    paper: 'Paper',
    tesis: 'Tesis',
    informe: 'Informe',
    presentacion: 'Presentación'
  };

  return (
    <CardWrapper href={documento.enlace} target="_blank" rel="noopener noreferrer">
      <Header>
        <IconBox>{tipoIcons[documento.tipo]}</IconBox>
        <div style={{ flex: 1 }}>
          <Title>{documento.titulo}</Title>
          <Autor>Por {documento.autor}</Autor>
        </div>
      </Header>

      {documento.resumen && <Resumen>{documento.resumen}</Resumen>}

      <Footer>
        <Flex gap="0.5rem" style={{ flex: 1, flexWrap: 'wrap' }}>
          <Badge color={COLORS.secondary}>{tipoLabels[documento.tipo]}</Badge>
          {documento.proyecto && (
            <Badge color={COLORS.accent}>{documento.proyecto}</Badge>
          )}
        </Flex>
        <Fecha>{new Date(documento.fecha).getFullYear()}</Fecha>
      </Footer>
    </CardWrapper>
  );
};

export default DocumentoCard;
