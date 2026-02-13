// OverlayText (Molécula)
// Implementación base para OverlayText como molécula Atomic Design
import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

/**
 * OverlayText - Molécula para mostrar texto superpuesto
 * @param {Object} props
 * @param {string} [props.text] - Texto a mostrar (opcional si se usa children)
 * @param {string} [props.className]
 * @param {*} [props.children]
 * @param {Object} [props.rest]
 */
export default function OverlayText({
  text, className = '', children, ...rest
}) {
  return html`
    <div class=${`font-semibold text-xl text-gray-900 mb-2 ${className}`}
      ...${rest}
    >
      ${text || children}
    </div>
  `;
}
