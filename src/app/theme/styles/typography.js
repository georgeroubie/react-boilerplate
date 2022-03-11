import { css } from 'styled-components';

const typography = css`
  body {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
    color: ${({ theme: { colors } }) => colors.textPrimary};
  }

  code {
    font-family: Consolas, monospace;
  }

  a {
    color: ${({ theme: { colors } }) => colors.textPrimary};
  }
`;

export { typography };
