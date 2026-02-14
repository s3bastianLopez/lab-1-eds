import { h, render } from 'preact';
import htm from 'htm';
import HeroBanner from '../../uikit/organisms/herobanner/herobanner.js';

const html = htm.bind(h);

/**
 * Decorador de bloque main-hero para EDS con soporte de variantes
 * Usa Preact para renderizar HeroBanner y aplica variantes desde el campo "style"
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  // Buscar el elemento que contiene el valor de linkType
  const linkTypeElement = block.querySelector('[data-aue-prop="linkType"]');

  // Parsear variantes desde los campos
  let variant = 'A';
  let buttonVariant = 'primary';

  if (linkTypeElement) {
    const linkTypeValue = linkTypeElement.textContent?.trim();

    // Mapear valores de linkType a variantes
    if (linkTypeValue === 'text-right') {
      variant = 'B';
      buttonVariant = 'secondary'; // Text right usa secondary
      block.classList.add('variant-b');
      block.classList.add('button-secondary');
    } else {
      variant = 'A';
      buttonVariant = 'primary'; // Text left usa primary
      block.classList.add('variant-a');
      block.classList.add('button-primary');
    }

    // Ocultar el elemento linkType
    const parentRow = linkTypeElement.closest('.main-hero > div');
    if (parentRow) {
      parentRow.remove();
    }
  }

  // Extraer datos del DOM antes de reemplazar
  const image = block.querySelector('img')?.src || '';
  const imageAlt = block.querySelector('img')?.alt || '';
  const titleElement = block.querySelector('[data-aue-prop="title"]');
  const action = block.querySelector('[data-aue-prop="action"]')?.textContent || '';
  const buttonHref = action || '#';

  // Definir handler de click
  const handleClick = function () {
    if (buttonHref && buttonHref !== '#') {
      window.location.href = buttonHref;
    }
  };

  // Limpiar el contenido del block antes de renderizar
  block.innerHTML = '';

  // Renderizar HeroBanner con Preact
  render(
    html`<${HeroBanner}
      variant=${variant}
      buttonVariant=${buttonVariant}
      image=${image}
      titleElement=${titleElement}
      buttonLabel=${action || 'Learn More'}
      onButtonClick=${handleClick}
    />`,
    block,
  );
}
