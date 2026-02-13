// Bloque Hero para EDS, usando el organismo HeroBanner
import { h } from 'preact';
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

  // Limpiar el contenido del bloque
  block.innerHTML = '';

  // Definir handler fuera del template para evitar errores de parsing
  let handleClick;
  if (buttonHref) {
    handleClick = function () { window.location.href = buttonHref; };
  }

  // Renderizar el HeroBanner con los datos extraídos
  block.appendChild(html`<${HeroBanner}
      image=${image}
      title=${title}
      description=${description}
      buttonLabel=${buttonLabel}
      buttonVariant="outline"
      onButtonClick=${handleClick}
  />`);
}
