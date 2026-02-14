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
  // Buscar el elemento que contiene los valores de style
  const styleElement = block.querySelector('[data-aue-prop="style"]');

  // Parsear variantes desde el campo style
  let variant = 'A';
  let buttonVariant = 'primary';

  if (styleElement) {
    const styleValues = styleElement.textContent?.trim().split(',').map((v) => v.trim()).filter((v) => v);

    // Aplicar cada valor como clase al bloque
    styleValues?.forEach((styleClass) => {
      if (styleClass) {
        block.classList.add(styleClass);

        // Detectar variante de layout
        if (styleClass === 'variant-b') {
          variant = 'B';
        }
        // Detectar variante de botón
        if (styleClass === 'button-outline') {
          buttonVariant = 'outline';
        } else if (styleClass === 'button-secondary') {
          buttonVariant = 'secondary';
        }
      }
    });
  }

  // Extraer datos del DOM antes de reemplazar
  const image = block.querySelector('img')?.src || '';
  const imageAlt = block.querySelector('img')?.alt || '';
  const title = block.querySelector('[data-aue-prop="title"]')?.textContent || '';
  const action = block.querySelector('[data-aue-prop="action"]')?.textContent || '';
  const buttonHref = action || '#';

  // Definir handler de click
  const handleClick = function () {
    if (buttonHref && buttonHref !== '#') {
      window.location.href = buttonHref;
    }
  };

  // Renderizar HeroBanner con Preact
  render(
    html`<${HeroBanner}
      variant=${variant}
      image=${image}
      title=${title}
      description=""
      buttonLabel=${action || 'Learn More'}
      buttonVariant=${buttonVariant}
      onButtonClick=${handleClick}
    />`,
    block,
  );
}
