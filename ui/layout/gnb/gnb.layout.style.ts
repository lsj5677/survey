import { css, jsx } from '@emotion/react';

export const headerStyle = css`
  width: 100%;
  padding: 2em 0;
  color: var(--mainColor);
  text-transform: uppercase;
  font-weight: var(--boldText);

  .header-container {
    display: flex;
    justify-content: space-between;
    max-width: var(--contentMaxWidth);
    margin: 0 auto;

    a + a {
      margin-left: 2.5em;
    }

    button {
      all: unset;
      color: var(--mainColor);
      text-transform: uppercase;
      font-weight: var(--boldText);
      margin-left: 2.5em;
      cursor: pointer;
    }
  }
`;