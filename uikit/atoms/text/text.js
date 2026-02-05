/* eslint-disable import/no-extraneous-dependencies */
import { h } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

/**
 * Text - Reusable text component
 *
 * @param {Object} props - Component properties
 * * @param {string} props.type - Button type: 'red' or 'blue' (default: 'red')
 * @param {string} props.variant - Text variant: 'title', 'subtitle', 'body' (default: 'body')
 * @param {string} props.className - Additional CSS classes
 * @param {*} props.children - Text content
 * @param {Object} props.rest - Other attributes
 */
const Text = ({
  variant = 'body',
  className = '',
  children,
  ...rest
}) => {
  // Determine text style based on variant
  let variantClass = 'text-base';
  switch (variant) {
    case 'title':
      variantClass = 'text-2xl font-bold';
      break;
    case 'subtitle':
      variantClass = 'text-xl font-semibold';
      break;
    default:
      variantClass = 'text-base';
  }

  // Combine classes
  const textClasses = `${variantClass} ${className}`;

  return html`
    <span
      class=${textClasses}
      ...${rest}
    >
      ${children}
    </span>
  `;
};

export default Text;
