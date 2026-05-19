import React from 'react';
import styled from 'styled-components';
import { COLORS, GROUP_INFO, TYPOGRAPHY } from '../../shared/constants';
import { Container } from '../../shared/utils/styledComponents';

const FooterWrapper = styled.footer`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  padding: 2rem 0;
  margin-top: 6rem;
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  text-align: center;
  font-size: ${TYPOGRAPHY.fontSize.sm};
  opacity: 0.8;

  p {
    margin: 0.5rem 0;
  }
`;

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterBottom>
          <p>© 2026 {GROUP_INFO.nombre}. Todos los derechos reservados.</p>
          <p style={{ fontSize: TYPOGRAPHY.fontSize.xs, opacity: 0.6 }}>
            Diseñado con precisión para la investigación de alto nivel
          </p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
