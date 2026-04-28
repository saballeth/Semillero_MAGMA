// Guía de estructura CLEAN del proyecto

## Arquitectura CLEAN

El proyecto sigue la arquitectura CLEAN para mantener el código organizado, escalable y fácil de mantener.

### Estructura de Carpetas

```
src/
├── domain/                  # Capa de dominio - Lógica de negocio pura
│   ├── entities/           # Entidades del dominio
│   └── repositories/       # Interfaces y abstracciones de datos
├── application/            # Capa de aplicación - Casos de uso
│   └── usecases/          # Implementación de casos de uso
├── presentation/           # Capa de presentación - UI
│   ├── pages/             # Páginas principales
│   ├── components/        # Componentes reutilizables
│   └── hooks/             # Custom hooks
├── infrastructure/         # Capa de infraestructura
│   ├── services/          # Servicios externos
│   └── config/            # Configuraciones
└── shared/                # Utilidades compartidas
    ├── types/             # Tipos TypeScript globales
    ├── constants/         # Constantes de la app
    └── utils/             # Utilidades varias
```

### Flujo de Datos

1. **Presentation Layer** → User interacts
2. **Application Layer** → Use Cases handle business logic
3. **Domain Layer** → Entities and Repositories
4. **Infrastructure Layer** → External services and APIs

### Componentes Principales

- **HomePage**: Página de inicio con resumen del grupo
- **ProyectosPage**: Listado y filtrado de proyectos
- **ConvocatoriasPage**: Convocatorias abiertas y próximas
- **SemilleristasPage**: Perfiles de semilleristas con filtrado
- **GaleriaPage**: Galería de imágenes de proyectos
- **DocumentacionPage**: Papers, tesis y documentos

### Colores y Estilos

- Primary: #0A3B5E (Azul profesional)
- Secondary: #00A8E8 (Azul cielo)
- Accent: #00C9FF (Azul claro)
- Neutral: #F1F3F5 (Gris minimalista)

### Para Personalizar

1. **Editar constantes**: `src/shared/constants/index.ts`
2. **Modificar datos**: Las páginas incluyen datos de ejemplo que se pueden reemplazar por llamadas API
3. **Cambiar estilos**: `src/shared/utils/styledComponents.ts`

