import { css } from 'styled-components';

const typography = css`
  body {
    font-family: Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: ${({ theme: { fontSize } }) => fontSize.normal};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.normal};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.normal};
    letter-spacing: 0.05rem;
    color: ${({ theme: { colors } }) => colors.textPrimary};
  }
`;

export { typography };
