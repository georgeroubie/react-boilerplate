import React from 'react';
import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/Logo';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavLink = styled(_NavLink)`
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;

const Menu = () => (
  <Wrapper>
    <Logo />
    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'none')}>
      <code>Home</code>
    </NavLink>
    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : 'none')}>
      <code>About</code>
    </NavLink>
  </Wrapper>
);

export default Menu;
