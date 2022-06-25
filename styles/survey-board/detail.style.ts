import { css } from '@emotion/react';

export const boardDetailStyle = css`
  padding: 3em 2em;
  box-sizing: border-box;
  
  .board-detail-container {
    max-width:  var(--survey-content-max-width);
    margin: 0 auto;

    .detail-header {
      display: flex;
      align-items: center;
      width: 100%;
      background-color: var(--survey-colors-gray-100);
      padding: 1em;
      
      h4 {
        flex: auto;
      }

      span {
        color: var(--survey-colors-gray-300);
        font-size: 0.8em;
      }
    }

    .detail-body {
      padding: 1em;

      span {
        display: inline-block;
      }

      p {
        margin: 2em auto;
        word-break: keep-all;
      }

      .link-box {
        display: flex;
        align-items: center;
        border: 1px solid var(--survey-colors-gray-200);
        padding: 1em;
        cursor: pointer;

        .link-desc {
          flex: auto;
        }
      }
    }
  }
`