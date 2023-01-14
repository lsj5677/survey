import { css } from "@emotion/react";

export const mainSectionStyle = css`
  background-color: var(--survey-colors-blue-500);
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 3em;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 3px 3px 3px #000;
    font-style: italic;
  }

  article {
    text-align: center;
    margin-top: 2rem;
  }

  span {
    font-size: 0.8rem;
    background-color: var(--survey-colors-gray-300);
    color: var(--survey-colors-gray-500);
  }

  p {
    color: #f8f8f8;
  }

  a {
    padding: 1rem 2rem;
    display: inline-block;
    text-align: center;
    border-radius: 0.5rem;
    margin: 1rem auto;
    background: linear-gradient(
      90deg,
      rgba(240, 247, 0, 1) 0%,
      rgba(197, 212, 30, 1) 34%,
      rgba(0, 212, 255, 1) 100%
    );
  }
`;
