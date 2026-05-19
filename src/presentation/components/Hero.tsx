import React from 'react';
import styled from 'styled-components';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

const HeroWrapper = styled.section`
  position: relative;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${COLORS.primary}dd, ${COLORS.secondary}dd),
    radial-gradient(circle at 20% 50%, ${COLORS.accent}20 0%, transparent 50%);
  color: ${COLORS.white};
  overflow: hidden;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 3rem 1.5rem;
  }
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 2;
  position: relative;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: ${TYPOGRAPHY.fontWeight.bold};
  margin-bottom: 1rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: 2rem;
  opacity: 0.95;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Button = styled.a<{ variant?: 'primary' | 'secondary' }>`
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 6px;
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: ${TYPOGRAPHY.fontSize.base};

  ${props => {
    if (props.variant === 'secondary') {
      return `
        background: ${COLORS.white};
        color: ${COLORS.primary};
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(255, 255, 255, 0.3);
        }
      `;
    }
    return `
      background: ${COLORS.secondary};
      color: ${COLORS.white};
      &:hover {
        background: ${COLORS.accent};
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0, 200, 255, 0.3);
      }
    `;
  }}

  &:active {
    transform: translateY(0);
  }
`;

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}) => {
  return (
    <HeroWrapper>
      <Content>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {(primaryButtonText || secondaryButtonText) && (
          <ButtonGroup>
            {primaryButtonText && (
              <Button href={primaryButtonHref || '#'} variant="primary">
                {primaryButtonText}
              </Button>
            )}
            {secondaryButtonText && (
              <Button href={secondaryButtonHref || '#'} variant="secondary">
                {secondaryButtonText}
              </Button>
            )}
          </ButtonGroup>
        )}
      </Content>
    </HeroWrapper>
  );
};

export default Hero;
