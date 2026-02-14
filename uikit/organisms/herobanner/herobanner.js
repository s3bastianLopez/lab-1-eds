// HeroBanner (Organismo)
// Implementa variantes A (texto izquierda) y B (texto derecha)
import { h } from 'preact';
import htm from 'htm';
import OverlayText from '../../molecules/overlaytext/overlaytext.js';
import Button from '../../atoms/button/button-variant.js';

const html = htm.bind(h);

/**
 * HeroBanner - Organismo con variantes A/B
 * @param {Object} props
 * @param {string} [props.variant] - 'A' | 'B'
 * @param {string} [props.image]
 * @param {string} [props.title]
 * @param {string} [props.description]
 * @param {string} [props.buttonLabel]
 * @param {string} [props.buttonVariant]
 * @param {Function} [props.onButtonClick]
 * @param {string} [props.className]
 * @param {*} [props.children]
 * @param {Object} [props.rest]
 */
export default function HeroBanner({
  image,
  title,
  description,
  buttonLabel,
  buttonVariant = 'primary',
  onButtonClick,
  children,
}) {
  return html`
    <img
    src=${image}
    alt=${title}
    class="w-1/2 object-cover"
    />
    <${OverlayText} text=${title} className="text-3xl font-bold mb-2" />
    <p class="mb-4">${description}</p>
    <${Button} label=${buttonLabel} variant=${buttonVariant} onClick=${onButtonClick} />
    ${children}
  `;
}
