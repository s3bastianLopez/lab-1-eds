import { h, render } from 'preact';
import htm from 'htm';
import HeroBanner from '../../uikit/organisms/herobanner/herobanner.js';

const html = htm.bind(h);

/**
 * Decorador de bloque main-hero para EDS con soporte de variantes
 * Usa Preact para renderizar HeroBanner
 * Variantes soportadas a través del nombre del bloque:
 * - main-hero (text-right): Texto a la derecha (Variante B) con botón secondary
 * - main-hero (default): Texto a la izquierda (Variante A) con botón primary
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  // Extraer datos del DOM antes de reemplazar
  const imageElement = block.querySelector('img');
  const titleElement = block.querySelector('[data-aue-prop="title"]');

  // Obtener datos del botón
  const buttonLabelElement = block.querySelector('[data-aue-prop="buttonLabel"]');
  const buttonText = buttonLabelElement?.textContent?.trim() || 'Learn More';

  // El link del botón se puede configurar como link en el título
  const buttonLink = '#';

  // Obtener posición del texto
  const textPositionElement = block.querySelector('[data-aue-prop="textPosition"]');
  const textPosition = textPositionElement?.textContent?.trim() || 'text-left';

  // Determinar variante desde el campo textPosition
  const isTextRight = textPosition === 'text-right';
  const variant = isTextRight ? 'B' : 'A';
  const buttonType = isTextRight ? 'secondary' : 'primary';

  // Aplicar clases al bloque
  block.classList.add(variant === 'B' ? 'variant-b' : 'variant-a');
  block.classList.add(`button-${buttonType}`);

  // Definir handler de click
  const handleClick = function handleButtonClick() {
    if (buttonLink && buttonLink !== '#') {
      window.location.href = buttonLink;
    }
  };

  // Limpiar el contenido del block antes de renderizar
  block.innerHTML = '';

  // Renderizar HeroBanner con Preact
  render(
    html`<${HeroBanner}
      variant=${variant}
      buttonVariant=${buttonType}
      imageElement=${imageElement}
      titleElement=${titleElement}
      buttonLabel=${buttonText}
      onButtonClick=${handleClick}
    />`,
    block,
  );
}
