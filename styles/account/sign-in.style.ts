import { css } from '@emotion/react';

export const signInStyle = css`
  .sign-in-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3em 0;

    .sign-in-items {
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

      .sign-in-item {
        border-top: 1px solid #E2E2E2;
        max-width: 400px;
        margin: 2em auto 0;
        box-sizing: border-box;
        padding-top: 1.7em;

        .google-login {
          button {
            width: 100%;
            padding: 2em 0;
            border-radius: 15px;
            text-transform: uppercase;
            font-size: 0.8em;
          }
        }

        .move-page {
          color: #A0AEC0;
          text-align: center;
          padding-top: 1.2em;
          font-size: 0.8em;
          letter-spacing: -0.3px;

          div {
            margin-top: 0.6em;
          }

          a {
            color: var(--mainColor);
            display: inline-block;
            margin-left: 0.5em;
            font-weight: 600;
          }
        }
      }
    }
  }
`;