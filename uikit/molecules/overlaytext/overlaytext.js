// OverlayText (Molécula)
// Implementación base para OverlayText como molécula Atomic Design
import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

/**
 * OverlayText - Molécula para mostrar texto superpuesto
 * @param {Object} props
 * @param {HTMLElement} [props.htmlElement] - Elemento HTML a renderizar directamente
 * @param {string} [props.text] - Texto a mostrar (opcional si se usa children o htmlElement)
 * @param {string} [props.className]
 * @param {*} [props.children]
 * @param {Object} [props.rest]
 */
export default function OverlayText({
  htmlElement, text, className = '', children, ...rest
}) {
  // Si se pasa un elemento HTML, crear un contenedor y mover el contenido
  if (htmlElement) {
    return html`
      <div class=${`font-semibold text-xl text-gray-900 mb-2 ${className}`}
        ...${rest}
        dangerouslySetInnerHTML=${{ __html: htmlElement.innerHTML }}
      />
    `;
  }

  return html`
    <div class=${`font-semibold text-xl text-gray-900 mb-2 ${className}`}
      ...${rest}
    >
      ${text || children}
    </div>
  `;
}
