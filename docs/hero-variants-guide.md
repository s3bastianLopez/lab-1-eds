# Guía de Variantes del Hero

## Cómo usar las variantes del bloque Hero

El bloque Hero ahora soporta variantes que permiten cambiar la disposición y estilo sin modificar código.

### Variantes Disponibles

#### Variante A (Por defecto)
- Texto a la izquierda
- Imagen a la derecha
- **Uso en el documento:** `Hero`

#### Variante B
- Texto a la derecha (invertido)
- Imagen a la izquierda
- **Uso en el documento:** `Hero (Variant B)`

### Variantes de Botón

#### Primary (Por defecto)
- Botón sólido azul
- **Uso en el documento:** `Hero`

#### Outline
- Botón con borde, fondo transparente
- **Uso en el documento:** `Hero (Outline)` o `Hero (Variant B, Outline)`

#### Secondary
- Botón gris
- **Uso en el documento:** `Hero (Secondary)`

### Ejemplos de Uso

#### Campaña Original (Variante A con botón primary)
```
| Hero |
|------|
| ![Imagen](./image.jpg) |
| ## Título Principal |
| Descripción del hero |
| [Botón CTA](#) |
```

#### Campaña Nueva (Variante B con botón outline)
```
| Hero (Variant B, Outline) |
|---------------------------|
| ![Imagen Nueva](./image2.jpg) |
| ## Nuevo Título |
| Nueva descripción |
| [Nuevo CTA](#) |
```

### Cómo Funciona

En EDS, cuando escribes `Hero (Variant B, Outline)`, el sistema automáticamente:
1. Convierte el nombre del bloque a clases CSS: `class="hero variant-b outline"`
2. El código detecta estas clases y aplica las variantes correspondientes

### Para el Desarrollador

El código en `blocks/hero/hero.js` detecta las variantes así:
- `block.classList.contains('variant-b')` → Variante B
- `block.classList.contains('outline')` → Botón outline
- `block.classList.contains('secondary')` → Botón secondary

Esto permite a los autores cambiar variantes sin tocar código, cumpliendo con el requerimiento de "estar listo en 3 horas".
