import { css } from '@emotion/react';

export const boardListStyle = css`
  padding: 3em 2em;
  box-sizing: border-box;
  .board-list-container {
    max-width:  var(--survey-content-max-width);
    margin: 0 auto;

    .per-page-count {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 0.8em;
      div {
        max-width: 70px;
        margin-left: 1em;
        
        select {
          vertical-align: middle;
          font-size: 1em;
        }
      }
    }

    button.write-button {
      display: block;
      min-width: 100px;
      background-color: var(--survey-colors-blue-500);
      color: #fff;
      margin-top: 2em;
      margin-left: auto;
      padding: 0.5em;
      text-align: center;
      border-radius: 5px;
    }
    

    .pagination {
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2em;
        gap: 0 1em;

        li {
          cursor: pointer;
          &.active {
            position: relative;
            display: inline-block;
            font-weight: 700;
            color: var(--survey-colors-blue-500);

            &::before {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              display: inline-block;
              width: 100%;
              height: 3px;
              background-color: var(--survey-colors-blue-500);
            }
          }

          a {
            all: unset;
          }
        }
      }
    }
  }
  `;
