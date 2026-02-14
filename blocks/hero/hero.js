// Bloque Hero para EDS, usando el organismo HeroBanner

import { h, render } from 'preact';
import htm from 'htm';
import HeroBanner from '../../uikit/organisms/herobanner/herobanner.js';

const html = htm.bind(h);

/**
 * Decorador de bloque hero para EDS
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  // Detectar variante desde las clases del bloque
  // En EDS, "Hero (Variant B)" se convierte en class="hero variant-b"
  const isVariantB = block.classList.contains('variant-b');
  const variant = isVariantB ? 'B' : 'A';
  
  // Detectar variante de botón desde clases del bloque
  // "Hero (Outline)" se convierte en class="hero outline"
  let buttonVariant = 'primary';
  if (block.classList.contains('outline')) {
    buttonVariant = 'outline';
  } else if (block.classList.contains('secondary')) {
    buttonVariant = 'secondary';
  }

  // Extraer datos del DOM del bloque
  const image = block.querySelector('img')?.src || '';
  const title = block.querySelector('h1,h2,h3,h4,h5,h6')?.textContent || '';
  const description = block.querySelector('p')?.textContent || '';
  const button = block.querySelector('a,button');
  const buttonLabel = button?.textContent || '';
  const buttonHref = button?.href || '';

  // Definir handler fuera del template para evitar errores de parsing
  let handleClick;
  if (buttonHref) {
    handleClick = function () { window.location.href = buttonHref; };
  }

  // Renderizar HeroBanner usando Preact.render, preservando el bloque original
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
