import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from './../../assets/img/logo.svg';

const Image = styled.img`
  height: 100px;
  cursor: pointer;

  @media (prefers-reduced-motion: no-preference) {
    animation: spin infinite 20s linear;
  }
`;

const Logo = () => {
  const navigate = useNavigate();
  return <Image src={logo} alt="logo" onClick={() => navigate('/')} />;
};

export default Logo;
