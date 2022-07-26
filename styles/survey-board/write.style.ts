import { css } from '@emotion/react';

export const boardWriteStyle = css`
  /* padding: 3em 2em; */
  box-sizing: border-box;

  .react-datepicker__triangle {
    display: none !important;
  }

  .react-datepicker__navigation {
    top: 8px !important;
  }

  form{
    /* box-shadow: 0px 4px 15px rgba(162, 162, 162, 0.25);
    padding: 3em; */
    box-sizing: border-box;
    max-width:  800px;
    margin: 0 auto;
    font-size: 1em;

    > div {
      margin-bottom: 2em;
    }

    .custom-datepicker {
      outline: 1px solid #E2E8F0;
      border-radius: 5px;
      cursor: pointer;
      padding: 0.3em 1rem;
      font-size: 1rem;
    }

    .button-group {
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        display: inline-block;
        min-width: 100px;
        /* display: block;
        width: 100%; */
        min-height: 50px;
        
        &.submit {
          background-color: var(--survey-colors-blue-500);
          color: #fff;
        }
      }
    }
  }

`   