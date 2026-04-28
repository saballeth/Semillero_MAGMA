# GIRIE - Grupo de Investigación en Ingeniería Electrónica

Una plataforma web moderna y minimalista para la presentación de proyectos de investigación en ingeniería electrónica.

## 🎯 Características

- ✨ Diseño minimalista y vanguardia
- 🎨 Interfaz moderna y atractiva
- 📱 Completamente responsiva
- 🏗️ Arquitectura CLEAN
- 🚀 Basada en React + TypeScript + Vite
- 🎭 Estilos con styled-components

## 📋 Secciones

- **Inicio**: Resumen del grupo y estadísticas
- **Proyectos**: Listado y filtrado de proyectos de investigación
- **Convocatorias**: Oportunidades abiertas y próximas
- **Semilleristas**: Perfiles del talento joven del grupo
- **Galería**: Imágenes y momentos clave
- **Documentación**: Papers, tesis e informes publicados

## 🚀 Inicio Rápido

### Instalación de Dependencias

```bash
npm install
```

### Ejecución en Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

### Preview de Build

```bash
npm run preview
```

## 🏗️ Estructura del Proyecto

```
src/
├── domain/              # Lógica de negocio pura
├── application/         # Casos de uso
├── presentation/        # Componentes y páginas React
├── infrastructure/      # Servicios externos
└── shared/             # Tipos, constantes y utilidades
```

## 🎨 Personalización

### Información del Grupo

Edita `src/shared/constants/index.ts`:

```typescript
export const GROUP_INFO = {
  nombre: 'Tu Grupo de Investigación',
  email: 'tu@email.edu',
  // ... más campos
};
```

### Colores

Personaliza los colores en `src/shared/constants/index.ts`:

```typescript
export const COLORS = {
  primary: '#0A3B5E',
  secondary: '#00A8E8',
  // ... más colores
};
```

### Datos

Las páginas incluyen datos de ejemplo. Para conectar una API:

1. Modifica los servicios en `src/infrastructure/services/`
2. Actualiza los casos de uso en `src/application/usecases/`
3. Las páginas consumirán los nuevos datos automáticamente

## 🔧 Requisitos

- Node.js 16+
- npm o yarn

## 📦 Dependencias Principales

- **React 19**: Framework UI
- **React Router DOM**: Navegación
- **Styled Components**: Estilos CSS-in-JS
- **TypeScript**: Tipado estático

## 📝 Licencia

Proyecto personalizado para el grupo GIRIE

## 🤝 Contribuciones

Para contribuir al proyecto:

1. Crea una rama para tu feature
2. Realiza tus cambios
3. Envía un pull request

## 📧 Contacto

Para más información, contacta al grupo GIRIE

---

**Desarrollado con ❤️ para la investigación de alto nivel**
