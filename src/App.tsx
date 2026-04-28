import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { COLORS, TYPOGRAPHY } from './shared/constants';

// Páginas
import HomePage from './presentation/pages/HomePage';
import ProyectosPage from './presentation/pages/ProyectosPage';
import ConvocatoriasPage from './presentation/pages/ConvocatoriasPage';
import SemilleristasPage from './presentation/pages/SemilleristasPage';
import GaleriaPage from './presentation/pages/GaleriaPage';
import DocumentacionPage from './presentation/pages/DocumentacionPage';

// Estilos globales
const GlobalStyle = createGlobalStyle`
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

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${COLORS.neutral};
  }

  ::-webkit-scrollbar-thumb {
    background: ${COLORS.secondary};
    border-radius: 4px;

    &:hover {
      background: ${COLORS.primary};
    }
  }

  ::selection {
    background-color: ${COLORS.secondary};
    color: ${COLORS.white};
  }

  a {
    color: ${COLORS.secondary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${COLORS.primary};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
  }

  input, textarea, select {
    font-family: inherit;
    border: 1px solid ${COLORS.neutral};
    padding: 0.75rem;
    border-radius: 6px;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${COLORS.secondary};
      box-shadow: 0 0 0 3px rgba(0, 168, 232, 0.1);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${TYPOGRAPHY.fontWeight.bold};
    line-height: 1.2;
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

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/convocatorias" element={<ConvocatoriasPage />} />
          <Route path="/semilleristas" element={<SemilleristasPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/documentacion" element={<DocumentacionPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
