import Logo from '@components/ui/logo';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/components-presentation', label: 'Available components' },
];

const Menu = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      {menuItems.map(({ path, label }) => (
        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} key={path} to={path} end>
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
