/**
 * Decorador de bloque main-hero para EDS con soporte de variantes
 * Mantiene la estructura DOM original y aplica estilos CSS según clases
 * Las variantes se leen desde el campo "style" y se aplican como clases
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  // Buscar el elemento que contiene los valores de style
  const styleElement = block.querySelector('[data-aue-prop="style"]');

  if (styleElement) {
    // Parsear los valores (vienen como "variant-b,button-outline,button-secondary")
    const styleValues = styleElement.textContent?.trim().split(',').map((v) => v.trim()).filter((v) => v);

    // Aplicar cada valor como clase al bloque
    styleValues?.forEach((styleClass) => {
      if (styleClass) {
        block.classList.add(styleClass);
      }
    });

    // Eliminar completamente el elemento que contiene los valores de style
    const parentRow = styleElement.closest('.main-hero > div');
    if (parentRow) {
      parentRow.remove();
    }
  }

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

  // Agregar clase de botón normalizada
  if (!block.classList.contains('button-primary')
    && !block.classList.contains('button-outline')
    && !block.classList.contains('button-secondary')) {
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
