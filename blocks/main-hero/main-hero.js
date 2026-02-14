/**
 * Decorador de bloque main-hero para EDS con soporte de variantes
 * Mantiene la estructura DOM original y aplica estilos CSS según clases
 * Las variantes se aplican automáticamente como clases CSS desde el campo "style"
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  // Las clases variant-b, button-outline, button-secondary ya están aplicadas
  // automáticamente por AEM desde el campo "style" multiselect

  // Determinar variante de layout (A por defecto, B si tiene variant-b)
  const isVariantB = block.classList.contains('variant-b');

  // Determinar variante de botón
  let buttonVariant = 'primary';
  if (block.classList.contains('button-outline')) {
    buttonVariant = 'outline';
  } else if (block.classList.contains('button-secondary')) {
    buttonVariant = 'secondary';
  }

  // Agregar clase adicional para variant-a si no es variant-b
  if (!isVariantB) {
    block.classList.add('variant-a');
  }

  // Agregar clase de botón normalizada si no es primary
  if (buttonVariant !== 'primary') {
    block.classList.add(`button-${buttonVariant}`);
  } else {
    block.classList.add('button-primary');
  }

  // Aplicar clases a elementos específicos para el estilo
  const picture = block.querySelector('picture');
  if (picture) {
    picture.classList.add('main-hero-image');
  }

  const textContent = block.querySelector('[data-aue-prop="title"]');
  if (textContent) {
    textContent.classList.add('main-hero-text');
  }

  const buttons = block.querySelectorAll('a.button');
  buttons.forEach((btn) => {
    btn.classList.add(`button-${buttonVariant}`);
  });
}
