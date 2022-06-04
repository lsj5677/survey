import { css, jsx } from '@emotion/react';

export const signUpStyle = css`
  .sign-up-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3em 0;

    .sign-up-items {
    width: 580px;
    margin: 0 auto;
    box-shadow: 0px 4px 15px rgba(162, 162, 162, 0.25);
    border-radius: 20px;
    padding: 5em 1em;

      h1 {
        text-align: center;
        font-size: 1.6em;
        font-weight: 300;
        color: #D9D9D9;
      }

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
          height: auto;

          &::placeholder {
            color: #A0AEC0;
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
          background-color: var(--mainColor);
          color: #fff;
          text-transform: uppercase;
          font-size: 0.8em;
        }
      }

      .sign-in-notice {
        max-width: 400px;
        margin: 1em auto 0;
        text-align: center;
        color: #A0AEC0;

        a {
          display: inline-block;
          margin-left: 0.5em;
          color: var(--mainColor);
          font-weight: 600;
        }
      }
    }
  }
`;
