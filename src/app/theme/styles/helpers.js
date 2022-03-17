import { css } from 'styled-components';

const setAnimation = (value) => css`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${value};
  }
`;

export { setAnimation };
