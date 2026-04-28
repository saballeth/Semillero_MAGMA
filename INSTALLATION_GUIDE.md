# 🚀 Guía de Instalación y Primeros Pasos

## Requisitos Previos

- **Node.js 16+** ([Descargar](https://nodejs.org/))
- **npm 7+** (incluido con Node.js)
- **Editor de Código** (VS Code recomendado)
- **Git** (opcional, para control de versiones)

## Paso 1: Verificar Instalación

Abre una terminal y verifica que tienes Node.js y npm instalados:

```bash
node --version    # Debe mostrar v16 o superior
npm --version     # Debe mostrar 7.0 o superior
```

## Paso 2: Instalar Dependencias

Navega a la carpeta del proyecto y ejecuta:

```bash
cd MAGMA
npm install
```

Esto instalará:
- ✅ React 19
- ✅ React Router DOM
- ✅ Styled Components
- ✅ TypeScript
- ✅ Vite
- ✅ Y otras dependencias

## Paso 3: Ejecutar en Desarrollo

```bash
npm run dev
```

Deberías ver algo como:
```
  ➜  Local:   http://localhost:5173/
  ➜  press h + enter to show help
```

Abre http://localhost:5173/ en tu navegador y ¡voilà! 🎉

## Paso 4: Explorar la Estructura

La estructura del proyecto se organiza así:

```
MAGMA/
├── src/
│   ├── domain/          # Lógica de negocio
│   ├── application/     # Casos de uso
│   ├── presentation/    # Componentes y páginas
│   ├── infrastructure/  # Servicios externos
│   ├── shared/          # Tipos y constantes
│   └── App.tsx          # Punto de entrada
├── public/              # Activos estáticos
├── package.json         # Dependencias
└── vite.config.ts       # Configuración de Vite
```

## Paso 5: Personalizar tu Grupo

### 5.1 Cambiar Información del Grupo

Edita `src/shared/constants/index.ts`:

```typescript
export const GROUP_INFO = {
  nombre: 'Mi Grupo de Investigación',
  sigla: 'MGI',
  descripcion: 'Descripción de mi grupo',
  email: 'contacto@migrupo.edu',
  telefonos: ['+57 (1) 123-4567'],
  direccion: 'Mi universidad',
  redesSociales: {
    github: 'https://github.com/migrupo',
    linkedin: 'https://linkedin.com/company/migrupo',
    twitter: 'https://twitter.com/migrupo',
  }
};
```

### 5.2 Cambiar Colores

También en `src/shared/constants/index.ts`:

```typescript
export const COLORS = {
  primary: '#0A3B5E',      // Tu color primario
  secondary: '#00A8E8',    // Tu color secundario
  accent: '#00C9FF',       // Tu color de acento
  // ... más colores
};
```

### 5.3 Agregar tus Datos

Las páginas tienen datos de ejemplo. Para personalizarlos:

1. **Proyectos**: Edita el array `proyectosEjemplo` en `src/presentation/pages/ProyectosPage.tsx`
2. **Convocatorias**: Edita el array `convocatoriasEjemplo` en `src/presentation/pages/ConvocatoriasPage.tsx`
3. **Semilleristas**: Edita el array `semilleristasEjemplo` en `src/presentation/pages/SemilleristasPage.tsx`
4. **Galería**: Edita el array `galeríaEjemplo` en `src/presentation/pages/GaleriaPage.tsx`
5. **Documentación**: Edita el array `documentosEjemplo` en `src/presentation/pages/DocumentacionPage.tsx`

## Paso 6: Conectar a una API (Opcional)

Si tienes un backend, puedes conectarlo así:

### 6.1 Crear un Servicio

Crea `src/infrastructure/services/ProyectoService.ts`:

```typescript
export class ProyectoService {
  private apiUrl = 'https://api.tudominio.com';

  async obtenerTodos() {
    const response = await fetch(`${this.apiUrl}/proyectos`);
    if (!response.ok) throw new Error('Error al obtener proyectos');
    return response.json();
  }

  async obtenerPorId(id: string) {
    const response = await fetch(`${this.apiUrl}/proyectos/${id}`);
    if (!response.ok) throw new Error('Proyecto no encontrado');
    return response.json();
  }
}
```

### 6.2 Usar en una Página

En `src/presentation/pages/ProyectosPage.tsx`:

```typescript
import { useEffect, useState } from 'react';
import { ProyectoService } from '../../infrastructure/services/ProyectoService';

export const ProyectosPage: React.FC = () => {
  const [proyectos, setProyectos] = useState([]);
  const service = new ProyectoService();

  useEffect(() => {
    service.obtenerTodos().then(setProyectos);
  }, []);

  // ... resto del componente
};
```

## Paso 7: Build para Producción

Cuando esté listo para publicar:

```bash
npm run build
```

Esto creará una carpeta `dist/` con tu sitio optimizado. 

## Paso 8: Desplegar

### Opción 1: Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify

1. Conecta tu repositorio GitHub
2. Configura el build: `npm run build`
3. Publica automáticamente

### Opción 3: GitHub Pages

```bash
npm run build
# Sube la carpeta 'dist/' a GitHub Pages
```

### Opción 4: Tu propio servidor

1. Ejecuta `npm run build`
2. Sube la carpeta `dist/` a tu servidor
3. Configura tu servidor para servir `index.html` en todas las rutas

## Paso 9: Optimizaciones

### Agregar Imágenes Reales

1. Coloca tus imágenes en `public/`
2. Referencia en componentes: `imagen="/mi-imagen.jpg"`

### Mejorar Performance

- Implementa lazy loading para imágenes
- Usa componentes React.memo() donde sea apropiado
- Implementa code splitting con React.lazy()

## Paso 10: Mantenimiento

### Scripts Útiles

```bash
npm run dev      # Desarrollo
npm run build    # Build
npm run preview  # Preview local
npm run lint     # Verificar código
```

### Comandos Git Útiles

```bash
git init                          # Inicializar repo
git add .                         # Agregar cambios
git commit -m "Mensaje"           # Commit
git push origin main              # Push
git pull origin main              # Pull
```

## 🎓 Recursos de Aprendizaje

- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Styled Components](https://styled-components.com/)
- [Vite Docs](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)

## 🆘 Solución de Problemas

### "npm install" falla

```bash
# Limpiar caché de npm
npm cache clean --force
# Reintentar
npm install
```

### El servidor no inicia

```bash
# Verificar si el puerto 5173 está libre
# O especificar otro puerto:
npm run dev -- --port 3000
```

### Errores de TypeScript

```bash
# Reiniciar servidor
npm run dev

# O verificar tipos:
npx tsc --noEmit
```

### Build falla

```bash
# Limpiar dist y reinstalar
rm -rf dist node_modules
npm install
npm run build
```

## 📞 Soporte

Para problemas o preguntas:
1. Revisa los archivos de documentación
2. Consulta los recursos de aprendizaje
3. Abre un issue en el repositorio

---

**¡Listo para comenzar! Edita, personaliza y publica tu página de investigación.** 🚀
