import { css } from '@emotion/react';

export const headerStyle = css`
  width: 100%;
  padding: 2em;
  color: var(--survey-colors-blue-500);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.2em;

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--survey-layout-max-width);
    margin: 0 auto;
    font-weight: 700;

    nav {
      color: var(--survey-colors-gray-500);
    }

    .nav-logo > a {
      font-weight: 900;
      font-size: 2em;
      text-transform: none;
      font-style: italic;

      span {
        color: var(--survey-colors-gray-200);
      }
    }

    a + a {
      margin-left: 3em;
    }

    button {
      all: unset;
      color: var(--survey-colors-blue-500);
      text-transform: uppercase;
      font-weight: 500;
      margin-left: 2.5em;
      cursor: pointer;
    }
  }
`;