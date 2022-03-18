import { css } from 'styled-components';

const setAnimation = (value) => css`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${value};
  }
`;

const setTransition = (value) => css`
  @media (prefers-reduced-motion: no-preference) {
    transition: ${value};
  }
`;

export { setAnimation, setTransition };
