/* Utilidades CSS minimalistas */
import styled, { keyframes } from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../constants';

// Animaciones
export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

// Contenedores
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Section = styled.section`
  padding: 6rem 0;
  animation: ${fadeIn} 0.6s ease-out;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || '2rem'};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Flex = styled.div<{ direction?: string; justify?: string; align?: string; gap?: string }>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || '1rem'};
`;

// Tarjetas
export const Card = styled.div`
  background: ${COLORS.white};
  border: 1px solid ${COLORS.neutral};
  border-radius: 8px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${COLORS.secondary};
    box-shadow: 0 8px 24px rgba(0, 168, 232, 0.08);
    transform: translateY(-4px);
  }
`;

// Botones
export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline'; size?: 'sm' | 'md' | 'lg' }>`
  font-size: ${props => {
    switch (props.size) {
      case 'sm':
        return TYPOGRAPHY.fontSize.sm;
      case 'lg':
        return TYPOGRAPHY.fontSize.lg;
      default:
        return TYPOGRAPHY.fontSize.base;
    }
  }};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  padding: ${props => {
    switch (props.size) {
      case 'sm':
        return '0.5rem 1rem';
      case 'lg':
        return '1rem 2rem';
      default:
        return '0.75rem 1.5rem';
    }
  }};
  border-radius: 6px;
  transition: all 0.3s ease;
  
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: ${COLORS.secondary};
          color: ${COLORS.white};
          
          &:hover {
            background-color: ${COLORS.primary};
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(10, 59, 94, 0.2);
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${COLORS.secondary};
          border: 2px solid ${COLORS.secondary};
          
          &:hover {
            background-color: ${COLORS.secondary};
            color: ${COLORS.white};
          }
        `;
      default:
        return `
          background-color: ${COLORS.primary};
          color: ${COLORS.white};
          
          &:hover {
            background-color: ${COLORS.secondary};
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 168, 232, 0.2);
          }
        `;
    }
  }};

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Badges
export const Badge = styled.span<{ color?: string }>`
  display: inline-block;
  background-color: ${props => props.color || COLORS.secondary};
  color: ${COLORS.white};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: ${TYPOGRAPHY.fontSize.xs};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  white-space: nowrap;
`;

// Línea decorativa
export const Divider = styled.hr`
  border: none;
  height: 2px;
  background: linear-gradient(to right, transparent, ${COLORS.secondary}, transparent);
  margin: 3rem 0;
`;

export default {
  fadeIn,
  slideInUp,
  slideInDown,
  pulse,
};
