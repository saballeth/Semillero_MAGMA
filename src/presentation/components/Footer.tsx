import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';

const FooterWrapper = styled.footer`
  background: ${COLORS.primary};
  color: ${COLORS.white};
  padding: 2rem 0;
  margin-top: 6rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: ${TYPOGRAPHY.fontSize.sm};
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterBottom>
          <p>© 2026 Semillero MagmaBio. Todos los derechos reservados.</p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
