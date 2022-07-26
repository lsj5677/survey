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
      padding: 2em 1em;
      border-bottom: 1px solid #eee;

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
        white-space: break-spaces;

        .empty {
          color: var(--survey-colors-gray-300);
        }
      }

      .go-to-link {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--survey-colors-blue-500);
        color: #fff;
        padding: 1em 0;
        border-radius: 30px;
        width: 190px;
        height: 60px;
        text-align: center;
        margin: 0 auto;
        cursor: pointer;
        line-height: 0;

        svg {
          display: inline-block;
          vertical-align: middle;
          width: 22px;
          height: 22px;
          margin-left: 5px;
        }

        &:hover {
          background-color: var(--survey-colors-blue-700);
          transition: background-color .3s ease-in-out;
        }
      }
    }


    .button-group {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      a {
        margin-left: 1em;
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

    a, button {
      display: inline-block;
      width: 90px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: block;
      margin-top: 1em;
      background-color: var(--survey-colors-gray-200);
      border-radius: 6px;
      font-size: 0.9em;
    }
  }
`