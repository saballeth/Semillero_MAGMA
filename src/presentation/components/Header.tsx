import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { COLORS, ROUTES, TYPOGRAPHY } from '../../shared/constants';
import { Container, Flex } from '../../shared/utils/styledComponents';

const HeaderWrapper = styled.header`
  background-color: ${COLORS.white};
  border-bottom: 1px solid ${COLORS.neutral};
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
`;

const Logo = styled.h1`
  font-size: ${TYPOGRAPHY.fontSize['2xl']};
  color: ${COLORS.primary};
  margin: 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${COLORS.secondary};
  }

  span {
    color: ${COLORS.secondary};
  }
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  font-size: ${TYPOGRAPHY.fontSize.sm};
  color: ${props => props.active ? COLORS.secondary : COLORS.dark};
  font-weight: ${props => props.active ? TYPOGRAPHY.fontWeight.semibold : TYPOGRAPHY.fontWeight.normal};
  position: relative;
  transition: color 0.3s ease;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: ${COLORS.secondary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: ${COLORS.secondary};
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${COLORS.primary};
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div<{ isOpen?: boolean }>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 0;
  background: ${COLORS.white};
  width: 100%;
  padding: 2rem;
  gap: 1rem;
  border-top: 1px solid ${COLORS.neutral};

  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
    padding: 0;
    border-top: none;
    gap: 3rem;
  }
`;

interface HeaderProps {
  activeRoute?: string;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Inicio', href: ROUTES.HOME },
    { label: 'Proyectos', href: ROUTES.PROYECTOS },
    { label: 'Convocatorias', href: ROUTES.CONVOCATORIAS },
    { label: 'Semilleristas', href: ROUTES.SEMILLERISTAS },
    { label: 'Galería', href: ROUTES.GALERIA },
    { label: 'Documentación', href: ROUTES.DOCUMENTACION },
  ];

  const handleLogoClick = () => {
    window.location.hash = ROUTES.HOME;
  };

  return (
    <HeaderWrapper>
      <Container>
        <Flex justify="space-between" align="center">
          <Logo onClick={handleLogoClick}>
            MA<span>GMA</span>
          </Logo>
          
          <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
            ☰
          </MenuToggle>

          <NavMenu isOpen={isMenuOpen}>
            {navigationItems.map(item => (
              <NavLink 
                key={item.href}
                to={item.href}
                active={location.pathname === item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </NavMenu>
        </Flex>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
