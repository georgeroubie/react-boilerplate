import { css } from 'styled-components';

const typography = css`
  body {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1rem;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
    line-height: 1.4rem;
    letter-spacing: 0.05rem;
    color: ${({ theme: { colors } }) => colors.textPrimary};
  }
`;

export { typography };
