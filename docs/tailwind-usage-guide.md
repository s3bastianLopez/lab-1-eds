# Guía de Uso de Tailwind CSS

## Configuración del Proyecto

Este proyecto está configurado para usar Tailwind CSS v4 junto con estilos CSS personalizados. La configuración permite que los estilos de componentes (con Tailwind) tengan prioridad sobre los estilos base generales.

## Orden de Carga de Estilos

Los archivos CSS se cargan en el siguiente orden en `head.html`:

1. **`styles-tw.css`** - Estilos de Tailwind CSS (utilities, theme)
2. **`styles.css`** - Estilos base generales del proyecto

Este orden es crucial para la especificidad correcta.

## Sistema de Capas (Layers)

El proyecto utiliza el sistema de capas de Tailwind CSS v4:

### En `styles/src/input.css`:
```css
@layer theme, base, components, utilities;

@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);

@source "../../blocks/*.{html,js}";
@source "../../uikit/*.{html,js}";
```

### En `styles/styles.css`:
Los estilos generales están organizados en capas:

- **`@layer theme`** - Variables CSS personalizadas (custom properties)
- **`@layer base`** - Estilos base para elementos HTML (body, headings, links, etc.)

## Prioridad de Estilos

La cascada de especificidad es la siguiente (de menor a mayor prioridad):

1. **Theme layer** - Variables y custom properties
2. **Base layer** - Estilos base de elementos HTML
3. **Components layer** - Estilos de componentes (tus bloques en `blocks/`)
4. **Utilities layer** - Clases de utilidad de Tailwind

## Cómo Usar Tailwind en Componentes

### Opción 1: Clases de Utilidad en JavaScript

Puedes agregar clases de Tailwind directamente en tu código JavaScript:

```javascript
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'flex flex-col items-center px-4 py-2';
  // ...
}
```

### Opción 2: Mezclar Tailwind con CSS Personalizado

En el archivo CSS de tu bloque (`blocks/mi-bloque/mi-bloque.css`):

```css
.mi-bloque {
  /* Estilos personalizados para el contenedor principal */
}

.mi-bloque .elemento {
  /* Estos estilos tendrán prioridad sobre @layer base */
  @apply flex items-center gap-4;
  
  /* Puedes mezclar con propiedades CSS personalizadas */
  background-color: var(--color-blue-500);
}
```

### Opción 3: Usar Variables de Tailwind

Las variables de Tailwind están disponibles en tu CSS:

```css
.mi-componente {
  color: var(--color-blue-600);
  padding: calc(var(--spacing) * 4);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-bold);
}
```

## Variables Disponibles

### Colores
- `--color-red-500`, `--color-red-600`
- `--color-blue-500`, `--color-blue-600`
- `--color-white`

### Tipografía
- `--text-base`, `--text-xl`, `--text-2xl`
- `--font-weight-semibold`, `--font-weight-bold`

### Espaciado
- `--spacing` (0.25rem como base)
- Usa `calc(var(--spacing) * N)` para múltiplos

### Transiciones
- `--default-transition-duration`
- `--default-transition-timing-function`

## Clases de Utilidad Disponibles

Las utilidades más comunes de Tailwind v4 incluyen:

- **Layout**: `flex`, `grid`, `block`, `hidden`, `container`
- **Flexbox**: `flex-col`, `items-center`, `justify-between`
- **Spacing**: `px-4`, `py-2`, `gap-4`
- **Tipografía**: `text-xl`, `text-2xl`, `font-bold`, `font-semibold`
- **Colores**: `bg-blue-500`, `text-white`
- **Bordes**: `rounded`, `border`
- **Efectos**: `shadow`, `hover:bg-blue-600`, `transition-colors`

## Mejores Prácticas

### 1. Prioriza las Utilities para Layout Rápido
```javascript
const hero = document.createElement('div');
hero.className = 'flex flex-col items-center gap-4 px-4';
```

### 2. Usa CSS Personalizado para Estilos Complejos
Para estilos específicos del componente, usa el archivo CSS del bloque:

```css
.hero .background {
  background: linear-gradient(135deg, var(--color-blue-500) 0%, var(--color-blue-600) 100%);
  position: relative;
}
```

### 3. Combina Ambos Enfoques
```javascript
// En hero.js
const title = document.createElement('h1');
title.className = 'text-2xl font-bold text-white hero-title';
```

```css
/* En hero.css */
.hero .hero-title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.5s ease-in;
}
```

### 4. Mantén la Semántica de Bloques
Aunque uses Tailwind, mantén la estructura de nomenclatura de bloques:

```css
.mi-bloque {
  /* Contenedor principal */
}

.mi-bloque .elemento {
  @apply flex items-center;
  /* Estilos adicionales */
}
```

## Desarrollo y Build

### Desarrollo Local
```bash
npm install
npx @adobe/aem-cli up
```

Los estilos de Tailwind se regeneran automáticamente cuando modificas archivos en `blocks/` o `uikit/`.

### Agregar Nuevas Utilidades

Si necesitas personalizar el tema de Tailwind, modifica `styles/src/input.css`:

```css
@layer theme {
  :root {
    --color-mi-color: #123456;
  }
}
```

## Resolución de Problemas

### Los estilos de Tailwind no se aplican
1. Verifica que `styles-tw.css` se cargue antes que `styles.css` en `head.html`
2. Asegúrate de que el archivo esté en `blocks/` o `uikit/` (definidos en `@source`)
3. Limpia caché y recarga el servidor de desarrollo

### Los estilos base sobrescriben mis componentes
Esto no debería ocurrir con la configuración actual. Si ocurre:
1. Verifica que `styles.css` use `@layer base` para los estilos base
2. Tus estilos de componente en `blocks/` deberían estar fuera de cualquier layer (o en `@layer components`)

### Conflictos de especificidad
Si hay conflictos, usa el operador `!important` solo como último recurso. En su lugar:
1. Aumenta la especificidad con selectores más específicos
2. Usa `@apply` dentro de tu CSS de bloque
3. Verifica el orden de las capas

## Recursos

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Cascade Layers (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)
- [AEM Edge Delivery](https://www.aem.live/)
