/* eslint-disable import/no-extraneous-dependencies */
import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

/**
 * Button - Reusable button component with variant support
 *
 * @param {Object} props - Component properties
 * @param {string} [props.variant] - Button variant: 'primary' | 'secondary' | '' (default)
 * @param {boolean} [props.disabled] - Disabled state
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.label] - Button text (alternative to children)
 * @param {*} [props.children] - Button content
 * @param {Object} [props.rest] - Other button attributes
 */
export const Button = ({
  variant = '',
  disabled = false,
  onClick,
  className = '',
  label,
  children,
  ...rest
}) => {
  let style = '';
  switch (variant) {
    case 'secondary':
      style = 'bg-transparent text-white border-0 underline hover:no-underline';
      break;
    case 'primary':
      style = 'bg-blue-600 text-white border border-blue-600 hover:bg-blue-700';
      break;
    default:
      // Default style matching AEM default
      style = 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600';
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
};

export default Button;
