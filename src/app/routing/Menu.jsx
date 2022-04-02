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

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/settings', label: 'Settings' },
];

const Menu = () => (
  <Wrapper>
    <Logo />
    {menuItems.map(({ path, label }) => (
      <NavLink key={path} to={path}>
        <code>{label}</code>
      </NavLink>
    ))}
  </Wrapper>
);

export default Menu;
