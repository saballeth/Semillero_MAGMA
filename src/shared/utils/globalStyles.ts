/* Estilos globales minimalistas */
import { COLORS, TYPOGRAPHY } from '../../shared/constants';

const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${TYPOGRAPHY.fontFamily};
    background-color: ${COLORS.white};
    color: ${COLORS.dark};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Scrollbar personalizado */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${COLORS.neutral};
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.secondary};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.primary};
  }

  /* Selección de texto */
  ::selection {
    background-color: ${COLORS.secondary};
    color: ${COLORS.white};
  }

  /* Enlaces */
  a {
    color: ${COLORS.secondary};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: ${COLORS.primary};
  }

  /* Botones */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
  }

  /* Inputs */
  input, textarea, select {
    font-family: inherit;
    border: 1px solid ${COLORS.neutral};
    padding: 0.75rem;
    border-radius: 6px;
    transition: border-color 0.3s ease;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
    border-color: ${COLORS.secondary};
    box-shadow: 0 0 0 3px rgba(0, 168, 232, 0.1);
  }

  /* Títulos */
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${TYPOGRAPHY.fontWeight.bold};
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: ${TYPOGRAPHY.fontSize['4xl']};
  }

  h2 {
    font-size: ${TYPOGRAPHY.fontSize['3xl']};
  }

  h3 {
    font-size: ${TYPOGRAPHY.fontSize['2xl']};
  }
`;

export default globalStyles;
