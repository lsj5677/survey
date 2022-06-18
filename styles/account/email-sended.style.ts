import { css } from '@emotion/react';

export const emailSendedStyle = css`
  text-align: center;
  min-height: 50vh;
  display: flex;
  align-items: center;
  
  .email-sended-container {
    width: 100%;
    max-width: 1000px;
    padding: 3em 0;
    border: 1px solid #eee;
    box-sizing: border-box;

    margin: 0 auto;
      h1.logo {
      position: relative;
      text-align: center;
      font-size: 3em;
      font-weight: 500;
      color: #eee;
    }

    h3 {
      font-size: 2em;
      font-weight: 500;
      text-align: center;
      letter-spacing: 0.5px;
      color: #333;
    }

    p {
      font-size: 1em;
      margin-top: 1.5em;
      text-align: center;
      color: #333;
      word-break: keep-all;

      span {
        display: block;
        margin-bottom: 1em;
        color: #111;
      }
    }

    ul {
      margin-top: 1em;
      font-size: 0.9em;

      li {
        margin-top: 1em;
        b {
          display: block;
        }
      }
    }

    a {
      display: inline-block;
      margin-top: 2em;
      background-color: var(--mainColor);
      color: #fff;
      padding: 1em 3em;
      font-size: 1em;
      border-radius: 2px;
      cursor: pointer;
    }
  }
`;