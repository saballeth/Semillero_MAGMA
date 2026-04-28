import React from 'react';
import styled from 'styled-components';
import { COLORS, GROUP_INFO, TYPOGRAPHY } from '../../shared/constants';
import { Container, Flex, Grid } from '../../shared/utils/styledComponents';

const FooterWrapper = styled.footer`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  padding: 4rem 0 2rem;
  margin-top: 6rem;
`;

const FooterContent = styled(Grid)`
  margin-bottom: 3rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h4 {
    color: ${COLORS.accent};
    margin-bottom: 1rem;
    font-size: ${TYPOGRAPHY.fontSize.lg};
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 0.75rem;
      font-size: ${TYPOGRAPHY.fontSize.sm};

      a {
        color: ${COLORS.white};
        opacity: 0.8;
        transition: opacity 0.3s ease;

        &:hover {
          opacity: 1;
          color: ${COLORS.accent};
        }
      }
    }
  }
`;

const SocialLinks = styled(Flex)`
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: ${COLORS.white};
    transition: all 0.3s ease;

    &:hover {
      background-color: ${COLORS.accent};
      color: ${COLORS.primary};
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
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
        <FooterContent columns={3}>
          <FooterSection>
            <h4>Acerca de</h4>
            <p style={{ fontSize: TYPOGRAPHY.fontSize.sm, lineHeight: 1.6 }}>
              {GROUP_INFO.descripcion}
            </p>
            <SocialLinks>
              {GROUP_INFO.redesSociales.github && (
                <a href={GROUP_INFO.redesSociales.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {GROUP_INFO.redesSociales.linkedin && (
                <a href={GROUP_INFO.redesSociales.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              )}
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="/#proyectos">Proyectos</a></li>
              <li><a href="/#convocatorias">Convocatorias</a></li>
              <li><a href="/#semilleristas">Semilleristas</a></li>
              <li><a href="/#documentacion">Documentación</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Contacto</h4>
            <ul>
              <li>
                <strong>Email:</strong> {GROUP_INFO.email}
              </li>
              <li>
                <strong>Teléfono:</strong>
                <br />
                {GROUP_INFO.telefonos.map((tel, idx) => (
                  <span key={idx}>
                    {tel}
                    {idx < GROUP_INFO.telefonos.length - 1 && <br />}
                  </span>
                ))}
              </li>
              <li>
                <strong>Ubicación:</strong> {GROUP_INFO.direccion}
              </li>
            </ul>
          </FooterSection>
        </FooterContent>

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
