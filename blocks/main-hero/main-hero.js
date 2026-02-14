/**
 * Decorador de bloque main-hero para EDS con soporte de variantes
 * Mantiene la estructura DOM original y aplica clases CSS según variantes
 * Lee variantes como atributos anidados de title y action
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  // Leer variantes desde data attributes anidados de title y action
  const titleElement = block.querySelector('[data-aue-prop="title"]');
  const actionElement = block.querySelector('[data-aue-prop="action"]');

  // Buscar variantes anidadas (titleVariant, actionButtonVariant)
  const titleVariantElement = block.querySelector('[data-aue-prop="titleVariant"]');
  const buttonVariantElement = block.querySelector('[data-aue-prop="actionButtonVariant"]');

  let variant = titleVariantElement?.textContent?.trim().toUpperCase() || 'A';
  let buttonVariant = buttonVariantElement?.textContent?.trim().toLowerCase() || 'primary';

  // Fallback: detectar desde clases CSS si no se encuentran en el DOM
  if (block.classList.contains('variant-b')) {
    variant = 'B';
  }
  if (block.classList.contains('outline')) {
    buttonVariant = 'outline';
  } else if (block.classList.contains('secondary')) {
    buttonVariant = 'secondary';
  }

  // Aplicar clases CSS según las variantes detectadas
  block.classList.add(`variant-${variant.toLowerCase()}`);
  block.classList.add(`button-${buttonVariant}`);

  // Aplicar clases a elementos específicos para el estilo
  const picture = block.querySelector('picture');
  if (picture) {
    picture.classList.add('main-hero-image');
  }

  const textContent = block.querySelector('[data-aue-prop="text"]');
  if (textContent) {
    textContent.classList.add('main-hero-text');
  }

  const buttons = block.querySelectorAll('a.button');
  buttons.forEach((btn) => {
    btn.classList.add(`button-${buttonVariant}`);
  });
}
