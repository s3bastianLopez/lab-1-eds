/**
 * Decorador de bloque main-hero para EDS con soporte de variantes
 * Mantiene la estructura DOM original y aplica clases CSS según variantes
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const rows = [...block.children];

  // Leer variantes desde los campos del modelo (si existen en el DOM)
  let variant = 'A';
  let buttonVariant = 'primary';

  // Buscar en todas las filas los campos de variante
  rows.forEach((row) => {
    const cells = [...row.children];
    cells.forEach((cell) => {
      const text = cell.textContent?.trim().toLowerCase();
      // Detectar variante A o B
      if (text === 'a' || text === 'b') {
        variant = text.toUpperCase();
        // Ocultar la celda que contiene solo la variante
        cell.style.display = 'none';
      }
      // Detectar variante de botón
      if (text === 'primary' || text === 'outline' || text === 'secondary') {
        buttonVariant = text;
        // Ocultar la celda que contiene solo la variante de botón
        cell.style.display = 'none';
      }
    });
  });

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
