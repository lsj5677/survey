import { css, jsx } from '@emotion/react';

export const footerStyle = css`
  width: 100%;
  padding: 2em;
  color: var(--survey-colors-gray-300);
  font-weight: 300;
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    max-width: var(--survey-layout-max-width);
    margin: 0 auto;

    .footer-items > a {
      text-transform: uppercase;

      & + a {
        margin-left: 2.5em;
      }
    }
  }
`;

