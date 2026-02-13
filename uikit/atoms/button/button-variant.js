// Button variante para cumplir con el requerimiento (primary, secondary, outline, disabled)
import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

/**
 * Button - Variante con soporte para primary, secondary, outline, disabled
 *
 * @param {Object} props
 * @param {string} [props.variant] - 'primary' | 'secondary' | 'outline'
 * @param {boolean} [props.disabled]
 * @param {Function} [props.onClick]
 * @param {string} [props.className]
 * @param {string} [props.label] - Texto del botón (opcional, si no se usa children)
 * @param {*} [props.children] - Contenido del botón
 * @param {Object} [props.rest]
 */
export default function Button({
  variant = 'primary',
  disabled = false,
  onClick,
  className = '',
  label,
  children,
  ...rest
}) {
  let style = '';
  switch (variant) {
    case 'secondary':
      style = 'bg-gray-200 text-gray-800 border border-gray-400';
      break;
    case 'outline':
      style = 'bg-transparent text-blue-600 border border-blue-600';
      break;
    case 'primary':
    default:
      style = 'bg-blue-600 text-white border border-blue-600';
      break;
  }
  if (disabled) {
    style += ' opacity-50 cursor-not-allowed';
  }
  return html`
    <button
      class=${`button px-4 py-2 rounded transition-colors ${style} ${className}`}
      disabled=${disabled}
      onClick=${onClick}
      ...${rest}
    >
      ${label || children}
    </button>
  `;
}
