# 🔬 GIRIE - Grupo de Investigación en Ingeniería Electrónica

Una plataforma web moderna, minimalista y de vanguardia para la presentación de proyectos de investigación en ingeniería electrónica.

## ✨ Características Principales

- **Diseño Minimalista y Vanguardia**: Interfaz moderna que refleja excelencia académica
- **Arquitectura CLEAN**: Código limpio, escalable y mantenible
- **Completamente Responsiva**: Funciona perfectamente en desktop, tablet y móvil
- **Componentes Reutilizables**: Sistema de componentes modular y flexible
- **Tipado Estático**: TypeScript para mayor seguridad en el desarrollo
- **Rendimiento Optimizado**: Basado en Vite para builds rápidos

## 📋 Secciones de la Plataforma

### 🏠 Inicio
- Resumen del grupo de investigación
- Estadísticas principales (proyectos, investigadores, publicaciones)
- Información sobre líneas de investigación
- Llamadas a la acción

### 🔬 Proyectos
- Listado completo de proyectos de investigación
- Filtrado por estado (activos, finalizados, en planificación)
- Cards informativos con detalles de cada proyecto
- Enlaces a recursos

### 📢 Convocatorias
- Oportunidades abiertas para semilleristas
- Convocatorias próximas
- Requisitos y fechas límite
- Enlaces de inscripción

### 👥 Semilleristas
- Perfiles de investigadores en formación
- Filtrado por línea de investigación
- Enlaces a redes sociales
- Información de contacto

### 📸 Galería
- Imágenes de proyectos y laboratorios
- Modal de visualización de imágenes
- Filtrado por proyecto
- Descripciones y fechas

### 📚 Documentación
- Papers publicados
- Tesis de estudiantes
- Informes de proyectos
- Presentaciones en seminarios
- Acceso directo a repositorios

## 🚀 Inicio Rápido

### Requisitos Previos
- Node.js 16 o superior
- npm o yarn

### Instalación

1. Clonar o descargar el proyecto:
```bash
cd MAGMA
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Acceder a `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

El output estará en la carpeta `dist/`

### Vista previa de producción

```bash
npm run preview
```

## 🏗️ Estructura del Proyecto (Arquitectura CLEAN)

```
src/
├── domain/
│   ├── entities/              # Entidades de negocio (Proyecto, Convocatoria, etc)
│   └── repositories/          # Interfaces de acceso a datos
├── application/
│   └── usecases/              # Casos de uso (lógica de negocio)
├── presentation/
│   ├── pages/                 # Páginas completas
│   │   ├── HomePage.tsx
│   │   ├── ProyectosPage.tsx
│   │   ├── ConvocatoriasPage.tsx
│   │   ├── SemilleristasPage.tsx
│   │   ├── GaleriaPage.tsx
│   │   └── DocumentacionPage.tsx
│   ├── components/            # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProyectoCard.tsx
│   │   ├── ConvocatoriaCard.tsx
│   │   ├── SemilleristCard.tsx
│   │   ├── GaleriaCard.tsx
│   │   └── DocumentoCard.tsx
│   └── hooks/                 # Custom React hooks
├── infrastructure/
│   ├── services/              # Servicios externos (APIs)
│   └── config/                # Configuraciones
└── shared/
    ├── types/                 # Tipos TypeScript globales
    ├── constants/             # Constantes y configuración
    └── utils/                 # Utilidades y componentes styled
```

## 🎨 Sistema de Diseño

### Colores
- **Primario**: #0A3B5E (Azul profesional)
- **Secundario**: #00A8E8 (Azul cielo)
- **Acento**: #00C9FF (Azul claro)
- **Éxito**: #06A77D (Verde)
- **Advertencia**: #F4A460 (Naranja)
- **Peligro**: #E63946 (Rojo)
- **Neutral**: #F1F3F5 (Gris claro)

### Tipografía
- **Fuente**: Inter, Segoe UI, Roboto (sin serif)
- **Tamaños**: Escala moderna y legible
- **Pesos**: Light (300), Normal (400), Semibold (600), Bold (700)

## 🔧 Personalización

### Cambiar Información del Grupo

Edita `src/shared/constants/index.ts`:

```typescript
export const GROUP_INFO = {
  nombre: 'Tu Grupo de Investigación',
  sigla: 'TGI',
  descripcion: 'Tu descripción aquí',
  email: 'contacto@tugrupo.edu',
  telefonos: ['+57 (1) 123-4567'],
  direccion: 'Tu ubicación',
  redesSociales: {
    github: 'https://github.com/tugrupo',
    linkedin: 'https://linkedin.com/company/tugrupo',
  }
};
```

### Cambiar Colores Globales

También en `src/shared/constants/index.ts`:

```typescript
export const COLORS = {
  primary: '#TU_COLOR',
  secondary: '#TU_COLOR',
  // ...
};
```

### Conectar a una API Real

1. Crea servicios en `src/infrastructure/services/`
2. Actualiza los casos de uso en `src/application/usecases/`
3. Modifica las páginas para usar los datos de la API

Ejemplo de estructura de servicio:
```typescript
export class ProyectoService {
  async obtenerTodos() {
    const response = await fetch('/api/proyectos');
    return response.json();
  }
}
```

## 🎯 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Build para producción |
| `npm run preview` | Vista previa del build |
| `npm run lint` | Ejecuta ESLint |

## 📦 Dependencias Principales

- **React 19**: Framework UI
- **React Router DOM 6**: Enrutamiento
- **Styled Components 6**: Estilos CSS-in-JS
- **TypeScript**: Tipado estático
- **Vite**: Build tool ultrarrápido

## 🌐 Despliegue

La aplicación puede desplegarse en:
- Vercel
- Netlify
- GitHub Pages
- AWS Amplify
- Cualquier hosting que soporte aplicaciones estáticas

### Ejemplo con Vercel:
```bash
npm install -g vercel
vercel
```

## 📝 Convenciones de Código

- Usar componentes funcionales con hooks
- Nombrar componentes en PascalCase
- Nombrar variables y funciones en camelCase
- Usar tipos TypeScript explícitamente
- Comentarios solo para lógica compleja
- Componentes styled al final del archivo

## 🤝 Contribuciones

Se aceptan contribuciones para mejorar la plataforma:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Realiza tus cambios
4. Commit (`git commit -m 'Add AmazingFeature'`)
5. Push a la rama (`git push origin feature/AmazingFeature`)
6. Abre un Pull Request

## 📧 Contacto

Para preguntas o sugerencias sobre la plataforma:
- Email: contacto@girie.edu
- GitHub: [GIRIE-Team](https://github.com)

## 📜 Licencia

Este proyecto está bajo licencia MIT. Ver `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para la investigación de alto nivel en Ingeniería Electrónica**

*Última actualización: Abril 2026*
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
