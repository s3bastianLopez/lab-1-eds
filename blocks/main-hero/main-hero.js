// Bloque Hero para EDS, usando el organismo HeroBanner

import { h, render } from 'preact';
import htm from 'htm';
import HeroBanner from '../../uikit/organisms/herobanner/herobanner.js';

const html = htm.bind(h);

/**
 * Decorador de bloque main-hero para EDS con soporte de variantes desde modelo
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  // Extraer datos del DOM del bloque
  const rows = [...block.children];

  // Estructura esperada: imagen, texto, y campos de variantes
  const image = block.querySelector('img')?.src || '';
  const title = block.querySelector('h1,h2,h3,h4,h5,h6')?.textContent || '';
  const description = block.querySelector('p')?.textContent || '';
  const button = block.querySelector('a,button');
  const buttonLabel = button?.textContent || '';
  const buttonHref = button?.href || '';

  // Leer variantes desde los campos del modelo (si existen en el DOM)
  // Buscar elementos con data-aue-prop="variant" o divs con el texto de variante
  let variant = 'A';
  let buttonVariant = 'primary';

  // Buscar en todas las filas los campos de variante
  rows.forEach((row) => {
    const cells = [...row.children];
    cells.forEach((cell) => {
      const text = cell.textContent?.trim().toLowerCase();
      // Detectar variante A o B
      if (text === 'a' || text === 'b') {
        variant = text.toUpperCase();
      }
      // Detectar variante de botón
      if (text === 'primary' || text === 'outline' || text === 'secondary') {
        buttonVariant = text;
      }
    });
  });

  // Fallback: detectar desde clases CSS si no se encuentran en el DOM
  if (block.classList.contains('variant-b')) {
    variant = 'B';
  }
  if (block.classList.contains('outline')) {
    buttonVariant = 'outline';
  } else if (block.classList.contains('secondary')) {
    buttonVariant = 'secondary';
  }

  // Definir handler fuera del template para evitar errores de parsing
  let handleClick;
  if (buttonHref) {
    handleClick = function () { window.location.href = buttonHref; };
  }

  // Renderizar HeroBanner usando Preact.render
  block.innerHTML = ''; // Limpiar contenido original
  render(
    html`<${HeroBanner}
      variant=${variant}
      image=${image}
      title=${title}
      description=${description}
      buttonLabel=${buttonLabel}
      buttonVariant=${buttonVariant}
      onButtonClick=${handleClick}
    />`,
    block,
  );
}
