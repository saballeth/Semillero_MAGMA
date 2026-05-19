import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { GRUPO_MAGMA_INFO } from '../../shared/constants/grupoMagma';

const CardWrapper = styled.div`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.neutral};
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: ${COLORS.secondary};
    box-shadow: 0 12px 32px rgba(0, 168, 232, 0.12);
    transform: translateY(-4px);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  font-size: ${TYPOGRAPHY.fontSize.xl};
  color: ${COLORS.primary};
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h4`
  font-size: ${TYPOGRAPHY.fontSize.lg};
  color: ${COLORS.secondary};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const RoleList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
`;

const RoleCard = styled.div`
  background: linear-gradient(135deg, ${COLORS.primary}10, ${COLORS.secondary}10);
  border-left: 4px solid ${COLORS.secondary};
  padding: 1rem;
  border-radius: 4px;
`;

const RoleName = styled.h5`
  font-size: ${TYPOGRAPHY.fontSize.base};
  color: ${COLORS.primary};
  margin-bottom: 0.25rem;
  font-weight: 600;
`;

const RoleTitle = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: ${COLORS.secondary};
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

const ResponsibilityList = styled.ul`
  list-style: none;
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: #666;

  li {
    margin-bottom: 0.3rem;
    padding-left: 1.2rem;
    position: relative;

    &:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: ${COLORS.success};
      font-weight: bold;
    }
  }
`;

const MejorraList = styled.ul`
  list-style: none;
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: #666;
  padding-left: 1rem;

  li {
    margin-bottom: 0.5rem;
    padding-left: 1.2rem;
    position: relative;

    &:before {
      content: '→';
      position: absolute;
      left: 0;
      color: ${COLORS.warning};
      font-weight: bold;
    }
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: 1px solid ${COLORS.secondary};
  color: ${COLORS.secondary};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: ${TYPOGRAPHY.fontSize.sm};
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: ${COLORS.secondary};
    color: ${COLORS.white};
  }
`;

export const GrupoMagmaCard: React.FC = () => {
  const [expandedRoles, setExpandedRoles] = useState(false);

  return (
    <CardWrapper>
      <Header>
        <div>
          <Title>{GRUPO_MAGMA_INFO.nombre}</Title>
          <Description>{GRUPO_MAGMA_INFO.descripcion}</Description>
        </div>
      </Header>

      {/* Cosas a Mejorar */}
      <Section>
        <SectionTitle>📊 Cosas a Mejorar</SectionTitle>
        <div>
          <strong style={{ color: COLORS.primary, fontSize: TYPOGRAPHY.fontSize.sm }}>
            Diapositivas:
          </strong>
          <MejorraList>
            {GRUPO_MAGMA_INFO.mejoras.diapositivas.detalles.map((detalle, idx) => (
              <li key={idx}>{detalle}</li>
            ))}
          </MejorraList>
        </div>
      </Section>

      {/* Roles */}
      <Section>
        <SectionTitle>👥 Roles y Responsabilidades</SectionTitle>
        {!expandedRoles ? (
          <>
            <p style={{ fontSize: TYPOGRAPHY.fontSize.sm, color: '#666', marginBottom: '1rem' }}>
              {GRUPO_MAGMA_INFO.roles.length} miembros en el equipo
            </p>
            <ExpandButton onClick={() => setExpandedRoles(true)}>
              Ver todos los roles
            </ExpandButton>
          </>
        ) : (
          <>
            <RoleList>
              {GRUPO_MAGMA_INFO.roles.map(role => (
                <RoleCard key={role.id}>
                  <RoleName>{role.nombre}</RoleName>
                  <RoleTitle>{role.rol}</RoleTitle>
                  <ResponsibilityList>
                    {role.responsabilidades.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ResponsibilityList>
                </RoleCard>
              ))}
            </RoleList>
            <ExpandButton onClick={() => setExpandedRoles(false)}>
              Ocultar roles
            </ExpandButton>
          </>
        )}
      </Section>

      {/* Objetivos */}
      <Section>
        <SectionTitle>🎯 Objetivos del Grupo</SectionTitle>
        <MejorraList>
          {GRUPO_MAGMA_INFO.objetivos.map((obj, idx) => (
            <li key={idx}>{obj}</li>
          ))}
        </MejorraList>
      </Section>
    </CardWrapper>
  );
};

export default GrupoMagmaCard;
