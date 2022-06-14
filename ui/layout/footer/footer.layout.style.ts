import { css, jsx } from '@emotion/react';

export const footerStyle = css`
  width: 100%;
  padding: 2em 0;
  color: var(--mediumGrayColor);
  font-weight: var(--mediumText);
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    max-width: var(--contentMaxWidth);
    margin: 0 auto;

    .footer-items > a {
      text-transform: uppercase;

      & + a {
        margin-left: 2.5em;
      }
    }
  }
`;

