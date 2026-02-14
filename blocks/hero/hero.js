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
  // Extraer datos del DOM del bloque (ejemplo: imagen, título, descripción, botón)
  const image = block.querySelector('img')?.src || '';
  const title = block.querySelector('h1,h2,h3,h4,h5,h6')?.textContent || '';
  const description = block.querySelector('p')?.textContent || '';
  const button = block.querySelector('a,button');
  const buttonLabel = button?.textContent || '';
  const buttonHref = button?.href || '';

  // Permitir selección de variante desde el editor EDS usando data attributes
  const variant = block.dataset.variant || 'A';
  const buttonVariant = block.dataset.buttonVariant || 'primary';

  // Definir handler fuera del template para evitar errores de parsing
  let handleClick;
  if (buttonHref) {
    handleClick = function () { window.location.href = buttonHref; };
  }

  // Renderizar HeroBanner usando Preact.render, preservando el bloque original
  block.innerHTML = '';
  render(
    html`<${HeroBanner}
      image=${image}
      title=${title}
      description=${description}
      buttonLabel=${buttonLabel}
      variant=${variant}
      buttonVariant=${buttonVariant}
      onButtonClick=${handleClick}
    />`,
    block,
  );
}
