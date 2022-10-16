import { css } from 'styled-components';

function setAnimation(value) {
  return css`
    @media (prefers-reduced-motion: no-preference) {
      animation: ${value};
    }
  `;
}

function setTransition(value) {
  return css`
    @media (prefers-reduced-motion: no-preference) {
      transition: ${value};
    }
  `;
}

export { setAnimation, setTransition };
