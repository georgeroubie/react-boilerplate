import React from 'react';
import logo from './../../assets/img/logo.svg';
import styled from 'styled-components';

const Image = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    & {
      animation: logo-spin infinite 20s linear;
    }
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Logo() {
  return <Image src={logo} alt="logo" />;
}
