/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { h, render } from 'preact';
import htm from 'htm';
import Paragraph from '../../uikit/molecules/paragraph/paragraph.js';

const html = htm.bind(h);
export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  render(
    html`
      <${Paragraph}
        text=${blockquote.textContent}
        buttonLabel="Soy un link"
        onClick=${() => console.log('Click!')}
        textVariant="body"
        buttonType="red"
      />
    `,
    quoteWrapper,
  );
}
