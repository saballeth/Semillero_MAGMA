import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, TYPOGRAPHY } from '../../shared/constants';
import { Container, Flex } from '../../shared/utils/styledComponents';

const HeroWrapper = styled.section`
  background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
  color: ${COLORS.white};
  padding: 8rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(0, 201, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(10, 59, 94, 0.1) 0%, transparent 50%);
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1rem;
  font-weight: ${TYPOGRAPHY.fontWeight.bold};
  line-height: 1.2;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: 2rem;
  opacity: 0.95;
  font-weight: ${TYPOGRAPHY.fontWeight.light};
  line-height: 1.6;
`;

const HeroActions = styled(Flex)`
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const HeroButton = styled(Link)<{ variant?: 'primary' | 'secondary' }>`
  padding: 1rem 2rem;
  font-size: ${TYPOGRAPHY.fontSize.base};
  font-weight: ${TYPOGRAPHY.fontWeight.semibold};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.variant === 'secondary' ? 'transparent' : COLORS.white};
  color: ${props => props.variant === 'secondary' ? COLORS.white : COLORS.primary};
  border: ${props => props.variant === 'secondary' ? `2px solid ${COLORS.white}` : 'none'};
  display: inline-block;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.variant === 'secondary' ? 'rgba(255, 255, 255, 0.1)' : COLORS.accent};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    width: 100%;
    text-align: center;
  }
`;

interface HeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}) => {
  return (
    <HeroWrapper>
      <Container>
        <HeroContent>
          <HeroTitle>{title}</HeroTitle>
          <HeroSubtitle>{subtitle}</HeroSubtitle>
          <HeroActions>
            {primaryButtonText && (
              <HeroButton
                to={primaryButtonHref || '/'}
                variant="primary"
              >
                {primaryButtonText}
              </HeroButton>
            )}
            {secondaryButtonText && (
              <HeroButton
                to={secondaryButtonHref || '/'}
                variant="secondary"
              >
                {secondaryButtonText}
              </HeroButton>
            )}
          </HeroActions>
        </HeroContent>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
