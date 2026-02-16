# Diferencias entre Hero y Main Hero

## Hero (Original)
- **Uso:** Hero básico con imagen de fondo y texto superpuesto
- **Estructura:** Imagen de fondo absoluta + texto encima
- **Estilos:** CSS personalizado en hero.css
- **Variantes:** No soporta variantes
- **Cuándo usar:** Para héroes simples con imagen de fondo

## Main Hero (Con Variantes)
- **Uso:** Hero con layout flexible y variantes de diseño
- **Estructura:** Componente HeroBanner con layout flex (imagen + contenido lado a lado)
- **Estilos:** Tailwind CSS
- **Variantes:** Soporta Variant A/B y botones primary/secondary/outline
- **Cuándo usar:** Para campañas que necesitan cambiar rápidamente entre variantes

### Variantes Disponibles en Main Hero

#### Variante A (Por defecto)
- Texto a la izquierda, imagen a la derecha
- **Uso:** `Main Hero`

#### Variante B
- Texto a la derecha, imagen a la izquierda
- **Uso:** `Main Hero (Variant B)`

#### Botones
- **Primary:** `Main Hero` (por defecto)
- **Outline:** `Main Hero (Outline)` o `Main Hero (Variant B, Outline)`
- **Secondary:** `Main Hero (Secondary)`

### Ejemplos

```
| Main Hero |
| --- |
| ![Imagen](image.jpg) |
| ## Título |
| Descripción |
| [Botón](#) |
```

```
| Main Hero (Variant B, Outline) |
| --- |
| ![Imagen](image.jpg) |
| ## Título |
| Descripción |
| [Botón](#) |
```

## Resumen

- **Hero:** Estructura original simple, sin variantes
- **Main Hero:** Componente moderno con Atomic Design, variantes flexibles (A/B + botones)

Para campañas que necesitan cambiar rápidamente (como el requerimiento de 3 horas), usar **Main Hero**.
