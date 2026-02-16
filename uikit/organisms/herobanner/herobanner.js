// HeroBanner (Organismo)
// Implementa variantes A (texto izquierda) y B (texto derecha)
import { h } from 'preact';
import htm from 'htm';
import OverlayText from '../../molecules/overlaytext/overlaytext.js';
import { Button } from '../../atoms/button/button.js';

const html = htm.bind(h);

/**
 * HeroBanner - Organismo con variantes A/B
 * @param {Object} props
 * @param {string} [props.variant] - 'A' | 'B'
 * @param {HTMLElement} [props.imageElement] - Elemento HTML de la imagen
 * @param {HTMLElement} [props.titleElement] - Elemento HTML del título
 * @param {string} [props.buttonLabel]
 * @param {string} [props.buttonVariant]
 * @param {Function} [props.onButtonClick]
 * @param {string} [props.className]
 * @param {*} [props.children]
 * @param {Object} [props.rest]
 */
export default function HeroBanner({
  variant = 'A',
  imageElement,
  titleElement,
  buttonLabel,
  buttonVariant = 'primary',
  onButtonClick,
  className = '',
  children,
  ...rest
}) {
  const isVariantB = variant === 'B';
  return html`
    <div
      class=${`items-center min-h-[320px] mb-8 ${isVariantB ? 'flex-row-reverse' : 'flex-row'} ${className}`}
      ...${rest}
    >
      <div class="w-1/2">
        <picture
          dangerouslySetInnerHTML=${{ __html: imageElement?.outerHTML || '' }}
        />
      </div>
      <div class=${`w-1/2 p-8 flex flex-col ${isVariantB ? 'items-end text-right' : 'items-start text-left'}`}
      >
        <${OverlayText} htmlElement=${titleElement} className="text-3xl font-bold mb-4 text-white w-full" />
        <${Button} label=${buttonLabel} variant=${buttonVariant} onClick=${onButtonClick} className="" />
        ${children}
      </div>
    </div>
  `;
}
