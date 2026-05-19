import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../constants';

// Contenedor principal con ancho máximo y padding
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 640px) {
    padding: 0 1rem;
  }
`;

// Sección con padding vertical
export const Section = styled.section`
  padding: 4rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 640px) {
    padding: 2rem 0;
  }
`;

// Grid responsivo
interface GridProps {
  columns?: number;
  gap?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || '2rem'};

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Contenedor Flex para alineación
interface FlexProps {
  direction?: 'row' | 'column';
  align?: string;
  justify?: string;
  gap?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'flex-start'};
  gap: ${props => props.gap || '1rem'};
`;

// Botón reutilizable
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: ${props => {
    switch (props.size) {
      case 'sm':
        return '0.5rem 1rem';
      case 'lg':
        return '1rem 2rem';
      case 'md':
      default:
        return '0.75rem 1.5rem';
    }
  }};

  font-size: ${TYPOGRAPHY.fontSize.base};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background: ${COLORS.secondary};
          color: ${COLORS.white};
          &:hover {
            background: ${COLORS.primary};
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(0, 168, 232, 0.3);
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${COLORS.secondary};
          border: 2px solid ${COLORS.secondary};
          &:hover {
            background: ${COLORS.secondary};
            color: ${COLORS.white};
          }
        `;
      case 'primary':
      default:
        return `
          background: ${COLORS.primary};
          color: ${COLORS.white};
          &:hover {
            background: ${COLORS.secondary};
            transform: translateY(-2px);
            box-shadow: 0 8px 16px rgba(10, 59, 94, 0.3);
          }
        `;
    }
  }}

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Divisor
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${COLORS.neutral};
  margin: 2rem 0;
`;

// Badge para estados
interface BadgeProps {
  variant?: 'success' | 'warning' | 'info' | 'error';
}

export const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: ${TYPOGRAPHY.fontSize.xs};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  
  ${props => {
    switch (props.variant) {
      case 'success':
        return `background: #10b981; color: white;`;
      case 'warning':
        return `background: #f59e0b; color: white;`;
      case 'error':
        return `background: #ef4444; color: white;`;
      case 'info':
      default:
        return `background: ${COLORS.secondary}; color: white;`;
    }
  }}
`;

// Texto de sección
export const SectionTitle = styled.h2`
  font-size: ${TYPOGRAPHY.fontSize['3xl']};
  color: ${COLORS.primary};
  margin-bottom: 1rem;
  font-weight: ${TYPOGRAPHY.fontWeight.bold};

  @media (max-width: 768px) {
    font-size: ${TYPOGRAPHY.fontSize['2xl']};
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.lg};
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: ${TYPOGRAPHY.fontSize.base};
  }
`;

// Texto de descripción
export const Description = styled.p`
  font-size: ${TYPOGRAPHY.fontSize.base};
  color: #666;
  line-height: 1.6;
`;

// Para espaciado
export const Spacer = styled.div<{ height?: string }>`
  height: ${props => props.height || '2rem'};
`;
