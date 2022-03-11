import { css } from 'styled-components';

const base = css`
  body {
    background-color: ${({ theme: { colors } }) => colors.backgroundPrimary};
  }
`;

export { base };
