import { NavLink as _NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../components/ui/Logo';

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme: { spacing } }) => spacing.large} 0;
  gap: ${({ theme: { spacing } }) => spacing.normal};
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
  { path: '/info', label: 'Info' },
  { path: '/settings', label: 'Settings' },
];

const Menu = () => {
  return (
    <Wrapper>
      <Logo />
      {menuItems.map(({ path, label }) => (
        <NavLink key={path} to={path} end>
          {label}
        </NavLink>
      ))}
    </Wrapper>
  );
};

export default Menu;
