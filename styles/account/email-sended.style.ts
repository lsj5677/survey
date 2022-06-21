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
    box-shadow: 0px 4px 15px rgb(162 162 162 / 25%);
    border-radius: 20px;
    box-sizing: border-box;
    margin: 3em auto;

    h3 {
      font-size: 1.6em;
      font-weight: 500;
      text-align: center;
      color: #333;
      text-transform: uppercase;
      margin-top: 1em;
    }

    p {
      font-size: 1em;
      margin-top: 1.5em;
      line-height: 2;
      text-align: center;
      color: #333;
      word-break: keep-all;

      span {
        display: inline-block;
        margin-bottom: 1em;
        color: #111;
        font-weight: 600;
        background-color: var(--survey-colors-gray-200);
        padding: 0 5px;
        line-height: 1.2;
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
      margin-top: 2.5em;
      background-color: var(--survey-colors-blue-500);
      color: #fff;
      padding: 1em 3em;
      font-size: 1em;
      border-radius: 2px;
      cursor: pointer;
    }
  }
`;