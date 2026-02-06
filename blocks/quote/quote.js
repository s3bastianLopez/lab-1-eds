/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { h, render } from 'preact';
import htm from 'htm';
import Block from '../../uikit/molecules/block/block.js';

const html = htm.bind(h);
export default function decorate(block) {
  const [quoteWrapper] = block.children;

  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);

  render(
    html`
      <${Block}
        text=${blockquote.textContent}
        buttonLabel="Haz clic aquí"
        onClick=${() => console.log('Click!')}
        textVariant="body"
        buttonType="red"
      />
    `,
    quoteWrapper,
  );
}
