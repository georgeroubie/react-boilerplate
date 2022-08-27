import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/ui/Logo';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const NavLink = styled(_NavLink)`
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.textPrimary};

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
        {label}
      </NavLink>
    ))}
  </Wrapper>
);

export default Menu;
