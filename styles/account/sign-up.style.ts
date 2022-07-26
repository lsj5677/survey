import { css } from '@emotion/react';

export const signUpStyle = css`
  .sign-up-container {
    max-width: var(--survey-content-max-width);
    margin: 0 auto;
    padding: 3em 0;

    .sign-up-items {
    width: 580px;
    margin: 0 auto;
    box-shadow: 0px 4px 15px rgba(162, 162, 162, 0.25);
    border-radius: 20px;
    padding: 5em 1em;
    
      form {
        max-width: 400px;
        margin: 2em auto 0;
        box-sizing: border-box;

        label {
          font-weight: 400;
        }

        input {
          padding: 0.8em 1em;
          border-radius: 15px;
          border-color: var(--survey-colors-gray-200);
          height: auto;

          &::placeholder {
            color: var(--survey-colors-gray-300);
            font-weight: 400;
          }

          + div {
            top: 50%;
            transform: translateY(-50%);
          }
        }

        button.submit {
          padding: 2em 0;
          border-radius: 15px;
          background-color: var(--survey-colors-blue-500);
          color: #fff;
          text-transform: uppercase;
          font-size: 0.8em;
        }
      }

      .sign-in-notice {
        margin: 1.5em auto 0;
        text-align: center;
        color: var(--survey-colors-gray-300);
        font-size: 0.8em;

        a {
          display: inline-block;
          margin-left: 0.5em;
          color: var(--survey-colors-blue-500);
          font-weight: 600;
        }
      }
    }
  }
`;
