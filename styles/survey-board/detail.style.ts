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
        display: block;

        &.end-date {
          text-align: right;
          margin-top: 1em;
        }
      }

      p {
        margin: 2em auto;
        word-break: keep-all;
      }

      .link-box {
        display: flex;
        align-items: center;
        border: 1px solid var(--survey-colors-gray-200);
        border-radius: 6px;
        padding: 2em;
        cursor: pointer;

        .link-desc {
          flex: auto;
        }

        .go-to-link {
          background-color: var(--survey-colors-blue-500);
          color: #fff;
          padding: 1em 2em;
          border-radius: 30px;

        }
      }
    }

    .detail-footer {
      padding: 1em;    
      border-bottom: 1px solid var(--survey-colors-gray-200);
      padding-bottom: 2em;

      .tag-list {
        justify-content: flex-end;

        span {
          cursor: default;
        }
      }
    }

    a {
      display: inline-block;
      width: 120px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin-left: auto;
      display: block;
      margin-top: 3em;
      background-color: var(--survey-colors-gray-200);
      border-radius: 6px;
      font-size: 0.9em;
    }
  }
`