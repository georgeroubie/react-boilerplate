import { css } from 'styled-components';

const base = css`
  *,
  :before,
  :after {
    box-sizing: border-box;
  }

  html,
  body {
    background-color: ${({ theme: { colors } }) => colors.background};
  }

  button {
    appearance: none;
    min-width: 0;
    border: 0;
    user-select: none;

    &:hover {
      text-decoration: none;
    }

    &:focus,
    &:active {
      outline: 0;
      box-shadow: ${({ theme: { spacing, colors } }) => `0 0 0 ${spacing.xsmall} ${colors.outline}`};
      text-decoration: none;
    }

    &.disabled,
    &:disabled {
      opacity: 0.65;
      box-shadow: none;
      text-decoration: none;
    }

    &:not(:disabled) {
      cursor: pointer;
    }
  }

  input {
    &:focus {
      outline: 0;
    }

    /* Remove autocomplete background-color */

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
      transition-delay: 9999s;
    }

    /* clears the 'X' from Internet Explorer */

    &::-ms-clear {
      display: none;
      width: 0;
      height: 0;
    }

    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    /* clears the 'X' from Chrome */

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }
`;

export { base };
