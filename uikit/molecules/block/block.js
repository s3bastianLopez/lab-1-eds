import { h } from 'preact';
import htm from 'htm';
import ButtonCustom from '../../atoms/button/button.js';
import TextCustom from '../../atoms/text/text.js';

const html = htm.bind(h);

/**
 * CTA - Call To Action molecule
 *
 * @param {Object} props
 * @param {string} props.text - Texto a mostrar
 * @param {string} props.buttonLabel - Texto del botón
 * @param {Function} props.onClick - Handler del botón
 * @param {string} props.textVariant - Variante del texto ('title', 'subtitle', 'body')
 * @param {string} props.buttonType - Tipo de botón ('red', 'blue')
 * @param {string} props.className - Clases adicionales
 */
const CTA = ({
  text,
  buttonLabel,
  onClick,
  textVariant = 'body',
  buttonType = 'red',
  className = '',
  ...rest
}) => html`
  <div class="flex flex-col items-center ${className}" ...${rest}>
    ${html`<${TextCustom} variant=${textVariant}>${text}<//>`}
    ${html`<${ButtonCustom} type=${buttonType} onClick=${onClick}>${buttonLabel}<//>`}
  </div>
`;

export default CTA;
